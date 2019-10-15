import React, { Component, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { BookContext } from '../contexts/BookContext';
import uuid from 'uuid/v1';


// export default class BookList extends Component {

//     static contextType = ThemeContext;
//     render() {
//         const { isLightTheme, light, dark } = this.context;
//         const theme = isLightTheme ? light : dark;
//         return (
//             <div className="book-list" style={{ background: theme.bg, color: theme.syntax }}>
//                 <ul>
//                     <li style={{ background: theme.ui}}>The Two Towers </li>
//                     <li style={{ background: theme.ui}}>Saved By The Bell </li>
//                     <li style={{ background: theme.ui}}>The Half-Blood Prince </li>
//                     <li style={{ background: theme.ui}}> Sabrina The Teenage Witch</li>
//                 </ul>
//             </div>
//         )
//     }
// }

const BookList = () => {
    const { isLightTheme, light, dark } = useContext(ThemeContext);
    const { books } = useContext(BookContext);
    const theme = isLightTheme ? light : dark;
    return (
        <div className="book-list" style={{ background: theme.bg, color: theme.syntax }}>
            <ul>
                {books.map(book => (
                    <li key={uuid()} style={{ background: theme.ui}}>{book.title}</li>
                ))}
            </ul>
        </div>
      );
}

export default BookList;
