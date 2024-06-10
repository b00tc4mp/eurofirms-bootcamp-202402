import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import logic from '../logic';
import { errors } from '../com';

const { ContentError, MatchError, DuplicityError, RangeError, TypeError } =
  errors;

export default function EditionsList() {
  const { urlEditionCode } = useParams();
  const [editions, setEditions] = useState([]);

  useEffect(() => {
    // console.log(editionCode);
    logic
      .retrieveEditions()
      .then((editionsRetrieved) => {
        // console.log(editionsRetrieved);
        setEditions(editionsRetrieved);
      })
      .catch((error) => {
        errorHandler(error);
      });
  }, []);

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
    <>
      <div>
        <h1 className="text-4xl font-bold text-center dark:text-white">
          Select Edition
        </h1>
        {editions && (
          <>
            {editions.map((edition) => (
              <Link
                key={edition.code}
                to={`/${edition.code}`}
                className="w-full block text-center mt-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Edition - {edition.name}
              </Link>
            ))}
          </>
        )}
      </div>
    </>
  );
}
