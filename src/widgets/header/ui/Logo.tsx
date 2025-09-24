import { memo } from "react"
import { Link } from "react-router-dom"

import logo from "../assets/cinema_logo.svg"

export const Logo = memo(() => {
  return (
    <Link to={"/"}>
        <img src={logo} alt="Logo" />
    </Link>
  )
})
