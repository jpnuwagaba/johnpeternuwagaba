import React, { FC } from "react";
interface Props {
  name: string;
}
import { Button } from "@/components/ui/button";

const TabElActive: FC<Props> = ({ name }) => {
  return (
    <>
      <Button className="text-xs uppercase" color="blue">
        {name}
      </Button>
    </>
  );
};

export default TabElActive;
