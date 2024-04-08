import logic from "../logic";

function CreatePost({ onPostCreated, onCancelClick }) {
  const handleCancelClick = () => onCancelClick();

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    const image = form.image.value;
    const text = form.text.value;

    try {
      logic.createPost(image, text);

      onPostCreated();
    } catch (error) {
      console.error(error);

      alert(error.message);
    }
  };

  return (
    <>
      <section className="create-post-section">
        <h2>CREATE POST</h2>
        <form id="create-post-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="image" id="image" />

          <input type="text" placeholder="text" id="text" />

          <button type="submit">create</button>
        </form>

        <button onClick={handleCancelClick}>cancel</button>
      </section>
    </>
  );
}

export default CreatePost;
