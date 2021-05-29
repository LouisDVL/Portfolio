import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-scroll";
import { usePageContext } from "./PortfolioContext";

export default function HeaderText() {
  const { pageDispatch } = usePageContext();

  function viewContact() {
    pageDispatch({ type: "Contact" });
  }

  function viewWork() {
    pageDispatch({ type: "Work" });
  }

  return (
    <div className="headerText align-items-center align-middle my-auto mx-auto">
      <h1>Hello, I am Louis Lising</h1>
      <p>Full-Stack Developer</p>
      <Link
        activeClass="active"
        to="portWork"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        <Button variant="primary" onClick={viewWork}>
          {" "}
          View My Work
        </Button>
      </Link>
      <Button className="btn btn-primary ml-3" onClick={viewContact}>
        Contact
      </Button>
    </div>
  );
}
