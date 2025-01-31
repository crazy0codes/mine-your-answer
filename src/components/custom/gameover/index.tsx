import React from "react";
import { Image } from "../../basic/Img";

export const Gameover: React.FC<{ className?: string }> = ({className}) => (
  <Image src="src\assets\gameOver.svg" alt="mine" className={className} />
);