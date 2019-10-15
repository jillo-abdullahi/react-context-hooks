import React, { useState } from 'react';

const NewSongForm = ({ addSongs }) => {
    const [title, setTitle] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        addSongs(title);
        setTitle('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="title">Song title:</label>
            <input type="text" id="title" required value={title} onChange={(e) => setTitle(e.target.value)}/>
            <button type="submit">Add new song</button>
        </form>
     );
}

export default NewSongForm;