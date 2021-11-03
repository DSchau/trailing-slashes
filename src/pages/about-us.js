import * as React from "react"
import { Link } from 'gatsby'

// markup
const AboutUs = () => {
  return (
    <main>
      <h1>A page with a slash (/about-us/)</h1>
      <h2><Link to="/">Back to home</Link></h2>
    </main>
  )
}

export default AboutUs
