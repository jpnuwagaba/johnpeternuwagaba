import React from "react";
import SkillBadge from "./SkillBadge";
import Image from "next/image";

const SkillBadgeData = [
  { skill: "HTML CSS JS", src: "html.png" },
  { skill: "React", src: "react.svg" },
  { skill: "NextJS", src: "nextjs.svg" },
  { skill: "TailwindCSS", src: "tailwindcss.svg" },
  { skill: "Figma", src: "figma.svg" },
  { skill: "Adobe XD", src: "adobe-xd.svg" },
  { skill: "Adobe Illustrator", src: "adobe-illustrator.svg" },
  { skill: "Visual Studio Code", src: "vs-code.svg" },
  { skill: "Vercel", src: "vercel.svg" },
  { skill: "GitHub", src: "github.svg" },
];

const SkillTab = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
        <div className="container-80 py-8 lg:py-16 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="flex flex-col gap-3 items-start">
                <Image 
                src={`/assets/code.svg`} 
                alt="skill" 
                width={40} 
                height={40} 
                priority 
                />
              <h1 className="text-xl text-cornflowerBlue mb-3 font-bold">
                Web Development
              </h1>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam voluptatum, quas voluptates, voluptate, doloribus quia
                exercitationem quae quibusdam fugit quod voluptas? Quisquam
                voluptatum, quas voluptates, voluptate, doloribus quia
                exercitationem quae quibusdam fugit quod voluptas?
              </p>
            </div>
            <div>
              <h1 className="text-gray-600 uppercase mb-3 font-bold text-sm">
                stack
              </h1>
              <div className="flex flex-wrap gap-4 items-end justify-start lg:justify-start">
                {SkillBadgeData.map((skill) => (
                  <SkillBadge skill={skill.skill} image={skill.src} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillTab;
