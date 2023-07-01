import axios from "axios";
const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_API_KEY;

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: {
    Authorization: `token ${GITHUB_TOKEN}`,
  },
});

export const searchUser = async (text) => {
  const params = new URLSearchParams({ q: text });
  const response = await github.get(`/search/users?${params}&per_page=12`);
  const { items } = response.data;
  return items;
};

export const getUserAndRepos = async (login) => {
  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos?per_page=5`),
  ]);

  return { user: user.data, repos: repos.data };
};
