import React from "react";
import "./App.css";
import ParticlesComp from "./components/Particles";
import Work from "./components/Work";
import { usePageContext } from "./components/PortfolioContext";
import ContactForm from "./components/ContactForm";

export default function App() {
  const { pageState } = usePageContext();

  function contactOrWork() {
    if (pageState.work === true && !pageState.contact) {
      return <Work />;
    } else {
      return <ContactForm />;
    }
  }

  let body = contactOrWork();

  return (
    <>
      <div className="content">
        <ParticlesComp />
        {body}
      </div>
    </>
  );
}
