import logic from "../logic";
import Form from "../components/Form";
import Button from "../components/Button";

function Register({ onUserRegistered, onLoginClick, onResetPasswordClick }) {
  const handleSubmit = (event) => {
    event.preventDefault()

    const form = event.target

    const name = form.name.value
    const lastname = form.lastname.value
    const birthdate = form.birthdate.value
    const email = form.email.value
    const username = form.username.value
    const password = form.password.value

    try {
      logic.registerUser(name, lastname, birthdate, email, username, password)
          .then (()=> onUserRegistered())
          .catch(error=> {
            console.error(error)
            
            alert(error.message)
          })
    } catch (error) {
      console.error(error);

      alert(error.message);
    }
  };

  const handleLoginClick = (event) => {
    event.preventDefault();

    onLoginClick();
  };
  console.debug("Register render");

  const handleResetPasswordClick = (event) => {
    event.preventDefault();
    onResetPasswordClick();
  };
  return (
    <div className="flex flex-col justify-center item-center mt-3 mb-1">
      <main className="w-3/5 flex flex-col justify-center item-center mb-8" >
        <h1 className="text-center">REGISTER</h1>
        <Form onSubmit={handleSubmit} className="max-w-sm">
          <label htmlFor="name" className="mb-0.5">Name</label>
          <input type="text" id="name" className="w-full p-2 rounded-xl border-lightgray mb-2 box-border hover:bg-[lightgray]"/>

          <label htmlFor="lastname" className="mb-0.5">Lastname</label>
          <input type="text" id="lastname" className="w-full p-2 rounded-md border-lightgray mb-2 box-border hover:bg-[lightgray]" />
          <label htmlFor="birthdate" className="mb-0.5">Birthdate</label>
          <input type="date" id="birthdate" className="w-full p-2 rounded-md border-lightgray mb-2 box-border hover:bg-[lightgray]" />

          <label htmlFor="email" className="mb-0.5">Email</label>
          <input type="text" id="email" className="w-full p-2 rounded-md border-lightgray mb-2 box-border hover:bg-[lightgray]" />

          <label htmlFor="username" className="mb-0.5">Username</label>
          <input type="text" id="username" className="w-full p-2 rounded-md border-lightgray mb-2 box-border hover:bg-[lightgray]" />

          <label htmlFor="password" className="mb-0.5">Password</label>
          <input type="password" id="password" className="w-full p-2 rounded-md border-lightgray mb-2 box-border hover:bg-[lightgray]"/>

          <Button type="submit" >Register</Button>

          <div className="flex justify-center bg-[lightgray] hover:bg-[#c3c3c2] rounded-xl p-1 my-1">
            <a onClick={handleResetPasswordClick} className="no-underline text-[#042e5a]">RESET PASSWORD</a>
          </div>
          <div className="flex justify-center bg-[lightgray] hover:bg-[#c3c3c2] rounded-xl p-1 my-1">
            <a id="login" onClick={handleLoginClick}  className="no-underline text-[#042e5a]">LOGIN</a>
          </div>
        </Form>
      </main>
    </div>
  );
}
export default Register;
