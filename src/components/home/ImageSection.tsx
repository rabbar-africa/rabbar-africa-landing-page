import React from "react";
import heroImage from "@/assets/images/hero-image.webp";
import Image from "next/image";

export default function ImageSection() {
  return (
    <div className="h-auto lg:h-auto">
      <Image
        src={heroImage}
        alt="Hero Image"
        className="w-full h-full lg:h-auto object-cover"
      />
    </div>
  );
}
