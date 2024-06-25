import React from "react";
import "./EventsPage.css";
import Header from "./EventsComponents/Header";
import Body from "./EventsComponents/Body";
import Footer from "./EventsComponents/Footer";

function EventsPage() {
  return (
    <div className="container">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default EventsPage;
