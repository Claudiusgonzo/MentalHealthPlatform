import React from 'react';
import { NavLink } from 'react-router-dom';

const navigationBarStyle = {
    display: "flex",
    flexDirection: "row",
    height: "50px",
    padding: "0px 25px",
    lineHeight: "50px",
    fontSize: "x-large",
    fontFamily: "Calibri",
    color: "#FFFFFF",
    backgroundColor: "#333333",
    boxShadow: "0px 0px 20px #1A1A1A"
};

const navigationBarLeftStyle = {
    display: "flex",
    flex: "1 1 auto"
}

const navigationBarTitleLink = {
    textDecoration: "none",
    color: "#FFFFFF",
    fontWeight: "bold"
};

const navigationBarRightStyle = {
    display: "flex",
    flex: "0 1 auto"
}

const navigationBarLoginLink = {
    textDecoration: "none",
    color: "#FFFFFF"
};

class NavigationBar extends React.Component {
    /**
     * Renders navigation bar
     * @return  {React.Component}   Rendered component
     */
    createNavigationBar() {
        return (
            <div style={navigationBarStyle}>
                <div style={navigationBarLeftStyle}>                
                    <NavLink exact to="/" style={navigationBarTitleLink}>Mental Health Forum</NavLink>
                </div>
                <div style={navigationBarRightStyle}>
                    <NavLink exact to="/login" style={navigationBarLoginLink}>Login</NavLink>
                </div>
            </div>
        );
    }
    
    /**
     * Renders navigation bar component
     * @return  {React.Component}   Rendered component
     */
    render() {
        return this.createNavigationBar();
    }
}

module.exports = NavigationBar;