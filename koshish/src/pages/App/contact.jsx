import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/App";
import {
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";
import { Helmet } from "react-helmet-async";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix Leaflet icon issue in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
});

const Contact = () => {
  const { docuTitle, setDocuTitle, handleContactus } = useContext(AppContext);

  useEffect(() => {
    setDocuTitle("Contact-Koshish");
  }, [docuTitle]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [heading, setHeading] = useState("");
  const [para, setPara] = useState("");

  const data = { name, email, location, heading, para };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    handleContactus(data);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
      <h2 className="text-3xl sm:text-4xl font-bold text-center font-mono mb-12">
        Contact Us
      </h2>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Contact Form */}
        <form
          onSubmit={onSubmitHandler}
          className="bg-green-100 rounded-xl p-6 sm:p-8 w-full lg:w-1/2 space-y-5 shadow-lg"
        >
          <div>
            <label className="block text-sm font-semibold mb-1">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              required
              className="w-full p-3 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="w-full p-3 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Location</label>
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              type="text"
              className="w-full p-3 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Heading</label>
            <input
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
              type="text"
              className="w-full p-3 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1">Message</label>
            <textarea
              value={para}
              onChange={(e) => setPara(e.target.value)}
              rows="4"
              className="w-full p-3 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition duration-200 font-semibold"
          >
            Send Message
          </button>
        </form>

        {/* Map + Info */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Drop a mail at</h3>
            <a
              href="mailto:team@koshishwelfare.in"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 underline hover:text-blue-800 break-words"
            >
              team@koshishwelfare.in
            </a>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Call us at</h3>
            <a
              href="tel:+918467865427"
              className="text-blue-600 underline hover:text-blue-800 break-words"
            >
              +91 84678 65427
            </a>
          </div>

          {/* Leaflet Map */}

          <div className="h-[300px] sm:h-[400px] w-full rounded-lg overflow-hidden shadow-md">
            <h2>
              <span className="font-bold">Address:</span> Akbarpur – Tanda Road, Akbarpur, Ravepur Vhaudden Pur, Uttar Pradesh 224122
            </h2>
            <MapContainer
              center={[26.45835, 82.56189]}
              zoom={13}
              className="h-full w-full"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[26.45835, 82.56189]}>
                <Popup>
                  Koshish Welfare Office
                  <br /> Uttar Pradesh, India
                </Popup>
              </Marker>
            </MapContainer>
          </div>

          {/* Social Media */}
          {/* Social Media */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center space-x-6 text-green-600 text-2xl">
              <a
                href="https://youtube.com/@koshishwefareoffical"
                target="_blank"
                rel="noreferrer"
              >
                <FaYoutube className="hover:text-blue-800 transition" />
              </a>
              <a
                href="https://www.instagram.com/koshishwesociety"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram className="hover:text-pink-500 transition" />
              </a>
              <a
                href="https://www.linkedin.com/company/koshish-institute-of-education"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn className="hover:text-blue-700 transition" />
              </a>
              <a
                href="https://whatsapp.com/channel/0029VbAqn6nHQbS9RygNS02m"
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp className="hover:text-green-500 transition" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
