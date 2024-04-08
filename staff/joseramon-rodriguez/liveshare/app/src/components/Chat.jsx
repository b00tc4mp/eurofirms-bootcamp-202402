import logic from "../logic"
function Chat() {
    return <section id="chat-section" className="">
        <h2>Chat Section</h2>
        <ul id="chat-users">
            <li className="chat-user chat-user-online">test2</li>
        </ul>

        <div id="chat" className="chat--off">
            <h3 id="chat-interlocutor">username</h3>

            <ul id="chat-messages">
                {/* <li>chat messages</li> */}
            </ul>

            <form id="chat-form">
                <label for="text">Text</label>
                <input type="text" id="text" />

                <button type="submit">Send</button>
            </form>
        </div>
    </section>
}

export default Chat