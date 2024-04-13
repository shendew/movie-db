import React from "react";
import "./NavBar.css";
import user from "../../img/user.png";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navBarContainer">
      {/* <img src={} className='webLogo'/> */}
      <span className="webLogo"> Movie DB</span>
      <div className="searchContainer">
          <div className="form">
          <label for="search">Search for stuff</label>
          <input
            id="search"
            type="search"
            placeholder="Search..."
            autofocus
            required
          />
          <button  onClick={()=>{alert(document.getElementById("search").value)}}>Search</button>
          </div>
        {/* <input type='text' placeholder='Type something' className='searchBox' id='searchBox' name='data'/>
            <Link><button className='searchBtn' onClick={()=>{alert(document.getElementById("searchBox").value)}}>Search</button></Link> */}
      </div>
      <img src={user} className="profilePic" />
    </div>
  );
}

export default NavBar;
