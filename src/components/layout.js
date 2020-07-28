import React from "react"
import {graphql, Link, useStaticQuery} from "gatsby"

import { rhythm, scale } from "../utils/typography"
import github from "../../content/assets/github.svg"
import instagram from "../../content/assets/instagram.svg"
import twitter from "../../content/assets/twitter.svg"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

    const data = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        siteMetadata {
          social {
            twitter
            instagram
            github
          }
        }
      }
    }
  `)

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }

  const { social } = data.site.siteMetadata

  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
      }}
    >
      <header>{header}</header>
      <main>{children}</main>
      <footer
          style={{
              marginTop: rhythm(2.5),
          }}>
          <a style={{ boxShadow: 'none' }} href={`https://github.com/${social.github}`} target="_blank" rel="noreferrer"><img src={github} alt="Follow me on GitHub!" /></a>&nbsp;
          <a style={{ boxShadow: 'none' }} href={`https://instagram.com/${social.instagram}`} target="_blank" rel="noreferrer"><img src={instagram} alt="Follow me on Instagram!" /></a>&nbsp;
          <a style={{ boxShadow: 'none' }} href={`https://twitter.com/${social.twitter}`} target="_blank" rel="noreferrer"><img src={twitter} alt="Follow me on Twitter!" /></a>
      </footer>
    </div>
  )
}

export default Layout
