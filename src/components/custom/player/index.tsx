import React from "react";
import { Minner } from "../minnerImg";
import { Clip } from "../clipImg";
import { Image } from "../../basic/Img";
import Bomb from "../../../assets/bomb 1.png";
import Bad from "../../../assets/bad 1.png";
import Yes from "../../../assets/yes.png";

export const Player: React.FC = () => {
  return (
    <>
      <div className="player flex relative items-center justify-center w-[150px] ">
        <Minner className="minner" />
        <Image src={Bad} className="absolute no hidden" />
        <Image src={Yes} className="absolute yes hidden" />
        <Clip />
        <div className="absolute top-[68px] bomb-container flex  flex-col items-center justify-center opacity-0">
          <span className="w-[20px] h-[20px] bomb-stick" style={{transitionDuration : "3s"}}></span>
          <Image src={Bomb} className="bomb" />
        </div>
      </div>
    </>
  );
};
