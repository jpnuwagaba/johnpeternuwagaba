import Link from "next/link";
import React from "react";
import SocialMediaRow from "./SocialMediaRow";

const ContactForm = () => {
  return (
    <>
      <div className="container-80 flex flex-col lg:flex-row items-start gap-8 justify-between lg:gap-16 pt-6">
        <div className="flex flex-col gap-3">
          <div>
            <h1 className="font-bold text-3xl">Let's Talk</h1>
            <p>
              Ready to start a creative journey together? Drop me an email at{" "}
              <Link
                className="text-cornflowerBlue underline"
                href={"mailto:jpnuwagaba1@gmail.com"}
                target="_blank"
              >
                jpnuwagaba1@gmail.com
              </Link>{" "}
            </p>
          </div>
          <SocialMediaRow />
        </div>
        <div className="w-full">
          <div className="flex flex-col gap-3">
            <div className="grid grid-cols-1 gap-2 md:grid-cols-3 ">
              <input
                className="grid w-full btn-white w-full border-none otuline-none"
                type="name"
                name="name"
                id=""
                placeholder="Name"
              />
              <input
                className="grid w-full btn-white w-full border-none otuline-none"
                type="email"
                name="email"
                id=""
                placeholder="you@email.com"
              />
            </div>
            <textarea className="btn-white" name="Message" id=""></textarea>
            <button className="btn-blue" type="submit">
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
