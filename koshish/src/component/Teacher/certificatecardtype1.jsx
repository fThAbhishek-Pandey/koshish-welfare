import React from "react";
import { QRCodeCanvas } from "qrcode.react";
import logoURL from "../../assets/koshishlogo.png";
import signatureURL from "../../assets/koshishlogo.png";
import sealURL from "../../assets/koshishlogo.png";

const CertificateCardType1 = ({ certificate }) => {
  const typeArr = ["participant", "mentor"];
  const { _id, name, type, subject, joinTime, leaveTime, yog } =
    certificate;
  const verificationUrl = `${window.location.origin}/certify/mentor/${_id}`;
  const formattedJoinDate = new Date(joinTime).toLocaleDateString("en-GB");
  const formattedLeaveDate = new Date(leaveTime).toLocaleDateString("en-GB");

  return (
    <div className="relative w-[1123px] h-[794px] mx-auto shadow-xl overflow-hidden border border-gray-300 rounded-xl bg-white">
      {/* Background SVG Pattern */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
  <svg
    className="w-full h-full"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <pattern
        id="koshishPattern"
        width="160"
        height="160"
        patternUnits="userSpaceOnUse"
      >
        {/* <!-- Your original SVG content --> */}
        <rect fill="#ffffff" width="200" height="200" />
        <polygon
          fill="#69A2FA"
          fillOpacity="1"
          points="100 0 0 100 100 100 100 200 200 100 200 0"
        />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#koshishPattern)" />
  </svg>
</div>





      {/* Main Content Layer */}
      <div className="relative z-10 p-10 text-gray-900 font-sans h-full flex flex-col justify-between">
        {/* QR Code Top Left */}
        <div className="absolute top-6 left-6 text-left">
          <QRCodeCanvas value={verificationUrl} size={200} />
          <p className="text-xl text-gray-600 mt-1 text-center">
            Scan to verify
          </p>
        </div>

        {/* Logo Top Right */}
        <div className="absolute top-6 right-10 text-right">
          <img src={logoURL} alt="Koshish Logo" className="w-28" />
          <p className="text-xs mt-1 font-semibold text-gray-700 leading-tight tracking-wide uppercase">
            Koshish Welfare.
          </p>
        </div>

        {/* Certificate Heading */}
        <div className="text-center mt-10 px-6">
          <h1 className="text-5xl font-extrabold text-blue-800 tracking-widest uppercase">
            Certificate
          </h1>
          <p className="text-xl font-medium uppercase mt-1">
            of {typeArr[type]}
          </p>

          {/* Recipient and Description */}
          <p className="text-lg mt-8">This is to certify that</p>
          <div className="border-b-2 border-gray-700 inline-block mt-2 mb-1">
            <h2 className="text-4xl font-bold px-2">{name}</h2>
          </div>

          <p className="text-base mt-4 leading-relaxed max-w-3xl mx-auto">
            has successfully served as a{" "}
            <strong>
              {typeArr[type]} in {subject}
            </strong>{" "}
            from <strong>{formattedJoinDate}</strong> to{" "}
            <strong>{formattedLeaveDate}</strong> with{" "}
            <strong>Koshish Welfare</strong>, contributing meaningfully to our
            mission of empowering students through education.
          </p>

          <p className="text-base mt-4 leading-relaxed max-w-3xl mx-auto">
            We wish them success in all their future endeavors. (Year of
            Graduation: <strong>{yog}</strong>)
          </p>
        </div>

        {/* Footer Section */}
        <div className="flex justify-between items-end px-2 mt-4">
          {/* Seal */}
          <div className="text-center">
            <img src={sealURL} alt="Seal" className="h-24 mx-auto" />
            <h2 className="text-sm mt-2 font-medium">Koshish Welfare</h2>
          </div>

          {/* Signature */}
          <div className="text-center">
            <img src={signatureURL} alt="Signature" className="h-16 mx-auto" />
            <div className="border-t-2 border-gray-600 w-40 mx-auto mt-1"></div>
            <p className="mt-1 font-semibold">Avneesh Yadav</p>
            <p className="text-sm text-gray-500">Coordinator, Koshish</p>
          </div>
        </div>

        {/* Issue Date */}
        <div className="text-right text-sm text-gray-600 mt-4 pr-2">
          Date Issued: {new Date().toLocaleDateString("en-GB")}
        </div>
      </div>
    </div>
  );
};

export default CertificateCardType1;
