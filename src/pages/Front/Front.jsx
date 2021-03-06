import React from "react";
import { Link } from "react-router-dom";
import "./front.scss";
import Button from "../../components/ButtonComponent/buttoncomponent";

export default function Front(props) {
  return (
    <div className="front-page">
      <h1 className="front-page-title">
        CodeYourFuture Homework
        <br /> Tracking App
      </h1>
      <Link to="/login">
        <Button title={"Login as a Teacher"} />
      </Link>
    </div>
  );
}
