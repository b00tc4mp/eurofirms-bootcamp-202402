import { errors, validate } from 'com'

const { SystemError } = errors

function createExercise(title, image, video, description) {
    validate.token(sessionStorage.token)
    validate.text(title, 'title')
    validate.url(image, 'image')
    validate.video(video, 'video')
    validate.description(description, 'description')

    return fetch(`${import.meta.env.VITE_API_URL}/exercises`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${sessionStorage.token}`,
            'Content-type': 'application/json'
        },
        body: JSON.stringify({ title, image, video, description })
    })
        .catch(error => { throw new SystemError(error.message) })
        .then(res => {
            if (res.status === 201)
                return;

            return res.json()
                .catch(error => { throw new SystemError(error.message) })
                .then(body => {
                    const { error, message } = body;

                    const constructor = errors[error];

                    throw new constructor(message);
                });
        });
}

export default createExercise;
