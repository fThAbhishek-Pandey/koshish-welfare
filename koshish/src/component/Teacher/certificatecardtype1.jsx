import React, { useContext } from "react";
import {QRCodeCanvas} from 'qrcode.react';

import { TeacherContext } from '../../context/TeacherContext'
const CertificateCardType1 = ({ certificate }) => {
    const {backendURL} = useContext(TeacherContext)
  const {
    _id,
    name,
    type,
    subject,
    joinTime,
    leaveTime,
    speciality,
    isTop,
    yog,
  } = certificate;

  const verificationUrl = `${"koshishdevelop.vercel.app"}/certify/${type}/${_id}`;

  return (
    <div className="w-full max-w-3xl mx-auto border-4 border-blue-600 p-8 rounded-xl shadow-lg bg-white relative">
      <h1 className="text-3xl font-bold text-center text-blue-700">Certificate of {type}</h1>
      
      {isTop && (
        <div className="absolute top-4 right-4 bg-yellow-400 px-3 py-1 rounded-full text-xs font-semibold uppercase">
          Top Performer
        </div>
      )}

      <div className="mt-8 text-center space-y-3">
        <p className="text-xl font-semibold">This is to certify that</p>
        <p className="text-2xl font-bold text-gray-800">{name}</p>
        <p className="text-lg">has successfully completed the <strong>{subject}</strong> course.</p>

        <p className="text-sm text-gray-600">
          Duration: {new Date(joinTime).toLocaleDateString()} to{" "}
          {new Date(leaveTime).toLocaleDateString()}
        </p>

        {speciality && (
          <p className="italic text-md text-gray-700">
            Speciality: {speciality}
          </p>
        )}

        <p className="text-sm mt-6 text-gray-500">Year of Graduation: {yog}</p>
      </div>

      <div className="mt-12 flex justify-between items-center text-sm text-gray-500">
        <div>
          <p>Authorized by</p>
          <div className="h-0.5 w-32 bg-gray-400 mt-1" />
        </div>
        <div>
          <p>Date Issued</p>
          <p>{new Date().toLocaleDateString()}</p>
        </div>
      </div>

      {/* QR Code at the bottom right */}
      <div className="absolute bottom-4 right-4">
        <QRCodeCanvas value={verificationUrl} size={80} />
        <p className="text-xs text-gray-500 mt-1 text-center">Scan to verify</p>
      </div>
    </div>
  );
};

export default CertificateCardType1;
