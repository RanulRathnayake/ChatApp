import React, { useState, useRef } from 'react';

const Home = (props) => {
    const {setRoom} = props;
    const roomInputRef = useRef('');

    const handleJoinRoom = () => {
        setRoom(roomInputRef.current.value);
    };

    return (
        <div>
            <label>Enter Room Name</label>
            <input ref={roomInputRef} />
            <button onClick={handleJoinRoom}>Join Room</button>
        </div>
    );
};

export default Home;