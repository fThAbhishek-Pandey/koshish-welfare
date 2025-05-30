import React, { useContext, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import NoAnouncement from './NoAnouncement'
import { AppContext } from '../../../context/App';
import NewsCard from './NewsCard';
const NewAnnouncement = () => {
  const { newAnnouncement, handleNewAnnouncement } = useContext(AppContext);
 
  useEffect(() => {
    handleNewAnnouncement();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <Helmet>
        <title>New Announcements - Koshish</title>
        <meta name='description' content='Stay updated with the latest news and announcements from Koshish.' />
        <meta name='keywords' content='Koshish, News, Announcements, Updates' />
        <meta name='author' content='Koshish Team' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='robots' content='index, follow' />
      </Helmet>
      <div className="w-full px-4 py-12">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue10 mb-6">
          Stay Updated with KOSHISH
          </h2>
          <p className="text-md sm:text-xl font-sm text-gray-700 leading-relaxed">
          This section brings you the latest updates, upcoming events, and exciting competitions organized by KOSHISH. Stay tuned and be a part of every impactful step we take.
          </p>
        </div>
      </div>
      {newAnnouncement && newAnnouncement.length !== 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {newAnnouncement.map((announcement) => (
            <NewsCard announcement={announcement} />
          ))}
        </div>
      ) : (
        <NoAnouncement />
      )}
    </div>
  );
};

export default NewAnnouncement;
