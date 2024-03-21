import React from 'react';

const OpenPdfInNewTab = ({ pdfFile, name, className }) => {
  const handleOpenPdf = () => {
    window.open(pdfFile, '_blank');
  };

  return (
    <>
      <button
        className={`${className}`}
        aria-label={`download ${name}`}
        onClick={handleOpenPdf}
      >
        {name}
      </button>
    </>
  );
};

export default OpenPdfInNewTab;
