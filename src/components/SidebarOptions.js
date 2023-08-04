import React from "react";
import "../styles/SidebarOptions.css";
//import { Add } from "@mui/icons-material";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import { useNavigate } from "react-router-dom";

const SidebarOptions = () => {
  const navigate = useNavigate();
  const handleClick = (idx) => {
    navigate("/home/Spaces", { state: { index: idx } });
  };

  return (
    <div className="sidebarOptions">
      <div className="sidebarOption">
        <PeopleAltOutlinedIcon />
        <p className="text">Your Spaces</p>
      </div>
      <div className="sidebarOption" onClick={() => handleClick(0)}>
        <img
          src="https://media.istockphoto.com/id/936911748/photo/old-hourglass-and-ancient-book.jpg?s=612x612&w=0&k=20&c=jQX5TjGDgXEDSKfY2cHEL4x7oc7pH4B_ApO0Q4aXMaI="
          alt="History-img"
        />
        <p>History</p>
      </div>
      <div className="sidebarOption" onClick={() => handleClick(1)}>
        <img
          src="https://epi-rsc.rsc-cdn.org/globalassets/05-journals-books-databases/our-journals/00-journal-pages-heros/Chemical-Science-HERO.jpg?version=9e72b3c3"
          alt="Science-img"
        />
        <p>Science</p>
      </div>
      <div className="sidebarOption" onClick={() => handleClick(2)}>
        <img
          src="https://qph.cf2.quoracdn.net/main-thumb-t-843-100-W7FzODceTO2aQmp8D7E4rKZ8YgSv21eR.jpeg"
          alt="Movies-img"
        />
        <p>Movies</p>
      </div>
      <div className="sidebarOption" onClick={() => handleClick(3)}>
        <img
          src="https://qph.cf2.quoracdn.net/main-thumb-t-1497-100-GNNZHw8iGYKcBBdqFGxoNvw85bgzRI0Z.jpeg"
          alt="Philosophy-img"
        />
        <p>Philosophy</p>
      </div>
      <div className="sidebarOption" onClick={() => handleClick(4)}>
        <img
          src="https://media.istockphoto.com/id/1295900106/photo/data-scientists-male-programmer-using-laptop-analyzing-and-developing-in-various-information.jpg?s=612x612&w=0&k=20&c=2z9VEOlF7mAgeZDEsnetqFMyQS6xqjmXDoryrQ_LeOc="
          alt="Technology-img"
        />
        <p>Technology</p>
      </div>
      <div className="sidebarOption" onClick={() => handleClick(5)}>
        <img
          src="https://qph.cf2.quoracdn.net/main-thumb-t-1056-100-hPoilc51jNiGKb8dbh4plI8jOw6MJ7pG.jpeg"
          alt="Books-img"
        />
        <p>Books</p>
      </div>
      <div className="sidebarOption" onClick={() => handleClick(6)}>
        <img
          src="https://qph.cf2.quoracdn.net/main-thumb-t-858-100-VnZbEVtOIGkEHXlnYId9slumV59IPgkA.jpeg"
          alt="Business-img"
        />
        <p>Business</p>
      </div>
      <div className="sidebarOption" onClick={() => handleClick(7)}>
        <img
          src="https://t4.ftcdn.net/jpg/03/32/75/39/360_F_332753934_tBacXEgxnVplFBRyKbCif49jh0Wz89ns.jpg"
          alt="Cooking-img"
        />
        <p>Cooking</p>
      </div>
      <div className="sidebarOption" onClick={() => handleClick(8)}>
        <img
          src="https://img.freepik.com/free-vector/musical-notes-frame-with-text-space_1017-32857.jpg"
          alt="Music-img"
        />
        <p>Music</p>
      </div>
      <div className="sidebarOption" onClick={() => handleClick(9)}>
        <img
          src="https://qph.cf2.quoracdn.net/main-thumb-t-996-100-bfZBQjeEenKKl8fcNY4tVv0FyArtB0Mb.jpeg"
          alt="Education-img"
        />
        <p>Education</p>
      </div>
    </div>
  );
};

export default SidebarOptions;
