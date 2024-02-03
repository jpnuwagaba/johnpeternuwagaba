import Link from "next/link";
import React from "react";
import ContactForm from "./ContactForm";
import SocialMediaList from "./SocialMediaList";
import SubscribeToNewsletter from "./SubscribeToNewsletter";

const Footer = () => {
  return (
    <>
      <div className="py-8 lg:py-16 bg-[#eeeeee]">
        <SubscribeToNewsletter />
        <hr className="container border-[#3462bf]" />
        <SocialMediaList />
        {/* <ContactForm /> */}
      </div>
    </>
  );
};

export default Footer;
