import React, { useEffect, useState, useRef } from 'react'
import withAuth from '../../helpers/withAuth'
import useUser from '../../helpers/useUser';
import { io } from "socket.io-client"

const socket = io("http://localhost:8000");
export default withAuth(function Chatrooms(props) {
    const [user, setUser] = useState(null);
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const [ imageUrl, setImageUrl ] = useState("")
    const [__msgs, _setMsgs] = useState(null)
    const msgContainer = useRef(null);
    useEffect(async () => {
        const [_, _user] = await useUser();
        setUser(_user);
        setImageUrl(_user.profile.photos[0].value);
        console.log(_user.profile)
    }, []);

    useEffect(() => {
        socket.on("chat", (msg) => {
            console.log(msg);
            setMessages([...messages, msg]);
            msgContainer.current.scroll({ top: msgContainer.current.scrollHeight });
        });
    })

    const handleKeyPress = (e) => {
        e.preventDefault();
        socket.emit("message", { message, userName: user.profile.displayName, img: imageUrl });
        setMessage("");
    }

    return (
        <div className='min-h-screen p-5 overflow-hidden bg-black text-white relative'>
            <div className="m-4">
                {
                    user &&
                    <div style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.7)'
                    }} className="flex items-center p-5 absolute top-0 lef-0 gap-6">
                        <img src={imageUrl} className="rounded-full" alt="" />
                        <h1 className="text-white font-extrabold text-2xl">
                            Chatting as: <br />
                            <em> {user && user.profile.displayName}</em>
                        </h1>
                    </div>
                }
                <div ref={msgContainer} className="messages w-full flex flex-col gap-4 h-[80vh] overflow-y-scroll">
                    {
                        (messages.slice(-10)).map((msg, i) => {
                            return (
                                <div className="bg-white rounded flex w-full items-center gap-5 p-5 text-black">
                                    <div className="flex flex-col items-center justify-center">
                                        <img src={msg.img} className="rounded-full" alt="" />
                                        <h1 className="text-sm font-bold">{msg.userName}</h1>
                                    </div>
                                    <h1 key={i} className='font-extrabold'>
                                        {
                                            msg.message
                                        }
                                    </h1>
                                </div>
                            )
                        })
                    }
                </div>
                <form onSubmit={handleKeyPress}>
                    <input type="text" placeholder="Enter message here..." className='text-black p-5 my-4 w-[80%]' value={message} onChange={e => {
                        setMessage(e.target.value);
                    }} />
                    <button type="submit" className='w-[20%] p-5 bg-purple-500'>Send</button>
                </form>
            </div>
        </div>
    )
})
