import React from "react";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header, Link } from "./SharedLayoutStyle";

const MenuLinks = [
  { to: "/dummyTable", text: "Dummy Table" },
  { to: "/dummyChart", text: "Dummy Chart" },
  { to: "/dummyList", text: "Dummy List" },
];

const SharedLayout = () => {
  return (
    <div>
      <Header>
        {MenuLinks.map((link) => (
          <Link key={link.to} to={link.to} activeClassName="active">
            {link.text}
          </Link>
        ))}
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
