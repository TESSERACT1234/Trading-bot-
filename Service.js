// import React, { useEffect, useRef } from 'react';

// let tvScriptLoadingPromise;

// const Service = () => {
//   const onLoadScriptRef = useRef();

//   useEffect(
//     () => {
//       onLoadScriptRef.current = createWidget;

//       if (!tvScriptLoadingPromise) {
//         tvScriptLoadingPromise = new Promise((resolve) => {
//           const script = document.createElement('script');
//           script.id = 'tradingview-widget-loading-script';
//           script.src = 'https://s3.tradingview.com/tv.js';
//           script.type = 'text/javascript';
//           script.onload = resolve;

//           document.head.appendChild(script);
//         });
//       }

//       tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

//       return () => onLoadScriptRef.current = null;

//       function createWidget() {
//         if (document.getElementById('tradingview_66f23') && 'TradingView' in window) {
//           new window.TradingView.widget({
//             autosize: true,
//             symbol: "NASDAQ:AAPL",
//             interval: "D",
//             timezone: "Etc/UTC",
//             theme: "light",
//             style: "1",
//             locale: "en",
//             toolbar_bg: "#f1f3f6",
//             enable_publishing: false,
//             allow_symbol_change: true,
//             container_id: "tradingview_66f23"
//           });
//         }
//       }
//     },
//     []
//   );

//   return (
//     <div className='tradingview-widget-container'>
//       <div id='tradingview_66f23' />
//     </div>
//   );

// }

// export default Service
