import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

type Props = {};

const LandingPage = (props: Props) => {
  return (
    <div>
      LandingPage
      <div>
        <Link href={"/sign-in"}>
          <Button>Sign In</Button>
        </Link>
        <Link href={"/sign-in"}>
          <Button>Sign Up</Button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
