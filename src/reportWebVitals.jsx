// c:\Users\mouha\Documents\GitHub\my-portfolio\src\reportWebVitals.jsx

import { useEffect } from 'react';

function reportWebVitals(onPerfEntry) {
  if (typeof window !== 'undefined') {
    if (onPerfEntry && typeof onPerfEntry === 'function') {
      const { getCLS, getFID, getFCP, getLCP, getTTFB } =
        window['web-vitals'].default || {};

      useEffect(() => {
        getCLS(onPerfEntry);
        getFID(onPerfEntry);
        getFCP(onPerfEntry);
        getLCP(onPerfEntry);
        getTTFB(onPerfEntry);
      }, []);
    }
  }
}

export default reportWebVitals;
