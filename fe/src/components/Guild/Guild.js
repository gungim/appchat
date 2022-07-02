import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NewGuild from "./NewGuild/NewGuild";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import { Border } from "../../styled";
import AppleIcon from "@mui/icons-material/Apple";
import { CircleIcon, Scroll } from "../../styled";
import { Link } from "react-router-dom";
import SelectGuild from "./SelectGuild";

const green = "#40B981";

function Guilds() {
  const dispatch = useDispatch();
  const [isNewGuild, setIsNewGuild] = useState(false);
  const { guilds: guildList } = useSelector((state) => state.guilds);
  const [activeId, setActiveId] = useState("home");

  return (
    <div className="flex items-center bg-gray-900 px-3 h-screen max-w-min">
      <Scroll>
        <div className="pt-2">
          <Link to="/home">
            <CircleIcon
              className={activeId === "home" ? "active" : ""}
              onClick={() => {
                setActiveId("home");
              }}
            >
              <AppleIcon />
              <Border />
            </CircleIcon>
          </Link>
        </div>
        <div className="pt-2">
          {guildList?.map((c) => (
            <CircleIcon
              className={activeId === c._id ? "active" : ""}
              key={c._id}
            >
              <SelectGuild guildId={c._id} />
            </CircleIcon>
          ))}
          <CircleIcon
            color={green}
            bg={green}
            onClick={() => setIsNewGuild(!isNewGuild)}
          >
            <AddOutlinedIcon />
          </CircleIcon>
          <CircleIcon
            color={green}
            bg={green}
            onClick={() => setActiveId("Discover")}
          >
            <Link to="/discover">
              <DashboardOutlinedIcon />
            </Link>
            <Border />
          </CircleIcon>
        </div>
      </Scroll>
      {isNewGuild && (
        <NewGuild isNewGuild={isNewGuild} setIsNewGuild={setIsNewGuild} />
      )}
    </div>
  );
}

export default Guilds;
