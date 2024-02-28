import * as React from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Input } from "@/components/ui/input";

const Header = (): JSX.Element => {
  return (
    <>
      <Input type="text" placeholder="Search..." />
      <ThemeToggle />
    </>
  );
};

export { Header };
