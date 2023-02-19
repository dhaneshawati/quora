import React from 'react'
import '../styles/SidebarOptions.css'
import {Add} from '@mui/icons-material'
 
const SidebarOptions = () => {
  return (
    <div className='sidebarOptions'>
      <div className="sidebarOption">
        <Add />
        <p className='text'>Create Space</p>
      </div>
      <div className="sidebarOption">
        <img src="https://qph.cf2.quoracdn.net/main-thumb-t-930-100-cbbsbwijdhpyzlpipejvqpiijhhoaday.jpeg" 
        alt="History-img" />
        <p>History</p>
      </div>
      <div className="sidebarOption">
        <img src="https://qph.cf2.quoracdn.net/main-thumb-t-931-100-c8WCPwZ9qPsh5zLGQ5wHh1ddxtc9Cch7.jpeg" 
        alt="Science-img" />
        <p>Science</p>
      </div>
      <div className="sidebarOption">
        <img src="https://qph.cf2.quoracdn.net/main-thumb-t-843-100-W7FzODceTO2aQmp8D7E4rKZ8YgSv21eR.jpeg" 
        alt="Movies-img" />
        <p>Movies</p>
      </div>
      <div className="sidebarOption">
        <img src="https://qph.cf2.quoracdn.net/main-thumb-t-1497-100-GNNZHw8iGYKcBBdqFGxoNvw85bgzRI0Z.jpeg" 
        alt="Philosophy-img" />
        <p>Philosophy</p>
      </div>
      <div className="sidebarOption">
        <img src="https://qph.cf2.quoracdn.net/main-thumb-t-2177-100-JiR07D1TQSfeQzRvWXomVaY4Poj2f8Yb.jpeg" 
        alt="Technology-img" />
        <p>Technology</p>
      </div>
      <div className="sidebarOption">
        <img src="https://qph.cf2.quoracdn.net/main-thumb-t-1056-100-hPoilc51jNiGKb8dbh4plI8jOw6MJ7pG.jpeg" 
        alt="Books-img" />
        <p>Books</p>
      </div>
      <div className="sidebarOption">
        <img
          src="https://qph.cf2.quoracdn.net/main-thumb-t-858-100-VnZbEVtOIGkEHXlnYId9slumV59IPgkA.jpeg"
          alt="Business-img"
        />
        <p>Business</p>
      </div>
      <div className="sidebarOption">
        <img
          src="https://qph.cf2.quoracdn.net/main-thumb-t-877-100-e7jKHEQr0HExAIA9rlsyHlV6HJyRruEo.jpeg"
          alt="Cooking-img"
        />
        <p>Cooking</p>
      </div>
      <div className="sidebarOption">
        <img
          src="https://qph.cf2.quoracdn.net/main-thumb-t-801-100-Sf8h894FXbQZQit0TeqDrrqS6xw6dwCQ.jpeg"
          alt="Music-img"
        />
        <p>Music</p>
      </div>
      <div className="sidebarOption">
        <img
          src="https://qph.cf2.quoracdn.net/main-thumb-t-996-100-bfZBQjeEenKKl8fcNY4tVv0FyArtB0Mb.jpeg"
          alt="Education-img"
        />
        <p>Education</p>
      </div>
    </div>
  )
}

export default SidebarOptions
