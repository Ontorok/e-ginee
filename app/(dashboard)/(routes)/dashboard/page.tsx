import React from "react";
import { UserButton } from "@clerk/nextjs";

type Props = {};

const DashboardPage = (props: Props) => {
  return (
    <div>
      Dashboard
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default DashboardPage;
