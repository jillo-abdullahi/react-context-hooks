import React, { useState, useEffect } from 'react';
import uuid from 'uuid/v1';
import NewSongForm from './NewSongForm';

const SongList = () => {
    const [songs, setSongs] = useState([
        {title: "This Wild Duck"},
        {title: "Black Widow"},
        {title: "Larger Than Life"},
        {title: "The Run and Go"}
    ]);

    const [ age, setAge ] = useState(20);

    const addSongs = (title) => {
        setSongs([...songs, { title }])
    }

    useEffect(() => {
        console.log("useEffect songs ran", songs)
    }, [songs]);

    useEffect(() => {
        console.log("useEffect age ran", age)
    }, [age]);

    return (
        <div className="song-list">
            <h2>Hooks App</h2>
            <ul>
                {songs.map(song => (
                    <li key={uuid()}>{song.title}</li>
                ))}
            </ul>
            <NewSongForm addSongs={addSongs}/>
            <button onClick={() => setAge(age + 1)}>Add 1 to age: {age}</button>
        </div>
     );
}

export default SongList;