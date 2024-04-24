import logic from "../logic";
import Form from "./Form"
import Button from "./Button"
import Input from "./Input"

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
      <section className=" mb-12 fixed bottom-0 left-0 bg-white w-full pb-2 border-t-2 border-black flex flex-col box-border px-2">
        <h2 className="font-bold text-xl py-2">CREATE POST</h2>
        <Form id="create-post-form" onSubmit={handleSubmit}>
          <Input type="text" placeholder="image" id="image" />

          <Input type="text" placeholder="text" id="text" />

          <Button type="submit">create</Button>
        </Form>

        <Button onClick={handleCancelClick}>cancel</Button>
      </section>
    </>
  );
}

export default CreatePost;
