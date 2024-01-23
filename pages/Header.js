import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

function Header(props) {
  const router = useRouter()
  return (
    <>
      <header>
        <p
          className="headerTxt"
          onClick={() => { router.push('/') }}
        >
          Whose wallet?
        </p>
      </header>
    </>
  );
}

export default Header;
