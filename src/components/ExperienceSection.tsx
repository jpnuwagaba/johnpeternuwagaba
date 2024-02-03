"use client";

import React, { useState } from "react";
import ProfessionalExperience from "./ProfessionalExperience";
import FreelanceExperience from "./FreelanceExperience";
import TabElActive from "./TabElActive";
import TabEl from "./TabEl";

const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState("Professional Experience");

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <>
      <div className="container-80 py-8 lg:py-20">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <h1 className="text-2xl lg:text-3xl text-cornflowerBlue font-bold">
            Working Experience
          </h1>
          {/* experience navigation bar */}
          <div className="flex flex-row flex-wrap items-center gap-4 text-gray-600">
            <div
              className={`${
                activeTab === "Professional Experience"
                  ? "text-cornflowerBlue"
                  : ""
              }`}
              onClick={() => handleTabChange("Professional Experience")}
            >
              {activeTab === "Professional Experience" ? (
                <TabElActive name="Professional Experience" />
              ) : (
                <TabEl name="Professional Experience" />
              )}
            </div>
            <div
              className={`${
                activeTab === "Freelance Experience"
                  ? "text-cornflowerBlue"
                  : ""
              }`}
              onClick={() => handleTabChange("Freelance Experience")}
            >
              {activeTab === "Freelance Experience" ? (
                <TabElActive name="Freelance Experience" />
              ) : (
                <TabEl name="Freelance Experience" />
              )}
            </div>
          </div>
        </div>
        <div className="py-4 lg:py-8">
          {activeTab === "Professional Experience" && (
            <ProfessionalExperience />
          )}
          {activeTab === "Freelance Experience" && <FreelanceExperience />}
        </div>
      </div>
    </>
  );
};

export default ExperienceSection;
