"use client"

import { useEffect } from "react";

const useOneSignal = () => {
  useEffect(() => {
    //   window.OneSignal = window.OneSignal || [];
    //   OneSignal.push(function () {
    //       OneSignal.init({
    //           appId: "b40b7cc7-13dc-4662-8b48-efa668f9b72a",
    //           notifyButton: {
    //               enable: true,
    //           },

    //           allowLocalhostAsSecureOrigin: true,
    //       });
    //   });

    //   return () => {
    //       window.OneSignal = undefined;
    //   };
    console.log("one Signal")
  }, []); // <-- run this effect once on mount
}

export default useOneSignal;