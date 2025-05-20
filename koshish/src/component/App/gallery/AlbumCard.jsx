import React from 'react'
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
const AlbumCard = ({item}) => {
    const navigate = useNavigate();
  return (
    <div
    key={item._id}
    className="bg-green-100 border rounded-lg shadow hover:shadow-md transition cursor-pointer"
    onClick={() => navigate(`/gallery/${item._id}`)}
  >
    <Helmet>
      <title>Koshish-Gallery</title>
      <meta name="description" content={item.description} />
      <meta name="keywords" content={item.keywords} />
      <link rel="canonical" href={`https://www.koshishwelfare.in/gallery/${item._id}`} />
      <meta property="og:title" content={item.galleryTitle} />
      <meta property="og:description" content={item.description} />
      <meta property="og:image" content={item.thumbnail} />
      <meta property="og:url" content={`https://www.koshishwelfare.in/gallery/${item._id}`} />
      <meta property="og:type" content="website" />
    </Helmet>
    <img
      src={item.thumbnail}
      alt="thumbnail"
      className="w-full h-48 object-cover rounded-t-lg"
    />
    <div className="p-3">
      <h3 className="text-lg text-blue10 font-semibold">{item.galleryTitle}</h3>
      <p className="text-md text-gray-900">
        {new Date(item.date).toLocaleDateString()}
      </p>
    </div>
  </div>
  )
}

export default AlbumCard