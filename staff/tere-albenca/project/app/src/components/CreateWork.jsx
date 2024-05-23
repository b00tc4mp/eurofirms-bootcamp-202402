import logic from '../logic'
import Form from './Form'
import Button from './Button'
import Input from './Input'
import { errors } from 'com'
import Htwo from './Htwo'

const { MatchError } = errors

function CreateWork({ onCancelClick, onWorkCreated }) {
  const handleCancelClick = () => onCancelClick()

  const handleSubmit = event => {
    event.preventDefault()

    const form = event.target
    const title = form.title.value
    const image = form.image.value
    const text = form.text.value

    try {
      logic.createWork(title, image, text)
        .then(() => onWorkCreated())
        .catch(error => {
          console.error(error)

          let feedback = error.message

          if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
            feedback = `${feedback},please correct it`

          else if (error instanceof MatchError)
            feedback = `${feedback}, use valid data`

          else
            feedback = 'sorry, there was an error, please try again later'

          alert(feedback)
        })


    } catch (error) {
      console.error(error)

      let feedback = error.message

      if (error instanceof TypeError || error instanceof RangeError || error instanceof ContentError)
        feedback = `${feedback},please correct it`
      else
        feedback = 'sorry, there was an error, please try again later'

      alert(feedback)
    }

  }

  return (
    <>
      <section className='mb-12 fixed bottom-0 left-0 bg-white w-full pb-2 border-t-2 border-black flex flex-col box-border px-2'>
        <Htwo className='font-bold text-xl py-2'>CREATE WORK</Htwo>
        <Form id='create-post-form' onSubmit={handleSubmit}>
          <Input type='text' placeholder='title' id='title' />
          <Input type='text' placeholder='image' id='image' />

          <Input type='text' placeholder='text' id='text' />

          <Button type='submit'>create</Button>
        </Form>

        <Button onClick={handleCancelClick}>cancel</Button>
      </section>
    </>
  );
}

export default CreateWork