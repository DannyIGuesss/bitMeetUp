import React from "react";

function Footer() {
  return (
    <footer className=" justify-between flex w-full bg-blue-600">
      <div className=" flex justify-around items-center w-full">
        <ul className="flex w-full justify-around">
          <li>
            <button className="bg-blue-400 px-3.5 py-1 rounded-md">
              Contact Us
            </button>
          </li>
          <li>
            <button className="bg-blue-400 px-3.5 py-1 rounded-md">
              Manage
            </button>
          </li>
          <li>
            <button className="bg-blue-400 px-3.5 py-1 rounded-md">
              Sign up for news
            </button>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
