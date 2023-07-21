import ConsumerIntro from "components/consumer/ConsumerIntro";
import ProviderIntro from "components/provider/ProviderIntro";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Intro() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BASE_URL}/target/13/all`,
        ); // '/api' 경로로 요청을 보냅니다.
        const jsonData = await response.json();
        console.log(jsonData);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  const location = useLocation();
  return location.pathname === "/" ? <ProviderIntro /> : <ConsumerIntro />;
}
