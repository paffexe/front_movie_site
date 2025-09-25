import { LanguageSwitcher } from "@/features/language-switcher";
import { ThemeChanger } from "@/features/theme";
import { memo } from "react";
import { RiLoginCircleFill } from "react-icons/ri";

export const Option = memo(() => {
  return (
    <div className="flex items-center gap-x-2 w-auto md:w-[292px]">
      <LanguageSwitcher />
      <div className="w-[50px] flex justify-center">
        <ThemeChanger />
      </div>
      <div>
        <RiLoginCircleFill
          style={{
            width: "35px",
            height: "35px",
            color: "#C61F1F",
            cursor: "pointer",
          }}
        />
      </div>
    </div>
  );
});
