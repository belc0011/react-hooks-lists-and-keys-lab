import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const NavBarLinks = links.map((link) => {
    const hrefvar = `#${link}`
    return <a href={hrefvar} key={link}>{link}</a>
  })
  return ( 
  <nav>
    {NavBarLinks}
  </nav>
  )
}

export default NavBar;
