import React, { useState } from "react";
import MobilesCard from "./MobilesCard";
import Divider from "./Divider";
const Season = () => {
  const [mobiles, setMobiles] = useState([
    {
      id: 5,
      image: "i13.jpg",
      name: "Iphone 13",
      price: "26999",
    },
    {
      id: 6,
      image: "i15.jpg",
      name: "Iphone 15",
      price: "63999",
    },
    {
      id: 7,
      image: "i16.jpg",
      name: "Iphone 16",
      price: "27999",
    },
    {
      id: 8,
      image: "iphone12.jpg",
      name: "iphone12",
      price: "28999",
    },
  ]);
  return (
    <div>
      <section className="w-5/6 mx-auto my-10">
        <Divider title={'Season Specials'}/>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-16 my-10 py-10">
          {mobiles.map((mobile) => {
            return <MobilesCard key={mobile.id} mobile={mobile} />;
          })}
        </div>
      </section>
    </div>
  );
};

export default Season;
