"use client";

import React, { useState, useEffect } from "react";
import { Button, Timeline } from "flowbite-react";
import { Flowbite } from "flowbite-react";
import type { CustomFlowbiteTheme } from "flowbite-react";
import { HiArrowNarrowRight } from "react-icons/hi";
import client from "@/sanity/sanity.client";
import { PortableText } from "@portabletext/react";
export type ProfessionalExperienceType = {
  _id: string;
  company: string;
  imageUrl: string;
  summary: string;
  description: string;
  role: string;
  startDate: string;
  endDate: string;
  slug: string;
  callToAction: string;
};

const ProfessionalExperience = () => {
  const [professionalExperience, setProfessionalExperience] = useState<
    ProfessionalExperienceType[]
  >([]); // Update the type of professionalExperience state variable
  const query = `*[_type == "professionalExperience"]{
    _id,
    company,
    "imageUrl": image.asset->url,
    summary,
    description,
    role,
    startDate,
    endDate,
    slug,
    callToAction
  } | order(endDate desc)`;

  const professionalExperienceClient = async () => {
    await client
      .fetch(query)
      .then((res) => {
        setProfessionalExperience(res);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    professionalExperienceClient();
  }, []);

  //make custom theme for timeline point
  const customTheme: CustomFlowbiteTheme = {
    timeline: {
      point: {
        base: "relative w-4 h-4 rounded-full bg-gray-600",
        before: "absolute top-0 left-2 w-2 h-full bg-gray-600",
      },
    },
  };

  return (
    <>
      <Flowbite theme={{ theme: customTheme }}>
        <Timeline>
          {professionalExperience.map((item) => (
            <Timeline.Item>
              <Timeline.Point className="bg-cornflowerBlue" />
              <Timeline.Content>
                <Timeline.Time className="text-gray-600">
                  {item.startDate} to {item.endDate}
                </Timeline.Time>
                <Timeline.Title className="text-cornflowerBlue">
                  {item.company}
                </Timeline.Title>
                <Timeline.Time className="text-gray-600 uppercase font-bold">
                  {item.role}
                </Timeline.Time>
                <Timeline.Body className="text-gray-600">
                  <PortableText value={item.summary} />
                </Timeline.Body>
                <Button className="text-cornflowerBlue" color="gray">
                  {
                    <a
                      href={`/professional-experience/${
                        (item.slug as any).current
                      }`}
                      className="flex flex-row items-center"
                    >
                      {/* {item.callToAction} */}
                      {item.callToAction}
                    </a>
                  }
                  <HiArrowNarrowRight className="ml-2 h-3 w-3" />
                </Button>
              </Timeline.Content>
            </Timeline.Item>
          ))}
        </Timeline>
      </Flowbite>
      <div className="flex flex-col justify-center items-center w-full mt-6 mb-6">
        {/* <Button className="text-white mb-5 bg-cornflowerBlue" color="blue">
          <a
            href="experience/professional-experience"
            className="flex flex-row items-center"
          >
            View All Professional Experience
          </a>
          <HiArrowNarrowRight className="ml-2 h-3 w-3" />
        </Button> */}
        <Button className="text-white mb-5 bg-cornflowerBlue" color="blue">
          <a
            href="https://www.linkedin.com/in/john-peter-nuwagaba/"
            target="_blank"
            className="flex flex-row items-center"
          >
            Linkedin Profile
          </a>
          <HiArrowNarrowRight className="ml-2 h-3 w-3" />
        </Button>
      </div>
    </>
  );
};

export default ProfessionalExperience;
