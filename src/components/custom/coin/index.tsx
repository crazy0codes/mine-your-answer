import React from "react";
import { Image } from "../../basic/Img";

export const Coin: React.FC<{ className?: string }> = ({ className }) => (
  <Image src="src\assets\coin 1.svg" alt="coin" className={className}/>
);
