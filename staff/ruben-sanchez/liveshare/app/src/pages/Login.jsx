import logic from "../logic";

import { errors } from "com";

const { ContentError, MatchError } = errors;

function Login({ onUserLoggedIn, onRegisterClick }) {
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    const username = form.username.value;
    const password = form.password.value;

    try {
      logic
        .loginUser(username, password)
        .then(() => onUserLoggedIn())
        .catch((error) => {
          console.error(error);

          let feedback = error.message;

          if (
            error instanceof TypeError ||
            error instanceof RangeError ||
            error instanceof ContentError
          )
            feedback = `${feedback}, please correct it`;
          else if (error instanceof MatchError)
            feedback = `${feedback}, please verify credentials`;
          else feedback = "sorry , there was an error , please try again later";

          alert(feedback);
        });
    } catch (error) {
      console.error(error.message);

      let feedback = error.message;

      if (
        error instanceof TypeError ||
        error instanceof RangeError ||
        error instanceof ContentError
      )
        feedback = `${feedback}, please correct it`;
      else feedback = "sorry, there was an error, please try again later";

      alert(feedback);
    }
  };

  const handleRegisterClick = (event) => {
    event.preventDefault();

    onRegisterClick();
  };

  console.debug("Login render");

  return (
    <main className="px-20">
      <h1 className="font-bold text-2xl text-center mb-10">Login</h1>

      <form className="flex flex-cool gap-2 mb-5" onSubmit={handleSubmit}>
        <label
          htmlFor="username"
          className="font-serif:Cambria hover:font-sans"
        >
          Username
        </label>
        <input className="border-b-2 border-black" type="text" id="username" />

        <label htmlFor="password" className="underline hover:bg-sky-700">
          Password
        </label>
        <input
          className="border-b-2 border-black underline"
          type="password"
          id="password"
        />

        <button
          className="rounded-xl border-2 border-black px-3 self-end font-serif:Cambria"
          type="submit"
        >
          Login
        </button>
      </form>

      <a
        className="underline block text-center font-family: ui-monospace"
        href=""
        onClick={handleRegisterClick}
      >
        Register
      </a>
    </main>
  );
}

export default Login;
