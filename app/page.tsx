import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <p className="text-6xl">Hello From E-Ginee</p>
      <Button variant={"destructive"} size={"sm"}>
        Click Me
      </Button>
    </div>
  );
}
