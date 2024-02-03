"use client";
import React, { useState, useEffect, use } from "react";
import Image from "next/image";
import SkillBadge from "./SkillBadge";
import client from "@/sanity/sanity.client";
import { PortableText } from "@portabletext/react";
import TabEl from "./TabEl";
import TabElActive from "./TabElActive";
export type SkillCategoryType = {
  src: string;
  _id: string;
  name: string;
  imageUrl: any;
  description: any;
  skills: {
    name: string;
    imageUrl: string;
  }[];
};

const SkillSection = () => {
  const [activeTab, setActiveTab] = useState("Web Development");

  const [skillCategory, setSkillCategory] = useState<SkillCategoryType[]>([]);
  const query = `*[_type == "skillCategory"]{
    _id,
    name,
    "imageUrl": image.asset->url,
    description,
    skills[]->{
      name,
      "imageUrl": image.asset->url
    },
  }`;

  const skillCategoryClient = async () => {
    await client
      .fetch(query)
      .then((res) => {
        setSkillCategory(res);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    skillCategoryClient();
  }, []);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    useEffect(() => {
      console.log(activeTab);
    }, [activeTab]),
    (
      <>
        <div className="pt-8 lg:pt-16">
          <div className="container flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            {/* <TabElActive name="Design" /> */}
            <h1 className="text-2xl lg:text-3xl text-cornflowerBlue font-bold">
              Skills
            </h1>
            {/* category navigation bar */}
            <div className="flex flex-row flex-wrap items-center gap-4 text-gray-600">
              <div
                className={`${
                  activeTab === "Web Development" ? "text-cornflowerBlue" : ""
                }`}
                onClick={() => handleTabChange("Web Development")}
              >
                {activeTab === "Web Development" ? (
                  <TabElActive name="Web Development" />
                ) : (
                  <TabEl name="Web Development" />
                )}
              </div>
              <div
                className={`${
                  activeTab === "Microsoft 365" ? "text-cornflowerBlue" : ""
                }`}
                onClick={() => handleTabChange("Microsoft 365")}
              >
                {activeTab === "Microsoft 365" ? (
                  <TabElActive name="Microsoft 365" />
                ) : (
                  <TabEl name="Microsoft 365" />
                )}
              </div>
              <div
                className={`${
                  activeTab === "Geographic Information Systems"
                    ? "text-cornflowerBlue"
                    : ""
                }`}
                onClick={() =>
                  handleTabChange("Geographic Information Systems")
                }
              >
                {activeTab === "Geographic Information Systems" ? (
                  <TabElActive name="GIS" />
                ) : (
                  <TabEl name="GIS" />
                )}
              </div>
              <div
                className={`${
                  activeTab === "Design" ? "text-cornflowerBlue" : ""
                }`}
                onClick={() => handleTabChange("Design")}
              >
                {activeTab === "Design" ? (
                  <TabElActive name="Design" />
                ) : (
                  <TabEl name="Design" />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className=" bg-transition-1" />
          <div className="container py-8 lg:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 lg:items-center">
              <div>
                <div className="flex flex-row gap-6 items-center mb-3 md:mb-6">
                  <Image
                    src={
                      skillCategory.find((skill) => skill.name === activeTab)
                        ?.imageUrl
                    }
                    alt="category"
                    width={40}
                    height={40}
                    priority
                  />
                  <h1 className="text-xl text-cornflowerBlue font-bold">
                    {skillCategory.map((skill) =>
                      skill.name === activeTab ? skill.name : null
                    )}
                  </h1>
                </div>
                <div className="text-gray-600 flex flex-col gap-3 items-start">
                  <PortableText
                    value={
                      skillCategory.find((skill) => skill.name === activeTab)
                        ?.description
                    }
                  />
                </div>
              </div>
              <div className="bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 p-8 rounded-xl">
                <h1 className="text-cornflowerBlue uppercase mb-5 font-bold text-xs">
                  stack
                </h1>
                <div className="flex flex-wrap gap-4 items-end justify-start lg:justify-start">
                  {skillCategory.map((skill) =>
                    skill.name === activeTab
                      ? skill.skills.map((skill) => (
                          <SkillBadge
                            skill={skill.name}
                            image={skill.imageUrl}
                          />
                        ))
                      : null
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  );
};

export default SkillSection;
