import Image from "next/image";
import React from "react";

type LogoProps = {
  width?: number | string;
  height?: number | string;
  className?: string;
};

const Logo: React.FC<LogoProps> = ({
  // width = "auto",
  // height = "auto",
  className = "",
}) => (
  <div className={`relative ${className}`}>
    <Image
      src="/assets/svg/logo.svg"
      alt="Logo"
      fill
      className="object-contain"
      priority
      sizes="(max-width: 768px) 40px, 75px"
    />
  </div>
);

export default Logo;
