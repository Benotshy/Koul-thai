import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import menuPDF from "./assets/menu.pdf";// Corrected path


// Set up the worker from a CDN to resolve the worker loading issue
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Menu = () => {
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "auto" }}>
      <Document
        file={menuPDF}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        {Array.from(new Array(numPages), (el, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            width={window.innerWidth}
          />
        ))}
      </Document>
    </div>
  );
};

export default Menu;
