import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Outlet, useNavigate } from "react-router-dom"

const Authlayout = () => {

  const isAuthenticated = false;

  const navigate = useNavigate();

  return (
    <>
    <Toaster/>
    {isAuthenticated ? (
      navigate('/')
    ) : (
      <>
        <section className="flex flex-1 justify-center items-center flex-col py-10">
          <Outlet />
        </section>
      </>
    )}
  </>
  );
}

export default Authlayout