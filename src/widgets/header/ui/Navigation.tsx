import { memo } from "react";
import { NavLink } from "react-router-dom";

import showtimeA from "../assets/showtime_active.svg";
import showTimeD from "../assets/showtime_dis.svg";

import sessionA from "../assets/session_active.svg";
import sessionD from "../assets/session_dis.svg";

import ticketA from "../assets/ticket_active.svg";
import ticketD from "../assets/ticket_dis.svg";

import searchA from "../assets/search_active.svg";
import searchD from "../assets/search_dis.svg";

export const Navigation = memo(() => {
  return (
    <ul className="flex gap-[38px] ">
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `flex flex-col items-center ${
              isActive ? "text-[#C61F1F]" : "text-[#A1A1A1]"
            }`
          }
        >
          {({ isActive }) => (
            <>
              <img
                src={isActive ? showtimeA : showTimeD}
                className="w-6 h-6 mb-1.5"
              />
              <span>Showtime</span>
            </>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/movie"}
          className={({ isActive }) =>
            `flex flex-col items-center ${
              isActive ? "text-[#C61F1F]" : "text-[#A1A1A1]"
            }`
          }
        >
          {({ isActive }) => (
            <>
              <img
                src={isActive ? sessionA : sessionD}
                className="w-6 h-6 mb-1.5"
              />
              <span>Session</span>
            </>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/movie"}
          className={({ isActive }) =>
            `flex flex-col items-center ${
              isActive ? "text-[#C61F1F]" : "text-[#A1A1A1]"
            }`
          }
        >
          {({ isActive }) => (
            <>
              <img
                src={isActive ? ticketA : ticketD}
                className="w-6 h-6 mb-1.5"
              />
              <span>Tickets</span>
            </>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/movie"}
          className={({ isActive }) =>
            `flex flex-col items-center ${
              isActive ? "text-[#C61F1F]" : "text-[#A1A1A1]"
            }`
          }
        >
          {({ isActive }) => (
            <>
              <img
                src={isActive ? searchA : searchD}
                className="w-6 h-6 mb-1.5"
              />
              <span>Search</span>
            </>
          )}
        </NavLink>
      </li>
    </ul>
  );
});
