import React from "react";
import "./SidePanel.css";
import { useNavigate } from "react-router-dom";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faTimesSquare,
} from "@fortawesome/free-solid-svg-icons";

const SidePanel = () => {
  const navigate = useNavigate();
  const handleClick = (idx) => {
    let page = "";
    switch (idx) {
      case 0:
        page = "History";
        break;
      case 1:
        page = "Science";
        break;
      case 2:
        page = "Movies";
        break;
      case 3:
        page = "Philosophy";
        break;
      case 4:
        page = "Technology";
        break;
      case 5:
        page = "Books";
        break;
      case 6:
        page = "Business";
        break;
      case 7:
        page = "Cooking";
        break;
      case 8:
        page = "Music";
        break;
      case 9:
        page = "Education";
        break;
      default:
        page = "";
        break;
    }
    navigate(`/home/Spaces/${page}`, { state: { index: idx } });
  };
  return (
    <div className="main_sidepanel">
      <input type="checkbox" id="check" />
      <div className="btn_bars">
        <label htmlFor="check">
          <FontAwesomeIcon icon={faBars} />
        </label>
      </div>
      <div className="sidepanel_menu">
        <div className="section_heading ">
          <PeopleAltOutlinedIcon />
          <p className="heading">Your Spaces</p>
        </div>
        <div className="btn_close">
          <label htmlFor="check">
            <FontAwesomeIcon icon={faTimes} />
          </label>
        </div>
        <div className="menu">
          <div className="space_options" onClick={() => handleClick(0)}>
            <img
              src="https://media.istockphoto.com/id/936911748/photo/old-hourglass-and-ancient-book.jpg?s=612x612&w=0&k=20&c=jQX5TjGDgXEDSKfY2cHEL4x7oc7pH4B_ApO0Q4aXMaI="
              alt="History-img"
            />
            <p>History</p>
          </div>
          <div className="space_options" onClick={() => handleClick(1)}>
            <img
              src="https://epi-rsc.rsc-cdn.org/globalassets/05-journals-books-databases/our-journals/00-journal-pages-heros/Chemical-Science-HERO.jpg?version=9e72b3c3"
              alt="Science-img"
            />
            <p>Science</p>
          </div>
          <div className="space_options" onClick={() => handleClick(2)}>
            <img
              src="https://qph.cf2.quoracdn.net/main-thumb-t-843-100-W7FzODceTO2aQmp8D7E4rKZ8YgSv21eR.jpeg"
              alt="Movies-img"
            />
            <p>Movies</p>
          </div>
          <div className="space_options" onClick={() => handleClick(3)}>
            <img
              src="https://qph.cf2.quoracdn.net/main-thumb-t-1497-100-GNNZHw8iGYKcBBdqFGxoNvw85bgzRI0Z.jpeg"
              alt="Philosophy-img"
            />
            <p>Philosophy</p>
          </div>
          <div className="space_options" onClick={() => handleClick(4)}>
            <img
              src="https://media.istockphoto.com/id/1295900106/photo/data-scientists-male-programmer-using-laptop-analyzing-and-developing-in-various-information.jpg?s=612x612&w=0&k=20&c=2z9VEOlF7mAgeZDEsnetqFMyQS6xqjmXDoryrQ_LeOc="
              alt="Technology-img"
            />
            <p>Technology</p>
          </div>
          <div className="space_options" onClick={() => handleClick(5)}>
            <img
              src="https://qph.cf2.quoracdn.net/main-thumb-t-1056-100-hPoilc51jNiGKb8dbh4plI8jOw6MJ7pG.jpeg"
              alt="Books-img"
            />
            <p>Books</p>
          </div>
          <div className="space_options" onClick={() => handleClick(6)}>
            <img
              src="https://qph.cf2.quoracdn.net/main-thumb-t-858-100-VnZbEVtOIGkEHXlnYId9slumV59IPgkA.jpeg"
              alt="Business-img"
            />
            <p>Business</p>
          </div>
          <div className="space_options" onClick={() => handleClick(7)}>
            <img
              src="https://t4.ftcdn.net/jpg/03/32/75/39/360_F_332753934_tBacXEgxnVplFBRyKbCif49jh0Wz89ns.jpg"
              alt="Cooking-img"
            />
            <p>Cooking</p>
          </div>
          <div className="space_options" onClick={() => handleClick(8)}>
            <img
              src="https://img.freepik.com/free-vector/musical-notes-frame-with-text-space_1017-32857.jpg"
              alt="Music-img"
            />
            <p>Music</p>
          </div>
          <div className="space_options" onClick={() => handleClick(9)}>
            <img
              src="https://qph.cf2.quoracdn.net/main-thumb-t-996-100-bfZBQjeEenKKl8fcNY4tVv0FyArtB0Mb.jpeg"
              alt="Education-img"
            />
            <p>Education</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidePanel;
