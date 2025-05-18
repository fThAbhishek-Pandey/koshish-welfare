import React from "react";
import { QRCodeCanvas } from "qrcode.react";
import logoURL from "../../assets/koshishlogo.png";
import signatureURL from "../../assets/signature.svg";
import sealURL from "../../assets/koshishStamp.jpeg";
import certibg from "../../assets/certibg.svg";
import recabn from "../../assets/recabn.png";
import bladge from '../../assets/certificateblage.svg'
import "./CertificateCardType1.css"; // Import the CSS

const CertificateCardType1 = ({ certificate }) => {
  const typeArr = ["participant", "mentor"];
  const { _id, name, type, subject, joinTime, leaveTime, yog } = certificate;
  const verificationUrl = `${window.location.origin}/certify/${type}/${_id}`;
  const formattedJoinDate = new Date(joinTime).toLocaleDateString("en-GB");
  const formattedLeaveDate = new Date(leaveTime).toLocaleDateString("en-GB");

  return (
    <div className="certificate-container">
      <div className="certificate-bg">
        <img src={certibg} alt="certificate background" />
      </div>

      <div className="certificate-content">
        <div className="qr-section">
          <QRCodeCanvas value={verificationUrl} size={200} />
          <p className="qr-label">Scan to verify</p>
        </div>

        <div className="logo-section">
          <img src={recabn} alt="Rajkiya Enginering college" className="logo" />
          <p className="logo-text">Koshish Welfare.</p>
          <img src={logoURL} alt="Koshish Logo" className="logo" />
          <p className="logo-text">Koshish Welfare.</p>
        </div>

        <div className="certificate-header">
          <h1 className="certificate-title">Certificate</h1>
          <p className="certificate-subtitle">of {typeArr[type]}</p>
          <p className="certificate-line">This is to certify that</p>
          <div className="certificate-name">
            <h2>{name}</h2>
          </div>
          <p className="certificate-desc">
            has successfully served as a <strong>{typeArr[type]}</strong> from{" "}
            <strong>{formattedJoinDate}</strong> to <strong>{formattedLeaveDate}</strong> with{" "}
            <strong>Koshish Welfare</strong>, contributing meaningfully to our mission of empowering students through education.
          </p>
          <p className="certificate-desc">
            We wish them success in all their future endeavors. (Year of Graduation: <strong>{yog}</strong>)
          </p>
        </div>

        <div className="certificate-footer">
          <div className="seal">
            <img src={sealURL} alt="Seal" />
            <h2>Koshish Welfare</h2>
          </div>
          <div className="bladge">
            <img src={bladge} alt="bladge" />
          </div>
          <div className="signature">
            <img src={signatureURL} alt="Signature" />
            <div className="signature-line"></div>
            <p className="signature-name">Avneesh Yadav</p>
            <p className="signature-role">Coordinator, Koshish</p>
          </div>
        </div>

        <div className="certificate-issue-date">
          Date Issued: {new Date().toLocaleDateString("en-GB")}
        </div>
      </div>
    </div>
  );
};

export default CertificateCardType1;
