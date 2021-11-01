import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    //test
    return (
        <div style={{padding: '50px', marginLeft: '20px'}}>
            <NavLink to={'/profile'}> profile </NavLink>
            <NavLink to={'/register'}> register </NavLink>
            <NavLink to={'/newPass'}> newPass </NavLink>
            <NavLink to={'/recoveryPass'}> RecoveryPass</NavLink>
            <NavLink to={'/login'}> login </NavLink>
            <NavLink to={'/testPage'}> test </NavLink>
            <NavLink to={'/cards'}> cards </NavLink>
        </div>
    )
}

export default Header
