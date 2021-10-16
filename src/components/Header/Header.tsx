import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <div>
            <NavLink to={'/'}> profile </NavLink>
            <NavLink to={'/register'}> register </NavLink>
            <NavLink to={'/newPass'}> newPass </NavLink>
            <NavLink to={'/recoveryPass'}> RecoveryPass</NavLink>
            <NavLink to={'/login'}> login </NavLink>
            <NavLink to={'/testPage'}> test </NavLink>
        </div>
    )
}

export default Header
