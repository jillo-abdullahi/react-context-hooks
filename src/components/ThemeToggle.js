import React, { Component, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

// export default class ThemeToggle extends Component {

//     static contextType = ThemeContext;
//     render() {
//         const { toggleTheme } = this.context;
//         return (
//             <div>
//                 <div style={{"marginBottom": "10px"}}>Toggle theme</div>
//                 <div>
//                     <label className="switch" >
//                         <input type="checkbox" onClick={toggleTheme} />
//                         <span className="slider round"></span>
//                     </label>
//                 </div>
//             </div>
//         )
//     }
// }

const ThemeToggle = () => {
    const { toggleTheme } = useContext(ThemeContext)
    return (
        <div>
            <div style={{"marginBottom": "10px"}}>Toggle theme</div>
            <div>
                <label className="switch" >
                    <input type="checkbox" onClick={toggleTheme} />
                    <span className="slider round"></span>
                </label>
            </div>
        </div>
     );
}

export default ThemeToggle;
