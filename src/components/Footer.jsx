import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="mb-0 text-center">
        <div className="d-flex align-items-center justify-content-center pb-5">
          <div className="col-md-6">
            <p>
            <a href="https://bazar-react.vercel.app">Privacy Policy</a>
            &nbsp; &nbsp;
            <a href="https://bazar-react.vercel.app">Terms and Conditions</a>
            </p>
            <a className="text-dark fs-4" href="https://github.com/mohammaddilshad" target="_blank" rel="noreferrer">
              <i className="fa fa-github"></i>
            </a>
            <pre>© Dilshad</pre>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
