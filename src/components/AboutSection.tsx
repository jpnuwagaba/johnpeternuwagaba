"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import client from "@/sanity/sanity.client";
import { PortableText } from "@portabletext/react";
export type AboutSectionType = {
  name: string;
  aboutMe: any;
  summary: any;
  imageUrl: string;
};

const AboutSection = () => {
  const [aboutSection, setAboutSection] = useState<AboutSectionType[]>([]);
  const query = `*[_type == "aboutMe"]{
      name,
      aboutMe,
      summary,
      "imageUrl": aboutMeImage.asset->url,
    }`;

  const aboutSectionClient = async () => {
    await client
      .fetch(query)
      .then((res) => {
        setAboutSection(res);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    aboutSectionClient();
  }, []);

  return (
    <>
      <div className="py-8 lg:py-16">
        <div className="container-80">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-16 items-start lg:items-center">
            <div className="hidden lg:flex flex-col items-center">              
              <Image
                src={aboutSection[0]?.imageUrl}
                alt="Description of the image"
                width={350}
                height={300}
                quality={90}
                priority
              />
            </div>
            <div>
              <h1 className="text-2xl lg:text-3xl text-cornflowerBlue mb-3 font-bold">
                {aboutSection[0]?.name}
              </h1>
              <div className="mb-5">
              <PortableText 
                value={aboutSection[0]?.summary}
              />
              </div>
              <Link className="link" href={"about"}>
                Learn more about me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
