import React from 'react'
import { ToastContainer } from 'react-toastify';

export default function Tostify() {
 return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        pauseOnHover
        closeOnClick
      />

      {/* baaki sab routes / components */}
    </>
  );
}
