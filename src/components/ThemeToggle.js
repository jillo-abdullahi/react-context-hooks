import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export default class ThemeToggle extends Component {

    static contextType = ThemeContext;
    render() {
        const { toggleTheme } = this.context;
        return (
            <div>
                <div style={{"margin-bottom": "10px"}}>Toggle theme</div>
                <div>
                    <label className="switch" >
                        <input type="checkbox" onClick={toggleTheme} />
                        <span className="slider round"></span>
                    </label>
                </div>
            </div>
        )
    }
}
