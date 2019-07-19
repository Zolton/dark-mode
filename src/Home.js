import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1> Hello, welcome to Crypto-current chart central</h1>

      <Link to="/charts">
        <button>Click Me!</button>
      </Link>
    </>
  );
}

export default Home;
