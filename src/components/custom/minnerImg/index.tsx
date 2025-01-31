import React from "react";
import { Image } from "../../basic/Img";

export const Minner: React.FC<{ className: string }> = ({ className }) => {
  return (
    <Image src="src\assets\miner.svg" alt="minner" className={className} />
  );
};
