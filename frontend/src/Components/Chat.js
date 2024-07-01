import {React, useState, useEffect} from 'react'
import {addDoc, collection, serverTimestamp, onSnapshot, query, where, orderBy} from 'firebase/firestore'
import {auth, db} from '../config/firebase-config'

const Chat = (props) => {
    const {room} = props;

    const [newMessages, setNewMessages] = useState('');
    const [messages, setMessages] = useState([]);

    const messageRef = collection(db, 'messages');


    useEffect(() => {
        const querymessages = query(messageRef,
            where('room', '==', room),
            orderBy('createdAt')
        )
        const unsubscribe = onSnapshot(querymessages, (snapshot) => {
            let messages = [];
            snapshot.forEach((doc) => {
                messages.push({
                    ...doc.data(),
                    id: doc.id
                });
            });
            setMessages(messages);
        })
        return unsubscribe;
    }, []);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(newMessages === "") {
            return;
        }
        await addDoc(messageRef, {
            text: newMessages,
            createdAt: serverTimestamp(),
            username: auth.currentUser.displayName,
            room: room
            
        });
        setNewMessages('');
    };
    return (
        <div className="chat">
            <div className='header'>
                <h1>Welcome to : {room}</h1>
            </div>
            <div className='messages'>
                {messages.map((message) => (
                    <div key={message.id} className="message">
                        <span className="message-username">{message.username} </span>
                        {message.text}
                    </div>
                ))}
            </div>
            <form 
            className="new-message-form"
            onSubmit={handleSubmit}>
                <input
                    className="new-message-input"
                    type="text"
                    placeholder="Type your message here..."
                    onChange={(e) => setNewMessages(e.target.value)}
                    value={newMessages}
                />
                <button
                    className="send-button"
                    type="submit">
                    Send
                </button>
            </form>
        </div>
    )
}

export default Chat
