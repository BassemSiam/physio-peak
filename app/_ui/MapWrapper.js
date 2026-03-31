"use client";

import dynamic from "next/dynamic";

// We move the dynamic import HERE
const MapContent = dynamic(() => import("./MapContent"), { 
  ssr: false,
  loading: () => <div className="h-120 w-full animate-pulse rounded-xl bg-gray-200" />
});

export default function MapWrapper({data}) {
  return <MapContent data={data}/>;
}