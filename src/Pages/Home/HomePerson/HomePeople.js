import React from "react";

const HomePeople = ({ people }) => {
  const { name, age, gender, description, lookingNear, image, verified } =
    people;
  return (
    <div className="w-100 bg-base-100 border rounded-xl">
      <img src={image} alt="Shoes" className="w-full rounded-t-xl h-[285px]" />
      <div className="p-4">
        <div className="flex items-center gap-1">
          <h2 className="card-title font-inter">{name}</h2>
          <img src={verified} alt="" />
        </div>
        <p className="font-inter text-[14px]  font-[500] mb-2 text-black">
          {age} / {gender}
        </p>
        <p className="text-[#5F6D7E] text-[14px] font-[400] font-inter text-justify">
          {description}
        </p>
        <p className="pt-4 text-[#272D37] text-[15px] font-[500] font-inter ">
          Looking Near: {lookingNear}
        </p>
      </div>
    </div>
  );
};

export default HomePeople;
