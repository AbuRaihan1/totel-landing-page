import React from "react";
import HomePeople from "./HomePeople";
import image1 from "../../../assets/images/image1.png";
import image2 from "../../../assets/images/image2.png";
import image3 from "../../../assets/images/image3.png";
import image4 from "../../../assets/images/image4.png";
import verifedImg from "../../../assets/icons/verified.png";
const HomePersons = () => {
  const peoples = [
    {
      name: "Devid Johanson",
      age: "23 years",
      gender: "male",
      description:
        "Looking for 1-2 roommates for a place in Manchester city centre (wanting to move in around August time) but happy to move in with more than that, I’m super easy going and tidy.",
      lookingNear: "Bristol, Bath & London",
      image: image1,
      verified: verifedImg,
    },
    {
      name: "Alice Smith",
      age: "28 years",
      gender: "female",
      description:
        "Looking for 1-2 roommates for a place in Manchester city centre (wanting to move in around August time) but happy to move in with more than that, I’m super easy going and tidy.",
      lookingNear: "New York, NY",
      image: image2,
      verified: verifedImg,
    },
    {
      name: "John Doe",
      age: "31 years",
      gender: "male",
      description:
        "Looking for 1-2 roommates for a place in Manchester city centre (wanting to move in around August time) but happy to move in with more than that, I’m super easy going and tidy.",
      lookingNear: "San Francisco, CA",
      image: image3,
      verified: verifedImg,
    },
    {
      name: "Emily Johnson",
      age: "25 years",
      gender: "female",
      description:
        "Looking for 1-2 roommates for a place in Manchester city centre (wanting to move in around August time) but happy to move in with more than that, I’m super easy going and tidy.",
      lookingNear: "Los Angeles, CA",
      image: image4,
      verified: verifedImg,
    },
    {
      name: "Michael Brown",
      age: "27 years",
      gender: "male",
      description:
        "Looking for 1-2 roommates for a place in Manchester city centre (wanting to move in around August time) but happy to move in with more than that, I’m super easy going and tidy.",
      lookingNear: "Austin, TX",
      image: image1,
      verified: verifedImg,
    },
    {
      name: "Sophia Martinez",
      age: "22 years",
      gender: "female",
      description:
        "Looking for 1-2 roommates for a place in Manchester city centre (wanting to move in around August time) but happy to move in with more than that, I’m super easy going and tidy.",
      lookingNear: "Chicago, IL",
      image: image2,
      verified: verifedImg,
    },
    {
      name: "William Taylor",
      age: "29 years",
      gender: "male",
      description:
        "Looking for 1-2 roommates for a place in Manchester city centre (wanting to move in around August time) but happy to move in with more than that, I’m super easy going and tidy.",
      lookingNear: "Seattle, WA",
      image: image3,
      verified: verifedImg,
    },
    {
      name: "Olivia Anderson",
      age: "26 years",
      gender: "female",
      description:
        "Looking for 1-2 roommates for a place in Manchester city centre (wanting to move in around August time) but happy to move in with more than that, I’m super easy going and tidy.",
      lookingNear: "Boston, MA",
      image: image4,
      verified: verifedImg,
    },
    {
      name: "Daniel Clark",
      age: "24 years",
      gender: "male",
      description:
        "Looking for 1-2 roommates for a place in Manchester city centre (wanting to move in around August time) but happy to move in with more than that, I’m super easy going and tidy.",
      lookingNear: "Denver, CO",
      image: image1,
      verified: verifedImg,
    },
    {
      name: "Mia Rodriguez",
      age: "30 years",
      gender: "female",
      description:
        "Looking for 1-2 roommates for a place in Manchester city centre (wanting to move in around August time) but happy to move in with more than that, I’m super easy going and tidy.",
      lookingNear: "San Diego, CA",
      image: image2,
      verified: verifedImg,
    },
    {
      name: "Christopher Lee",
      age: "27 years",
      gender: "male",
      description:
        "Looking for 1-2 roommates for a place in Manchester city centre (wanting to move in around August time) but happy to move in with more than that, I’m super easy going and tidy.",
      lookingNear: "Portland, OR",
      image: image3,
      verified: verifedImg,
    },
    {
      name: "Ava White",
      age: "29 years",
      gender: "female",
      description:
        "Looking for 1-2 roommates for a place in Manchester city centre (wanting to move in around August time) but happy to move in with more than that, I’m super easy going and tidy.",
      lookingNear: "Vancouver, BC",
      image: image4,
      verified: verifedImg,
    },
  ];

  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2  gap-8 p-10">
      {peoples.map((people, idx) => (
        <HomePeople key={idx} people={people} />
      ))}
    </div>
  );
};

export default HomePersons;
