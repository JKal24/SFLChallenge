import * as React from "react"
import { Link } from "gatsby"

const Nav = () => (
    <nav className="header-navbar">
      <li>
        <Link to="/page-2/">Go to page 2</Link> <br />
      </li>
      <li>
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      </li>
      <li>
        <Link to="/">Go back to the homepage</Link>
      </li>
    </nav>
)

export default Nav;