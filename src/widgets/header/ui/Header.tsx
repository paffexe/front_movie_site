import { memo } from "react";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { Option } from "./Option";

export const Header = memo(() => {
  return (
    <header className="container">
      <nav className=" flex justify-between items-center h-20 bg-pink-300">
        <Logo />
        <Navigation />
        <Option />
      </nav>
    </header>
  );
});
