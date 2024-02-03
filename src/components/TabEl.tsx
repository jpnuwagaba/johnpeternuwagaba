import React, { FC } from "react";
interface Props {
  name: string;
}
import { Button } from "@/components/ui/button";

const TabEl: FC<Props> = ({ name }) => {
  return (
    <>
      <Button className="text-xs uppercase" variant={'outline'} color="gray">
        {name}
      </Button>
    </>
  );
};

export default TabEl;
