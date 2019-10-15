import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [ books, setBooks ] = useState([
        {title: "Harry Potter and The Deathly Hallows"},
        {title: "Harry Potter and The Half-blood Prince"},
        {title: "Harry Potter and The Chamber of Secrets"},
        {title: "Harry Potter and The Sorcerer's Stone"},
        {title: "Harry Potter and The Goblet of Fire"},
        {title: "Harry Potter and The Order of The Phoenix"}
    ])


    return (
        <BookContext.Provider value={{books}}>
            {props.children}
        </BookContext.Provider>

     );
}

export default BookContextProvider;