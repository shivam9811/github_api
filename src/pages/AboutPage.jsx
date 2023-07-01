import React from "react";

import Main from "../components/helpers/Main";

function AboutPage() {
  return (
    <Main>
      <h1 className="text-6xl mb-4">Github Finder</h1>
      <p className="mb-4 text-2xl font-light">
        A React app to search GitHub profiles and see profile details.
      </p>
      <p className="text-lg text-gray-400">
        Version <span className="text-white">1.0.0</span>
      </p>
      <p className="text-lg text-gray-400">
        created By:<span className="text-white"> Shivam Gupta</span>
      </p>
    </Main>
  );
}

export default AboutPage;
