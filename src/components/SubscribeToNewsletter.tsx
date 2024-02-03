import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SubscribeToNewsletter = () => {
  return (
    <>
      <div className="container">
        <h1 className="text-xl font-bold mb-3">Subscribe to my Newsletter</h1>
        <div className="grid grid-cols-1 gap-6 mb-6 items-start">
          <div>
            <p>
              I always send out an email when I create something interesting
            </p>
          </div>
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="email" placeholder="Email" />
            <Button type="submit">Subscribe</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubscribeToNewsletter;
