import { Post, User} from "../data/index.js"
import { validate, errors } from "com"

const { SystemError, MatchError } = errors;

function updatePost(userId, postId, text){

    validate.id(userId, "userId");
    validate.id(postId, "postId");
    validate.text(text);

    return User.findById(userId)
        .catch(error => { throw new SystemError(error.message) })
        .then(user => {
            if (!user)
                throw new MatchError('user not found')

            return Post.findById(postId)
                .catch(error => { throw new SystemError(error.message) })
        })
        .then(post => {
            if (!post)
                throw new MatchError('post not found')

            if (post.author.toString() !== userId)
                throw new MatchError('post does not belong user')

            post.text = text

            return post.save()
                .catch(error => { throw new SystemError(error.message) })
        })
        .then(result => { })
}

export default updatePost;