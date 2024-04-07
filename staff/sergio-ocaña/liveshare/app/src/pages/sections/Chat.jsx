
function Chat() {

    return <section id="chat-section">
        <h2>Chat</h2>

        <section id="chat-section">
            <ul id="chat-users"><li className="chat-user chat-user-online">curiosidadlibre</li><li className="chat-user chat-user-online">adad</li><li className="chat-user chat-user-offline">1234</li></ul>

            <div id="chat" >
                <h3 id="chat-interlocutor">username</h3>
                <ul id="chat-messages"></ul>
                <form id="chat-form">
                    <label htmlFor="text">Text</label>
                    <input className="input" type="text" id="text" />
                    <button className="button" type="submit">Send</button>
                </form>
            </div>
        </section>
    </section>
}
export default Chat