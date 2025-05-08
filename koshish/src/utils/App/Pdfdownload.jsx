import React from 'react';
import { saveAs } from 'file-saver';
import { pdf } from '@react-pdf/renderer';
import CertificateCardType1 from '../../component/Teacher/certificatecardtype1';
const downloadPdf = async (cerificate) => {
  console.log(cerificate)
  const fileName = `${cerificate.name}certificate.pdf`;
  const blob = await pdf(< CertificateCardType1 {...cerificate}  />).toBlob();
  saveAs(blob, fileName);
};

export default downloadPdf;
