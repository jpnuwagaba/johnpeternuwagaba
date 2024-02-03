import React from "react";
import Image from "next/image";

interface Props {
  company: string;
  location: string;
  position: string;
  period: string;
  companyLogo: string;
}

const ExperienceTimelineEl: React.FC<Props> = ({
  company,
  location,
  position,
  period,
  companyLogo,
}) => {
  return (
    <>
      <div className="flex flex-row items-center gap-6">
        <Image src={`/assets/${companyLogo}`} width={70} height={70} alt={"company-logo"} />
        <div className="flex flex-col gap-1 items-start">
          <p className="text-xl capitalize font-bold text-gray-500">
            {position}
          </p>
          <h1 className="uppercase text-cornflowerBlue font-bold text-xs">
            {company}
          </h1>
          <p className="text-sm text-gray-500 capitalize">{location}</p>
          <p className="text-sm text-gray-500 capitalize">{period}</p>
        </div>
      </div>
    </>
  );
};

export default ExperienceTimelineEl;
