import React, { useState } from 'react';
import uuid from 'uuid/v1';
import NewSongForm from './NewSongForm';

const SongList = () => {
    const [songs, setSongs] = useState([
        {title: "This Wild Duck"},
        {title: "Black Widow"},
        {title: "Larger Than Life"},
        {title: "The Run and Go"}
    ])

    const addSongs = (title) => {
        setSongs([...songs, { title }])
    }

    return (
        <div className="song-list">
            <h2>Hooks App</h2>
            <ul>
                {songs.map(song => (
                    <li key={uuid()}>{song.title}</li>
                ))}
            </ul>
            <NewSongForm addSongs={addSongs}/>
        </div>
     );
}

export default SongList;