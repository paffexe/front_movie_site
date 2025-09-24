import { Button, Dropdown, message, Space, type MenuProps } from "antd";
import React, { memo, useState, type JSX } from "react";
import { DownOutlined } from "@ant-design/icons";

import rus_flag from "@/shared/assets/russian_flag.svg";
import uzb_flag from "@/shared/assets/uzb_flag.svg";
import usa_flag from "@/shared/assets/usa_flag.svg";

interface LangItem {
  label: string;
  key: string;
  icon: JSX.Element;
}

const items: MenuProps["items"] = [
  {
    label: "O'zbek",
    key: "1",
    icon: (
      <img src={uzb_flag} style={{ width: "20px", height: "20px" }} alt="" />
    ),
  },
  {
    label: "Русский",
    key: "2",
    icon: (
      <img src={rus_flag} style={{ width: "20px", height: "20px" }} alt="" />
    ),
  },
  {
    label: "English",
    key: "3",
    icon: (
      <img src={usa_flag} style={{ width: "20px", height: "20px" }} alt="" />
    ),
  },
];

const menuProps = {
  items,
};

export const LanguageSwitcher: React.FC = memo(() => {
  const [language, setLang] = useState<LangItem>(items[0] as LangItem);

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    const clickedItem = items.find((item) => (item as LangItem).key === e.key);

    if (clickedItem) {
      setLang(clickedItem as LangItem);
      message.info(`Language switched to: ${clickedItem.key}`);
    }
  };

  return (
    <Dropdown
      menu={{
        ...menuProps,
        onClick: handleMenuClick,
        className: "custom-dropdown-menu",
      }}
    >
      <Button
        style={{
          width: "135px",
          color: "black",
        }}
        className="custom-btn"
      >
        <Space>
          {language.icon}
          {language.label}
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
  );
});
