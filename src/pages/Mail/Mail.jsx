import React from "react";
import "./Mail.css";
import { Link } from "react-router-dom";

const Mail = () => {
  return (
    <div className="contact-sec container">
      <div className="contact-one text-start px-3 py-2 mb-3">
        <p className="m-0">
          <Link to="/" className="text-decoration-none">
            Home /
          </Link>
          <span>
            <Link to="/mail" className="text-decoration-none">
              contact
            </Link>
          </span>
        </p>
      </div>

      {/* =================== */}
      <div className="contact-two px-3 text-start py-3 d-flex flex-column align-items-start gap-4 mb-3">
        <h2 className="m-0">contact</h2>

        {/* ============================================= */}
        <div className="all-media d-flex align-items-center justify-content-between">
          <div className="each-contact d-flex flex-column align-items-center justify-content-center rounded-1">
            <div className="d-flex flex-column align-items-center gap-3">
              <img src="" alt="" />
              <p>phone number</p>
            </div>
            <p>+234 8107399476</p>
          </div>

          <div className="each-contact d-flex flex-column align-items-center justify-content-center rounded-1">
            <div className="d-flex flex-column align-items-center gap-3">
              <img src="" alt="" />
              <p>Email</p>
            </div>
            <p>ifeachorchukwudi4@gmail.com</p>
          </div>

          <div className="each-contact d-flex flex-column align-items-center justify-content-center rounded-1">
            <div className="d-flex flex-column align-items-center gap-3">
              <img src="" alt="" />
              <p>Address place</p>
            </div>
            <p>No 13, brown street, aguda, lagos</p>
          </div>
        </div>
      </div>

      {/* ================================ */}
      <div className="loc-con d-flex align-items-center justify-content-between">
        <img src="" alt="" />
        <form action="">
          <div>
            <h3></h3>
            <div>
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <textarea name="" id=""></textarea>
            </div>
          </div>

          <button>send</button>
        </form>
      </div>
    </div>
  );
};

export default Mail;
