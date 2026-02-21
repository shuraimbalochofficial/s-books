import Hero from "@/components/home/Hero";
import RecentlyAdded from "@/components/home/RecentlyAdded";
import React from "react";

function page() {
  return <div className="pb-10">
    <Hero />
    <RecentlyAdded />
  </div>;
}

export default page;
