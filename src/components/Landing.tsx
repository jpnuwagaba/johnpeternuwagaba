"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { url } from "inspector";
import Link from "next/link";
import { HiArrowNarrowRight } from "react-icons/hi";
import client from "@/sanity/sanity.client";
import { PortableText } from "@portabletext/react";
export type AboutSectionType = {
  name: string;
  aboutMe: any;
  summary: any;
  imageUrl: string;
};
import { Button } from "@/components/ui/button";
import { Widget } from "@typeform/embed-react";
import { IoCloseOutline } from "react-icons/io5";

const Landing = () => {
  const [showWidget, setShowWidget] = React.useState(false);

  const handleShowWidget = () => {
    setShowWidget(true);
  };

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
      {showWidget && (
        <div className="fixed top-0 left-0 z-50 w-full h-full">
          <div className="relative">
            <Widget
              id="ElHVkEu8"
              // height={500}
              className="h-screen"
              style={{
                border: "1px solid #ddd",
                // opacity: 0.95,
              }}
            />
            {showWidget && (
              <div className="absolute top-6 right-6 z-50 cursor-pointer">
                <IoCloseOutline
                  size={"2rem"}
                  onClick={() => setShowWidget(false)}
                />
              </div>
            )}
          </div>
        </div>
      )}
      <div className="pt-20 pb-12 lg:pt-20 lg:pb-0 bg-[#f5f5f5]">
        <div className="container flex flex-col flex-col-reverse lg:flex-row justify-between gap-6 items-center">
          <div className="flex flex-col items-center lg:items-start gap-4 lg:gap-8 lg:w-[50%]">
            <div className="flex flex-col items-center lg:items-start text-center gap-3 lg:text-left">
              <div className="font-bold text-darkSlateGray text-4xl">
                John Peter Nuwagaba
              </div>
              <div className="text-gray-100 capitalize">
                front-end developer / graphics designer / land surveyor
              </div>
              <div className="mb-5">
                <PortableText value={aboutSection[0]?.summary} />
              </div>
            </div>
            <div className="flex flex-row items-center gap-3">
              <Button>
                <Link
                  href="/assets/cv.pdf"
                  target="_blank"
                  className="flex flex-row items-center"
                >
                  Short CV
                </Link>
                <HiArrowNarrowRight className="ml-2 h-3 w-3" />
              </Button>
              <Button onClick={handleShowWidget}>
                Let{"'"}s Create
                <HiArrowNarrowRight className="ml-2 h-3 w-3" />
              </Button>
            </div>
          </div>
          <div
            style={{
              background: `url(/assets/jp-clipped.png)`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className="bg-gray-400 border-2 lg:border-none rounded-full lg:rounded-none aspect-square w-[150px] md:w-[200px] lg:w-[450px]"
          ></div>
        </div>
      </div>
    </>
  );
};

export default Landing;
