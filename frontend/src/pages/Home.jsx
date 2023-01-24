import React from "react";
import { Link } from "react-router-dom";
import { FaQuestionCircle, FaTicketAlt } from "react-icons/fa";

function Home() {
  return (
    <>
      <section className="heading">
        <h1>What do you need help with ?</h1>
        <p>Please choose from an option below</p>
      </section>
      <div>
        <Link to="/new-ticket" className="btn btn-reserve">
          <FaQuestionCircle /> Create New Ticket
        </Link>
      </div>
      <div style={{ marginTop: "1rem" }}>
        <Link to="/tickets" className="btn btn-block">
          <FaTicketAlt /> View My Tickets
        </Link>
      </div>
    </>
  );
}

export default Home;
