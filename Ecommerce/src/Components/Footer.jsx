import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-12 lg:px-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Registered Office Address
            </h3>
            <p className="text-sm">
              Fashion Internet Private Limited,
              <br /> Buildings Alyssa, Bengonia & Clove Embassy Tech Village,
              <br /> Devarabeesanahalli Village, Bengaluru, 560103,
              <br /> Karnataka, India <br />
              <strong>Telephone:</strong> 044-45614700 / 044-67415800
            </p>
          </div>

          {/* About Footer Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">About</h2>
            <ul>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Help Footer Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Help</h2>
            <ul>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  Track Your Order
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  Payments
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  Cancellation
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  Customer Care
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Footer Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
            <ul>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr className="border-gray-600 my-8" />

      {/* Mini Footer Section */}
      <div className="text-center text-sm text-gray-400">
        <p>Conditions of Use & Sale | Privacy Notice | Interest-Based Ads</p>
        <p>© 1996-2025, Fashion.com, Inc. or its affiliates</p>
      </div>
    </footer>
  );
};

export default Footer;
