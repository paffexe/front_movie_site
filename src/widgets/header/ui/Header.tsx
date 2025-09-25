import { memo } from "react";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { Option } from "./Option";

export const Header = memo(() => {
  return (
    <>
      <header className="container bg-white dark:bg-black">
        <nav className="flex justify-between items-center h-20">
          <Logo />
          <div className="hidden md:block">
            <Navigation />
          </div>
          <Option />
        </nav>
      </header>

      <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-700 md:hidden z-50">
        <div className="container">
          <Navigation />
        </div>
      </div>
    </>
  );
});
