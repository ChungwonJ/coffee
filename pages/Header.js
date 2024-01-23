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
          Who Coffee?
        </p>
      </header>
    </>
  );
}

export default Header;
