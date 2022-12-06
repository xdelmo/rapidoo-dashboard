import React from "react";

function Footer() {
  return (
    <footer
      id="footer"
      className="text-right bg-accentDesaturated py-7 px-4 text-sm"
    >
      <p className="uppercase inline text-accentParagraph ">
        Copyright @ 2022{" "}
      </p>
      <a href="#">
        <span className="text-primary font-semibold">
          <span className="uppercase">Rapidoo</span> S.r.l.
        </span>
      </a>
    </footer>
  );
}

export default Footer;
