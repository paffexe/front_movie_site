import { Switch } from "antd";
import { memo, useEffect, useState } from "react";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";

export const ThemeChanger = memo(() => {
  const [darkMode, setDarkMode] = useState(false);
  const [showIcon, setShowIcon] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const handleChange = (checked: boolean) => {
    setDarkMode(checked);
    if (checked) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }

    setShowIcon(false);

    setTimeout(() => setShowIcon(true), 200);
  };

  return (
    <div>
      <Switch
        className="custom-switch"
        checked={darkMode}
        checkedChildren={
          showIcon ? (
            <MoonOutlined style={{ fontSize: 16 }} />
          ) : (
            <MoonOutlined style={{ fontSize: 16 }} />
          )
        }
        unCheckedChildren={
          showIcon ? (
            <SunOutlined style={{ fontSize: 16 }} />
          ) : (
            <SunOutlined style={{ fontSize: 16 }} />
          )
        }
        onChange={handleChange}
        style={{ width: "50px" }}
      />
    </div>
  );
});
