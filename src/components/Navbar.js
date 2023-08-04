import React from "react";
import { Button, Avatar } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import FeaturedPlayListOutlinedIcon from "@mui/icons-material/FeaturedPlayListOutlined";
import AssignmentTurnedInOutlinedIcon from "@mui/icons-material/AssignmentTurnedInOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import PowerSettingsNewOutlinedIcon from "@mui/icons-material/PowerSettingsNewOutlined";
import "../styles/Navbar.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { onSignOut, resetQuestion } from "../redux/actions/actionCreator";
import { useAuth } from "../firebase";

const Navbar = () => {
  const currentUser = useAuth();
  const [photoURL, setPhotoURL] = useState(
    "https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"
  );
  const [input, setInput] = useState("");
  const [languageOpen, setLanguageOpen] = useState(false);
  const [inputVisibility, setInputVisibility] = useState(false);
  const auth = getAuth();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userInfo.user);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  let searchTerm = "Search";
  const [width, setWidth] = useState(window.innerWidth);
  const breakPoint = 460;

  useEffect(() => {
    const handleWindowResize = () => setWidth(document.body.clientWidth);
    window.addEventListener("resize", handleWindowResize);
    console.log(window.innerWidth);
    console.log(
      document.documentElement.clientWidth,
      document.body.clientWidth
    );
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  useEffect(() => {
    if (currentUser && currentUser.photoURL) {
      setPhotoURL(currentUser.photoURL);
    }
  }, [currentUser]);

  const handleLogOut = async () => {
    try {
      // console.log("Inside Navbar")
      await signOut(auth);

      dispatch(onSignOut());
      dispatch(resetQuestion());
      navigate("/");
      console.log(user);
    } catch (err) {
      console.log(err.message);
    }
  };

  function handleQuestion() {
    navigate("/home/questions");
  }

  const handleSearch = (e) => {
    setInput(e.target.value);
    let term = e.target.value;
    let obj = {};
    obj[searchTerm] = term;
    setSearchParams({ ...obj });
    //console.log(searchParams.toString());
  };
  return (
    <div className="navbar">
      <div className={inputVisibility ? "qHeader_logo hidden" : "qHeader_logo"}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/250px-Quora_logo_2015.svg.png"
          alt="Quora"
        />
      </div>
      <div className="qHeader_icons">
        <div className="qHeader_icon">
          <HomeIcon onClick={() => navigate("/home")} />
        </div>
        <div className="qHeader_icon">
          <FeaturedPlayListOutlinedIcon
            onClick={() => navigate("/home/user_questions")}
          />
        </div>
        <div className="qHeader_icon">
          <AssignmentTurnedInOutlinedIcon
            onClick={() =>
              navigate("/home/answers", {
                state: { isEditable: false, docId: "0", ans: "" },
              })
            }
          />
        </div>
        {/* <div className="qHeader_icon">
          <PeopleAltOutlinedIcon />
        </div>
        <div className="qHeader_icon">
          <NotificationsOutlinedIcon />
        </div> */}
      </div>
      {width <= breakPoint ? (
        <div className="qHeader_input">
          <SearchIcon
            onClick={() => {
              setInputVisibility(!inputVisibility);
              console.log("Search icon");
            }}
          />
          <input
            type="text"
            placeholder="Search Quora"
            onChange={(e) => handleSearch(e)}
            value={input}
            className={inputVisibility ? "searchInput visible" : "searchInput"}
          />
        </div>
      ) : (
        <div className="qHeader_input">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search Quora"
            onChange={(e) => handleSearch(e)}
            value={input}
            className="searchInput"
          />
        </div>
      )}

      <div className="qHeader_Rem">
        <div className="qHeader_avatar">
          {width <= breakPoint ? (
            <Avatar
              className={inputVisibility ? "avatar hidden" : "avatar"}
              src={photoURL}
              sx={{ width: 24, height: 24 }}
            />
          ) : (
            <Avatar className="avatar" src={photoURL} />
          )}
        </div>
        <LanguageIcon
          className="language"
          onClick={() => setLanguageOpen(!languageOpen)}
        />
        {languageOpen && <div className="languageDiv">English</div>}
        <Button
          className={inputVisibility ? "addBtn hidden" : "addBtn"}
          onClick={handleQuestion}
        >
          Add Question
        </Button>
        <div>
          <div className="qHeader_icon">
            <PowerSettingsNewOutlinedIcon
              className={inputVisibility ? "power hidden" : "power"}
              onClick={() => handleLogOut()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
