import React from "react";
import NoEvent from "./NoEvent";
import { Helmet } from "react-helmet-async";
import { useEffect, useContext } from "react";
import { AppContext } from "../../../context/App";
import ServerErr from "../../SeverErr";
import Loader from "../../Loader";
import EventCard from "./EventCard";
const NewEvent = () => {
  const { newEvent, handleNewEvent } = useContext(AppContext);
  useEffect(() => {
    handleNewEvent();
  }, []);
  console.log("newEvent: ", newEvent);
  return (
    <div className="relative  px-4 sm:px-6 lg:px-8 py-8">
      <Helmet>
        <title>See Recent Events - Koshish</title>
        <meta name="description" content="Stay updated with our recent events at Koshish." />
        <meta name="keywords" content="Koshish, Events, Recent Events" />
        <meta name="author" content="Koshish Team" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue10 mb-6">
            See Recent Events
          </h2>
          <p className="text-md sm:text-xl font-sm text-gray-700 leading-relaxed">
          Stay updated with our upcoming events! We are excited to bring new opportunities for learning, networking, and growth. These events are designed to inspire, challenge, and empower participants to make a difference in their fields.
          </p>
        </div> 
      {newEvent != "5xx" ? (
        <div>
          {newEvent == "NODATA" ? (
            <NoEvent />
          ) : (
            <div>
              {
                <div className="min-h-screen bg-green-50 py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
                  {newEvent.length == 0 ? (
                    <Loader />
                  ) : (
                    newEvent.map((event) => (
                      <EventCard key={event._id} event={event} />
                    ))
                  )}
                </div>
              }
            </div>
          )}
        </div>
      ) : (
        <ServerErr />
      )}
    </div>
  );
};

export default NewEvent;
