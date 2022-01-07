import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <nav>
      <ul className="NavContent">
        <li className="NavItem">
          <Link to="/page-2/">Go to page 2</Link> <br />
        </li>
        <li className="NavItem">
          <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
        </li>
        <li className="NavItem">
          <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
        </li>
        <li className="NavItem">
          <Link to="/using-dsg">Go to "Using DSG"</Link>
        </li>
      </ul>
    </nav>

    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
  </Layout>
)

export default IndexPage
