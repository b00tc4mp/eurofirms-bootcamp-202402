import logic from "../logic";
import Form from "../components/Form";
import Button from "../components/Button";

function ResetPassword({ onUserResetPassword, onRegisterClick, onLoginClick }) {
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const lastname = form.lastname.value;
    const birthdate = form.birthdate.value;
    const email = form.email.value;
    const username = form.username.value;
    const newpassword = form.newpassword.value;
    const repeatpassword = form.repeatpassword.value;

    try {
      logic.resetPasswordUser(
        name,
        lastname,
        birthdate,
        email,
        username,
        newpassword,
        repeatpassword
      );

      onUserResetPassword();
    } catch (error) {
      console.error(error);

      alert(error.message);
    }
  };

  const handleRegisterClick = (event) => {
    event.preventDefault();

    onRegisterClick();
  };

  const handleLoginClick = (event) => {
    event.preventDefault();

    onLoginClick();
  };

  return (
    <>
      <div className="flex flex-col justify-center item-center mt-3 mb-1">
        <main className="w-3/5 flex flex-col justify-center item-center mb-8">
          <h1 className="text-center">RESET PASSWORD</h1>
          <Form onSubmit={handleSubmit} className="max-w-md">
            <div className="container-form">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" className="w-full p-2 rounded-xl border-lightgray mb-2 box-border hover:bg-[lightgray]"/>

              <label htmlFor="lastname" className="mb-0.5">Lastname</label>
              <input type="text" id="lastname" className="w-full p-2 rounded-xl border-lightgray mb-2 box-border hover:bg-[lightgray]"/>

              <label htmlFor="birthdate" className="mb-0.5">Birthdate</label>
              <input type="date" id="birthdate" className="w-full p-2 rounded-xl border-lightgray mb-2 box-border hover:bg-[lightgray]"/>

              <label htmlFor="email" className="mb-0.5">Email</label>
              <input type="text" id="email" className="w-full p-2 rounded-xl border-lightgray mb-2 box-border hover:bg-[lightgray]"/>

              <label htmlFor="username" className="mb-0.5">Username</label>
              <input type="text" id="username" className="w-full p-2 rounded-xl border-lightgray mb-2 box-border hover:bg-[lightgray]"/>

              <h2 className="text-center">New password</h2>

              <label htmlFor="newPassword" className="mb-0.5">New Password</label>
              <input type="password" id="newpassword" className="w-full p-2 rounded-xl border-lightgray mb-2 box-border hover:bg-[lightgray]"/>

              <label htmlFor="repeatPassword" className="mb-0.5">Repeat Password </label>
              <input type="password" id="repeatpassword" className="w-full p-2 rounded-xl border-lightgray mb-2 box-border hover:bg-[lightgray]"/>

              <Button type="submit">Reset</Button>
            </div>
            <div className="flex justify-center bg-[lightgray] hover:bg-[#c3c3c2] rounded-xl p-1 my-1">
              <a id="login" onClick={handleLoginClick} className="no-underline text-[#042e5a]">
                LOGIN
              </a>
              <br />
            </div>
            <div className="flex justify-center bg-[lightgray] hover:bg-[#c3c3c2] rounded-xl p-1 my-1">
              <a id="register" onClick={handleRegisterClick} className="no-underline text-[#042e5a]">
                REGISTER
              </a>
              <br />
            </div>
          </Form>
        </main>
      </div>
    </>
  );
}
export default ResetPassword;
