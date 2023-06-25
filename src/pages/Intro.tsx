import ProviderIntro from "components/provider/ProviderIntro";
import React from "react";
import { useLocation } from "react-router-dom";

export default function Intro() {
  const location = useLocation();
  return location.pathname === "/" ? <ProviderIntro /> : null;
}
