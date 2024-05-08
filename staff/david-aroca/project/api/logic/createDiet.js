// import { User, Exercise } from "../data";

// import { validate, errors } from "com";

// const { SystemError, MatchError } = errors

// function createDiet(userId, image, text) {
//     validate.id(userId, 'userId')
//     validate.url(image, 'image')
//     validate.text(text)

//     return User.findById(userId)
//         .catch(error => { throw new SystemError(error.message) })
//         .then(user => {
//             if (!user)
//                 throw new MatchError('user not found')

//             const diet = {
//                 author: user._id,
//                 title,
//                 image,
//                 // - video(string, optional)
//                 // - description(string, required)
//             }
//             return Diet.create(diet)
//                 .catch(error => { throw new SystemError(error.message) })
//         })
//         .then(diet => { })
// }

// export default createDiet
