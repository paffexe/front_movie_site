import { useEffect, useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";

export default function AnimatedLoading() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme === "dark") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  return (
    <div
      className={`flex items-center justify-center min-h-screen transition-colors duration-300
        ${
          theme === "dark"
            ? "bg-gradient-to-br from-slate-950 to-black"
            : "bg-gradient-to-br from-slate-50 to-slate-100"
        }`}
    >
      <LoadingOutlined style={{ fontSize: 48, color: "#c61f1f" }} spin />
    </div>
  );
}
