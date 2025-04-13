import React from "react";

const AccessorieCard = ({
  image2,
  image3,
  watch1,
  watch2,
  head,
  head_b,
  paragraph,
  paragraph1,
  list,
  list2,
  list3,
  list4,
  list_b,
  list_b1,
  list_b2,
  list_b3,
}) => {
  return (
    <>
      <div className="space-y-12 px-11">
        {/* Perfume Section */}
        <div className="flex flex-col md:flex-row justify-between items-center bg-white p-6 rounded-3xl shadow-xl">
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">{head}</h2>
            <p className="text-gray-700 mb-4">{paragraph}</p>
            <ul className="space-y-2 text-gray-600">
              <li>{list}</li>
              <li>{list2}</li>
              <li>{list3}</li>
              <li>{list4}</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
            <img
              src={image2}
              alt="Perfume 2"
              className="object-cover h-40 rounded-lg transform transition duration-500 hover:scale-110"
            />
            <img
              src={image3}
              alt="Perfume 3"
              className="object-cover h-40 rounded-lg transform transition duration-500 hover:scale-110"
            />
          </div>
        </div>

        {/* Watch Section */}
        <div className="flex flex-col md:flex-row justify-between items-center bg-white p-6 rounded-3xl shadow-2xl ">
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-4 ">
            <img
              src={watch1}
              alt="Watch 1"
              className="object-cover h-40 rounded-lg transform transition duration-500 hover:scale-110"
            />
            <img
              src={watch2}
              alt="Watch 2"
              className="object-cover h-40 rounded-lg transform transition duration-500 hover:scale-110"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-semibold mb-4">{head_b}</h2>
            <p className="text-gray-700 mb-4">{paragraph1}</p>
            <ul className="space-y-2 text-gray-600">
              <li>{list_b}</li>
              <li>{list_b1}</li>
              <li>{list_b2}</li>
              <li>{list_b3}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccessorieCard;
