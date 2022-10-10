import Link from "next/link";
import React from "react";

function index() {
  return (
    <>
      <header className="fixed top-10 left-[90px] right-[90px] flex justify-between items-center">
        {/* Kiri */}
        <div className="flex items-center">
          {/* LOGO */}
          <Link href="#">
            <a>
              <img src="/images/logo.svg" alt="logo" className="h-[45px]" />
            </a>
          </Link>
          {/* Link */}
          <nav className="ml-[50px]">
            <ul className="flex space-x-[30px]">
              <li>
                <Link href="#">
                  <a className="text-text-200">Featured</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="text-text-200">How It Work</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="text-text-200">Pricing</a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* kanan */}
        <ul className="flex">
          <li>
          <Link href="#">
            <a className="px-8 py-3 text-text-200">Contact Us</a>
          </Link>
          </li>
          <li>
          <Link href="#">
            <a className="px-8 py-3 bg-brand text-white rounded-md">Join Us</a>
          </Link>
          </li>
        </ul>
      </header>
    </>
  );
}

export default index;