import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../assets/image1.webp";
import image2 from "../assets/image2.webp";
import image3 from "../assets/image3.webp";
import image4 from "../assets/image4.webp";
import suit from "../assets/suits.jpg";
import shirts from "../assets/shirts.webp";
import tshirt from "../assets/tshirt.webp";
import kurta from "../assets/kurta.webp";
import perfume from "../assets/perfume.jpg";
import perfume2 from "../assets/perfume2.jpg";
import perfume3 from "../assets/perfume3.jpg";
import watch1 from "../assets/watch1.jpg";
import watch2 from "../assets/watch2.jpg";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
  };

  return (
    <div className="mt-20 p-4 max-w-full overflow-x-hidden">
      {/* Slider Section */}
      <div className="mb-12">
        <Slider {...settings}>
          <div className="relative">
            <img
              src={image1}
              alt="Fashion 1"
              className="w-full h-96 object-contain rounded-lg"
            />
          </div>
          <div className="relative">
            <img
              src={image2}
              alt="Fashion 2"
              className="w-full h-96 object-contain rounded-lg"
            />
          </div>
          <div className="relative">
            <img
              src={image3}
              alt="Fashion 3"
              className="w-full h-96 object-contain rounded-lg"
            />
          </div>
          <div className="relative">
            <img
              src={image4}
              alt="Fashion 4"
              className="w-full h-96 object-contain rounded-lg"
            />
          </div>
        </Slider>
      </div>

      {/* Trending Now Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Trending Now</h1>
        <p className="text-lg text-gray-600 mb-8">
          "Turn heads with the hottest trending clothes that redefine style!"
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {/* Suits Card */}
          <div className="relative text-center group">
            <img
              src={suit}
              alt="Suits"
              className="w-full h-64 object-contain rounded-lg"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div>
                <h2 className="text-white text-2xl font-semibold">Suits</h2>
                <p className="text-white">Designer</p>
              </div>
            </div>
          </div>

          {/* Shirts Card */}
          <div className="relative text-center group">
            <img
              src={shirts}
              alt="Shirts"
              className="w-full h-64 object-contain rounded-lg"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div>
                <h2 className="text-white text-2xl font-semibold">Shirts</h2>
                <p className="text-white">Summer</p>
              </div>
            </div>
          </div>

          {/* T-Shirt Card */}
          <div className="relative text-center group">
            <img
              src={tshirt}
              alt="T-Shirts"
              className="w-full h-64 object-contain rounded-lg"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div>
                <h2 className="text-white text-2xl font-semibold">T-Shirts</h2>
                <p className="text-white">Versatile</p>
              </div>
            </div>
          </div>

          {/* Kurta Card */}
          <div className="relative text-center group">
            <img
              src={kurta}
              alt="Kurta"
              className="w-full h-64 object-contain rounded-lg"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div>
                <h2 className="text-white text-2xl font-semibold">Kurta</h2>
                <p className="text-white">Stylish</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-center mb-6">
          Featured Products
        </h1>
        <p className="text-lg text-center text-gray-600 mb-8">
          ✨ Unleash luxury with our top-selling fragrance – long-lasting and
          crafted to perfection!
        </p>

        <div className="grid sm:grid-cols-3 gap-6">
          {/* Perfume 1 */}
          <div className="text-center p-4 border rounded-lg">
            <div className="relative h-48 mb-4">
              <img
                src={perfume}
                alt="Perfume 1"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
            <h2 className="text-xl font-semibold">Perfume</h2>
            <p className="text-gray-500">
              A fragrance that enhances your personality.
            </p>
          </div>

          {/* Perfume 2 */}
          <div className="text-center p-4 border rounded-lg">
            <div className="relative h-48 mb-4">
              <img
                src={perfume2}
                alt="Perfume 2"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
            <h2 className="text-xl font-semibold">Perfume</h2>
            <p className="text-gray-500">Long-lasting and luxurious.</p>
          </div>

          {/* Perfume 3 */}
          <div className="text-center p-4 border rounded-lg">
            <div className="relative h-48 mb-4">
              <img
                src={perfume3}
                alt="Perfume 3"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
            <h2 className="text-xl font-semibold">Perfume</h2>
            <p className="text-gray-500">
              Crafted to perfection for any occasion.
            </p>
          </div>
        </div>
      </div>

      {/* Watches Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-6">Watches</h1>
        <p className="text-lg text-gray-600 mb-8">
          A watch is more than just a timepiece—it’s a statement of style,
          sophistication, and success.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {/* Watch 1 */}
          <div className="text-center p-4 border rounded-lg">
            <div className="relative h-48 mb-4">
              <img
                src={watch1}
                alt="Watch 1"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
            <h2 className="text-xl font-semibold">Watch 1</h2>
            <p className="text-gray-500">Symbol of Elegance</p>
          </div>

          {/* Watch 2 */}
          <div className="text-center p-4 border rounded-lg">
            <div className="relative h-48 mb-4">
              <img
                src={watch2}
                alt="Watch 2"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
            <h2 className="text-xl font-semibold">Watch 2</h2>
            <p className="text-gray-500">Boosts Confidence</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
