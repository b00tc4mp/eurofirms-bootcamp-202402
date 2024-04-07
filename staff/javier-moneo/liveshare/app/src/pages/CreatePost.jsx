import logic from '../logic';

function CreatePost(props) {
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    const image = form.image.value;
    const text = form.text.value;

    try {
      logic.createPost(image, text);

      props.onPostCreated();
    } catch (error) {
      console.error(error);

      alert(error.message);
    }
  };

  return (
    <>
      <section
        className="container container--border-top"
        id="create-post-section"
      >
        <h2>Create Post</h2>

        <form className="form" id="create-post-form" onSubmit={handleSubmit}>
          <label htmlFor="image">Image</label>
          <input className="input" type="text" id="image" />

          <label htmlFor="text">Text</label>
          <input className="input" type="text" id="text" />

          <button className="button button--right" type="submit">
            Create
          </button>
        </form>

        <button
          className="button button--center"
          id="create-post-cancel-button"
        >
          Cancel
        </button>
      </section>
    </>
  );
}
export default CreatePost;
