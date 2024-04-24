import logic from "../logic";
import Form from "../components/Form";
import Button from "../components/Button";
import Input from "../components/Input";

function Login({ onUserLoggedIn, onRegisterClick, onResetPasswordClick }) {
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    const username = form.username.value;
    const password = form.password.value;

    try {
      logic.loginUser(username, password);

      onUserLoggedIn();
    } catch (error) {
      console.error(error);

      alert(error.message);
    }
  };

  const handleRegisterClick = (event) => {
    event.preventDefault();

    onRegisterClick();
  };

  const handleResetPasswordClick = (event) => {
    event.preventDefault();
    onResetPasswordClick();
  };

  return (
    <>
      <div className="flex flex-col justify-center item-center mt-3 mb-1">
        <main className="w-3/5 flex flex-col justify-center item-center mb-8">
          <h1 className="text-center">LOGIN</h1>
          <Form onSubmit={handleSubmit} className="max-w-sm">
            <label htmlFor="username">Username</label>
            <Input type="text" id="username"/>

            <label htmlFor="password">Password</label>
            <input type="password" id="password" className="w-full p-2 rounded-xl border-lightgray mb-2 box-border hover:bg-[lightgray]"/>

            <Button type="submit">LOGIN</Button>

            <div className="flex justify-center bg-[lightgray] hover:bg-[#c3c3c2] rounded-xl p-1 my-1">
              <a onClick={handleResetPasswordClick} className="no-underline text-[#042e5a]">Reset password</a>
            </div>
            <div className="flex justify-center bg-[lightgray] hover:bg-[#c3c3c2] rounded-xl p-1 my-1">
              <a onClick={handleRegisterClick} className="no-underline text-[#042e5a]">Register</a>
              <br />
            </div>
          </Form>
        </main>
      </div>
    </>
  );
}
export default Login;
