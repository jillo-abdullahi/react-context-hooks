import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';


export default class BookList extends Component {

    static contextType = ThemeContext;
    render() {
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;
        return (
            <div className="book-list" style={{ background: theme.syntax, color: theme.bg }}>
                <ul>
                    <li style={{ background: theme.ui}}>The Two Towers </li>
                    <li style={{ background: theme.ui}}>Saved By The Bell </li>
                    <li style={{ background: theme.ui}}>The Half-Blood Prince </li>
                    <li style={{ background: theme.ui}}> Sabrina The Teenage Witch</li>
                </ul>
            </div>
        )
    }
}
