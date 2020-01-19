import React, { useState } from "react";

import "./styles/index.scss";

// ---

const LoginPage = () => {
  const [tab, setTab] = useState("SIGN_IN");

  return (
    <div className="login-page">
      <div className="login-body">
        <div className="tabs">
          <button 
            className="active"
            onClick={() => setTab("SIGN_IN")}
          >
            Sign in
          </button>

          <i className="login-pipe" />

          <button
            onClick={() => setTab("SIGN_UP")}
          >
            Sign up
          </button>
        </div>

        <div className="login-wrapper">
          {tab === "SIGN_IN" && (
            <div>
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Password" />
              <button className="btn-submit">Submit</button>
            </div>
          )}

          {tab === "SIGN_UP" && (
            <div>
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Password" />
              <input type="text" placeholder="Confirm" />
              <button className="btn-submit">Submit</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
