import React from "react";

export default function Weather() {
  return (
    <div className="weather">
      <input placeholder="Enter a city..." />
      <input type="submit" value="Search" />
    </div>
  );
}
