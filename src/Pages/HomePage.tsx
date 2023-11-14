import React, { useState, useEffect } from "react";
import Intro from "../Components/HomeComponents/Intro";
import Card from "../Components/HomeComponents/Card";
import CardLayout from "../Components/HomeComponents/CardLayout";
const HomePage = () => {
  return (
    <div className="w-full"
    >
        <Intro />
        <CardLayout />
    </div>
  );
};

export default HomePage;
