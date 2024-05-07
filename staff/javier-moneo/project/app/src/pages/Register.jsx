import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import logic from '../logic';

function Register({ onUserRegistered, onLoginClick }) {
  const [editions, setEditions] = useState(null);
  const [searchers, setSearchers] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm({
    defaultValues: {
      edition: '',
    },
  });

  // console.log(errors);

  const onSubmit = handleSubmit((data) => {
    // console.log('data...');
    // console.log(data);
    // console.log(data.foto);

    // alert('enviando datos');

    // setValue('correo', ''); // lo ponemos a vacio para resetear

    try {
      logic
        .registerUser(
          data.username,
          data.birthdate,
          data.email,
          data.password,
          data.edition,
          data.searcher
        )
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
          else feedback = 'sorry, there was an error, please try again later';

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
      else feedback = 'sorry, there was an error, please try again later';

      alert(feedback);
    }

    //podemos ejecutar el reset tambien
    reset();
    // antes de enviar
    // fetch
  });

  useEffect(() => {
    logic
      .retrieveEditions()
      .then((editions) => {
        // console.log(editions);
        setEditions(editions);
      })
      .catch((error) => {
        console.error(error.message);

        let feedback = error.message;

        if (
          error instanceof TypeError ||
          error instanceof RangeError ||
          error instanceof ContentError
        )
          feedback = `${feedback}, please correct it`;
        else if (error instanceof MatchError)
          feedback = `${feedback}, please verify user`;
        else feedback = 'sorry, there was an error, please try again later';

        alert(feedback);
      });

    logic
      .retrieveSearchersActive()
      .then((searches) => {
        // console.log(searches);
        setSearchers(searches);
      })
      .catch((error) => {
        console.error(error.message);

        let feedback = error.message;

        if (
          error instanceof TypeError ||
          error instanceof RangeError ||
          error instanceof ContentError
        )
          feedback = `${feedback}, please correct it`;
        else if (error instanceof MatchError)
          feedback = `${feedback}, please verify user`;
        else feedback = 'sorry, there was an error, please try again later';

        alert(feedback);
      });
  }, []);

  const handleLoginClick = (event) => {
    event.preventDefault();

    onLoginClick();
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Register new account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={onSubmit}>
            {/* username */}
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Username
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  autoComplete="username"
                  {...register('username', {
                    required: { value: true, message: 'Username is required' },
                    minLength: {
                      value: 2,
                      message: 'The username must be at least 2 characters',
                    },
                    maxLength: {
                      value: 20,
                      message:
                        'The username must have a maximum of 20 characters',
                    },
                  })}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.username && (
                  <span className="text-red-500">
                    {errors.username.message}
                  </span>
                )}
              </div>
            </div>

            {/* email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  autoComplete="email"
                  {...register('email', {
                    required: { value: true, message: 'Email is required' },
                    pattern: {
                      value:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: 'Email no valid',
                    },
                  })}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.email && (
                  <span className="text-red-500">{errors.email.message}</span>
                )}
              </div>
            </div>

            {/* password */}
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  type="password"
                  autoComplete="current-password"
                  {...register('password', {
                    required: { value: true, message: 'Password is required' },
                    minLength: {
                      value: 6,
                      message: 'Password must be at least 6 characters',
                    },
                  })}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.password && (
                  <span className="text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </div>
            </div>

            {/* confirmpassword */}
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Confirm password
                </label>
              </div>
              <div className="mt-2">
                <input
                  type="password"
                  {...register('confirmPassword', {
                    required: {
                      value: true,
                      message: 'Confirm password is required',
                    },
                    validate: (value) =>
                      value === watch('password') || 'Passwords do not match',
                  })}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.confirmPassword && (
                  <span className="text-red-500">
                    {errors.confirmPassword.message}
                  </span>
                )}
              </div>
            </div>

            {/* birthdate */}
            <div>
              <label
                htmlFor="birthdate"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Birthdate
              </label>
              <div className="mt-2">
                <input
                  type="date"
                  {...register('birthdate', {
                    required: {
                      value: true,
                      message: 'Birthdate is required',
                    },
                    validate: (value) => {
                      const fechaNacimiento = new Date(value);
                      const fechaActual = new Date();

                      const edad =
                        fechaActual.getFullYear() -
                        fechaNacimiento.getFullYear();

                      return edad >= 18 || 'You must be of legal age';
                    },
                  })}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.birthdate && (
                  <span className="text-red-500">
                    {errors.birthdate.message}
                  </span>
                )}
              </div>
            </div>

            {/* edition */}
            <div>
              <label
                htmlFor="edition"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Edition
              </label>
              <div className="mt-2">
                <select
                  {...register('edition', {
                    required: {
                      value: true,
                      message: 'Edition is required',
                    },
                  })}
                  className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select Option
                  </option>
                  {editions?.map(({ code, name }) => (
                    <option key={code} value={code}>
                      {name}
                    </option>
                  ))}
                </select>
                {errors.edition && (
                  <span className="text-red-500">{errors.edition.message}</span>
                )}
              </div>
            </div>

            {/* searcher */}
            <div>
              <label
                htmlFor="searcher"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Searcher
              </label>
              <div className="mt-2">
                <select
                  {...register('searcher', {
                    required: {
                      value: true,
                      message: 'Searcher is required',
                    },
                  })}
                  className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select Option
                  </option>
                  {searchers?.map(({ name, displayName }) => (
                    <option key={name} value={name}>
                      {displayName}
                    </option>
                  ))}
                </select>
                {errors.searcher && (
                  <span className="text-red-500">
                    {errors.searcher.message}
                  </span>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>

            {/* <pre>{JSON.stringify(watch(), null, 2)}</pre> */}
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Are you member?{' '}
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              onClick={handleLoginClick}
            >
              Go to login
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Register;
