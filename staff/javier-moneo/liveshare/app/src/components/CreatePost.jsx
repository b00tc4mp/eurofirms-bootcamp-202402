import logic from '../logic';
import errors from '../logic/errors';

const { ContentError, TypeError, RangeError, MatchError } = errors;

function CreatePost({ onCancelClick, onPostCreated }) {
  const handleCancelClick = () => onCancelClick();

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    const image = form.image.value;
    const text = form.text.value;

    try {
      logic
        .createPost(image, text)
        .then(() => onPostCreated())
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
            feedback = `${feedback}, this user not exist`;
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
  };

  return (
    <>
      <section className="mb-[50px] cmb-12 fixed bottom-0 left-0 bg-white w-full pb-2 border-t-2 border-black flex flex-col box-border px-2">
        <h2 className="font-bold text-xl py-2">Create Post</h2>

        <form className="flex flex-col gap-2 mb-5" onSubmit={handleSubmit}>
          <label htmlFor="image">Image</label>
          <input className="border-b-2 border-black" type="text" id="image" />

          <label htmlFor="text">Text</label>
          <input className="border-b-2 border-black" type="text" id="text" />

          <button
            className="rounded-xl border-2 border-black px-3 self-end"
            type="submit"
          >
            Create
          </button>
        </form>

        <button
          className="rounded-xl border-2 border-slate-300 mx-auto px-3"
          onClick={handleCancelClick}
        >
          Cancel
        </button>
      </section>
    </>
  );
}
export default CreatePost;
