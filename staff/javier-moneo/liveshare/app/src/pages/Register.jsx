import logic from '../logic';
import errors from '../logic/errors';

const { ContentError, TypeError, RangeError, MatchError, DuplicityError } =
  errors;

function Register({ onUserRegistered, onLoginClick }) {
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const birthdate = form.birthdate.value;
    const email = form.email.value;
    const username = form.username.value;
    const password = form.password.value;

    try {
      logic
        .registerUser(name, birthdate, email, username, password)
        .then(() => onUserRegistered())
        .catch((error) => {
          console.error(error.message);

          let feedback = error.message;

          if (
            error instanceof TypeError ||
            error instanceof RangeError ||
            error instanceof ContentError
          )
            feedback = `${feedback}, please correct it`;
          else if (error instanceof DuplicityError)
            feedback = `${feedback}, please try with another user`;

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

      alert(feedback);
    }
  };

  const handleLoginClick = (event) => {
    event.preventDefault();

    onLoginClick();
  };

  return (
    <main className="px-20 md:px-40 lg:px-[300px] xl:px-[500px] 2xl:px-[600px] container mx-auto">
      <h1 className="font-bold text-2xl text-center mb-10">Register</h1>

      <form className="flex flex-col gap-2 mb-5" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input className="border-b-2 border-black" type="text" id="name" />

        <label htmlFor="birthdate">Birthdate</label>
        <input className="border-b-2 border-black" type="date" id="birthdate" />

        <label htmlFor="email">E-mail</label>
        <input className="border-b-2 border-black" type="text" id="email" />

        <label htmlFor="username">Username</label>
        <input className="border-b-2 border-black" type="text" id="username" />

        <label htmlFor="password">Password</label>
        <input
          className="border-b-2 border-black"
          type="password"
          id="password"
        />

        <button
          className="rounded-xl border-2 border-black px-3 self-end"
          type="submit"
        >
          Register
        </button>
      </form>

      <a
        className="underline block text-center"
        href="login.html"
        onClick={handleLoginClick}
      >
        Login
      </a>
    </main>
  );
}

export default Register;
