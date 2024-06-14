import { errors, validate } from 'com'

const { MatchError, SystemError} = errors

function createPost(title, image, video, text) {
    validate.token(sessionStorage.token)
    validate.text(title, 'title')
    
    if (image) {
        if (video) throw new MatchError('image and video are both set')
            validate.url(image, 'image')
    }
    else validate.url(video, 'video')
    
    const payload = { title, text }
    
    if (image) payload.image = image
    else if (video) payload.video = video
    
    validate.text(text)
    return fetch(`${import.meta.env.VITE_API_URL}/posts`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${sessionStorage.token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
        .catch(error => { throw new SystemError(error.message) })
        .then(res => {
            if (res.status === 201)
                return

            return res.json()
                .catch(error => { throw new SystemError(error.message) })
                .then(body => {
                    const { error, message } = body

                    const constructor = errors[error]

                    throw new constructor(message)
                })
        })
}

export default createPost