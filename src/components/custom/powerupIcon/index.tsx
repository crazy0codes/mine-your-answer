import React from "react";
import { Image } from "../../basic/Img";

export const PowerUpIcon : React.FC<{ className?: string }> = ({className}) => (
  <Image src="src\assets\powerups.svg" alt="mine" className={className} />
);