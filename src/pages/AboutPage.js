import React from "react";
import Card from "../shared/Card";
import { Link } from "react-router-dom";

export const AboutPage = () => {
  return (
    <Card>
      <div className="about">
        <h1>About This Project</h1>
        <p>This is react app to leave feedback</p>
        <p>version 1.0.0</p>
        <Link to="/"> Back to home</Link>
      </div>
    </Card>
  );
};
