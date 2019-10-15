import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

export default class Navbar extends Component {

    render() {
        return (
            <AuthContext.Consumer>{(authContext) => (
                <ThemeContext.Consumer>{themeContext => {
                    const { isAuthenticated, toggleAuth } = authContext;
                    const { isLightTheme, light, dark } = themeContext;
                    const theme = isLightTheme ? light : dark;
                        return (
                            <nav style={{ background: theme.ui, color: theme.syntax}}>
                                <h1>Context/Hooks App</h1>
                                <ul>
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Contact</li>
                                    <li style={{cursor: 'pointer'}}
                                    onClick={toggleAuth}>{ isAuthenticated ? 'Logged in' : 'Logged out'}</li>
                                </ul>
                            </nav>
                        )
                }}</ThemeContext.Consumer>
            )}</AuthContext.Consumer>
        )
    }
}
