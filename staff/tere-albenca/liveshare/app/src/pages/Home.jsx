import{Component} from 'react'
import logic from '../logic'
class Home extends Component {
    constructor(){
        super()
          const user=logic.retrieveUser()
    
          const posts=logic.retrieveUser()
      }
      render(){
        return <>  
         <header className="header">
             <img src="src/assets/images/logo-cabecera-alalluna.png" alt="logo alalluna"/>
             <nav id="top-menu">
                     <button id="chat-button">💬</button>
                     <button id="posts-button">🏚️</button>
                     <button id="create-post-button">+</button> 
             </nav>  
            
         </header>
        <section id="create-post-section" className="create-post-section--off">
             <h2>CREATE POST</h2>
             <form action="" id="create-post-form">
                 <input type="text" placeholder="image" id="image"/>

                 <input type="text" placeholder="text" id="text"/>

                 <button type="submit">create</button>

             </form>

             <button id="create-post-cancel-button">cancel</button>
         </section>

         <footer>
             <div>
                 &copy; 2024 Alalluna
             </div>
             <div className="right">
                 <button id="logoutButton">Logout</button>
             </div>

         </footer>
     </>
  }
}
export default Home
// function Home(){
//     return <>  
//         <header className="header">
//             <img src="src/assets/images/logo-cabecera-alalluna.png" alt="logo alalluna"/>
//             <nav id="top-menu">
//                     <button id="chat-button">💬</button>
//                     <button id="posts-button">🏚️</button>
//                     <button id="create-post-button">+</button> 
//             </nav>  
            
//         </header>
        
//         <div className="h1">
//             <h1 className="homeTitlePost">Welcome, Home!</h1>
//         </div>
        
//         <section id="posts-section">
//             <h2>Posts</h2>
//             <div id="posts-list">
//             <article className="post"><h3>alalluna</h3><img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWEwcHQ4aWZ0YXlndGtkMzg1YTdmOWN1dnhreG41azI1cHB5MnpmciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/yS36IeP5FpzxqkfuCj/giphy.gif" className="post-image"/><p>Are you programmer?<br/><sup>2024-03-20, 4:57:40 p.m.</sup></p></article>
             
//             <article className="post"><h3>saltorgi</h3><img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2Qyc250NTFweG1iN3h1MTlhbnVnMHptN3E4bTdrOWlkcm44d3VhdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l49F5FtmOKYb3cD84/giphy.gif" className="post-image"/><p>Cocodrilo Dandee<br/><sup>2024-03-19, 2:56:35 p.m.</sup></p></article> 
//             <article className="post"><h3>alalluna</h3><img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHgydjA3NmpyNnAzcjRkYnl5cnUxcmo5MXh6NTU5aWdmcDRidW8zbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3ohs2D7NsrlYSSudvq/giphy.gif" className="post-image"/><p>buenos dias<br/><sup>2024-03-19, 9:27:18 a.m.</sup></p></article>
//             </div>
//         </section>
        
//         <section id="chat-section" className="chat-section--off">
//             <h2>Chat</h2>
//             <ul id="chat-users"></ul>
//             <div id="chat" className="chat--off">
//                 <h3 id="chat-interlocutor">username</h3>

//                 <ul id="chat-messages"></ul>

//                 <form id="chat-form">
//                     <input type="text" placeholder="your message" id="text"/>

//                     <button type="submit">Send</button>
//                 </form>
//             </div>
//         </section>

//         <section id="create-post-section" className="create-post-section--off">
//             <h2>CREATE POST</h2>
//             <form action="" id="create-post-form">
//                 <input type="text" placeholder="image" id="image"/>

//                 <input type="text" placeholder="text" id="text"/>

//                 <button type="submit">create</button>

//             </form>

//             <button id="create-post-cancel-button">cancel</button>
//         </section>

//         <footer>
//             <div>
//                 &copy; 2024 Alalluna
//             </div>
//             <div className="right">
//                 <button id="logoutButton">Logout</button>
//             </div>

//         </footer>
//     </>
