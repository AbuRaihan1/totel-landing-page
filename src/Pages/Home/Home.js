import React from "react";
import HomePersons from "./HomePerson/HomePersons";
import IndustryText from "./IndustryText";
import Notification from "../../components/Notification/Notification";

const Home = () => {
  return (
    <div>
      <Notification />
      <HomePersons />
      <IndustryText />
    </div>
  );
};

export default Home;
