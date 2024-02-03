import Image from "next/image";
import React from "react";

interface Props {
  skill: string;
  image: string;
}

const SkillBadge: React.FC<Props> = ({skill, image}) => {
  return (
    <>
      <div className="flex flex-col items-center gap-2">
        <Image 
        src={`${image}`} 
        alt="skill" 
        width={30} 
        height={30} 
        priority 
        />
        <p className="text-xs">{skill}</p>
      </div>
    </>
  );
};

export default SkillBadge;
