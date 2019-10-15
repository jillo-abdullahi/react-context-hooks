import React, { useState } from 'react';
import uuid from 'uuid/v1';

const SongList = () => {
    const [songs, setSongs] = useState([
        {title: "This Wild Duck"},
        {title: "Black Widow"},
        {title: "Larger Than Life"},
        {title: "The Run and Go"}
    ])

    const addSongs = () => {
        setSongs([...songs, { title: "New song"}])
    }

    return (
        <div className="song-list">
            <h2>Hooks App</h2>
            <ul>
                {songs.map(song => (
                    <li key={uuid()}>{song.title}</li>
                ))}
            </ul>
            <button onClick={addSongs}>Add new song</button>
        </div>
     );
}

export default SongList;