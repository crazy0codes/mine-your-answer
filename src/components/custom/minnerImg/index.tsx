import React from "react";
import { Image } from "../../basic/Img";
import minner from "../../../assets/miner.svg";

export const Minner: React.FC<{ className: string }> = ({ className }) => {
  return (
    <Image src={minner} alt="minner" className={className} />
  );
};
