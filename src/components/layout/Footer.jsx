import React from "react";

function Footer() {
  const footerYear = new Date().getFullYear();
  return (
    <footer className="footer p-6 text-neutral-content footer-center bg-neutral shadow-lg">
      &copy; Github Finder {footerYear} All Rights Reserved
    </footer>
  );
}

export default Footer;
