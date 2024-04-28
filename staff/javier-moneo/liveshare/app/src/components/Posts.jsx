import { useState, useEffect } from 'react';
import Post from './Post';
import logic from '../logic';
import errors from '../logic/errors';

const { ContentError, TypeError, RangeError, MatchError } = errors;

function Posts({ refreshStamp }) {
  console.log('refreshStamp', refreshStamp);

  const [posts, setPosts] = useState([]);

  const refreshPosts = () => {
    try {
      logic
        .retrievePosts()
        .then((posts) => setPosts(posts))
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

  useEffect(() => {
    refreshPosts();
  }, [refreshStamp]);

  const handlePostRemoved = () => refreshPosts();

  const handlePostUpdated = () => refreshPosts();

  console.log('Posts render');

  return (
    <section className="flex flex-col gap-6 px-2 py-14">
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          onPostRemoved={handlePostRemoved}
          onPostModified={handlePostUpdated}
        />
      ))}
    </section>
  );
}

export default Posts;
