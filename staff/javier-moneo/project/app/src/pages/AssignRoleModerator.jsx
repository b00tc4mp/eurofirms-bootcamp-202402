import { useEffect, useState } from 'react';
import logic from '../logic';
import { errors } from '../com';
import { SuccessMessage } from '../components/SuccessMessage';
import { useForm } from 'react-hook-form';

const { ContentError, MatchError, DuplicityError, RangeError, TypeError } =
  errors;

export default function AssignRoleModerator() {
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm({
    // defaultValues: {
    //   edition: '',
    // },
  });

  const onSubmit = handleSubmit((data) => {
    // console.log('data...');
    // console.log(data);
    // console.log(data.foto);

    // alert('enviando datos');

    // setValue('correo', ''); // lo ponemos a vacio para resetear

    try {
      logic
        .assignRoleModeratorByEmail(data.email)
        .then(() => {
          setSuccess(true);
        })
        .catch((error) => {
          errorHandler(error);
        });
    } catch (error) {
      errorHandler(error);
    }

    //podemos ejecutar el reset tambien
    reset();
    // antes de enviar
    // fetch
  });

  const handleCancelClick = (event) => {
    console.log('cancel...');
    setValue('email', ''); // lo ponemos a vacio para resetear
    setSuccess(false);
  };

  const errorHandler = (error) => {
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
  };

  return (
    <div className="bg-white p-1 my-1  rounded shadow">
      <h1 className="text-4xl font-bold text-center dark:text-white">
        Assign role moderator by email
      </h1>
      <div>
        <form className="space-y-6" onSubmit={onSubmit}>
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

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button
              onClick={handleCancelClick}
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Accept
            </button>
          </div>
        </form>
      </div>
      {success && (
        <div className="mt-2">
          <SuccessMessage
            initialMessage={'Role moderator assigned successfully'}
          />
        </div>
      )}
    </div>
  );
}
