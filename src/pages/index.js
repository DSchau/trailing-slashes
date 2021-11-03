import * as React from "react"
import { Link } from 'gatsby'

// markup
const IndexPage = () => {
  return (
    <main>
      <h1>Trailing Slash behavior</h1>
      <ul>
        <li>
          <Link to="/about-us"><strong>Non-trailing slash</strong></Link>
          <ol>
            <li>/about-us should 301 redirect to /about-us/</li>
          </ol>
        </li>
        <li>
          <Link to="/"><strong>Non-trailing slash</strong> with top-level route</Link>
          <ol>
            <li>"" should 301 redirect to / (root domain)/</li>
          </ol>
        </li>
        <li>
          <Link to="/about-us/index.html"><strong>HTML in filename</strong></Link>
          <ol>
            <li>/about-us/index.html should 301 redirect to /about-us//</li>
            <li><em>Note: this may not work locally, but should work in Cloud</em></li>
          </ol>
        </li>
      </ul>
    </main>
  )
}

export default IndexPage
