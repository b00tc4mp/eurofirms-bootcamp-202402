import { useEffect, useState } from 'react';
import logic from '../logic';
import Post from './Post';

function Posts({ refreshStamp }) {
  console.log('refreshStamp', refreshStamp);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    refreshPosts();
  }, [refreshStamp]);

  const refreshPosts = () => {
    try {
      logic
        .retrievePosts()
        .then((posts) => setPosts(posts))
        .catch((error) => {
          console.error(error);

          alert(error.message);
        });
    } catch (error) {
      console.error(error);

      alert(error.message);
    }
  };

  const handleDeletePostClick = (postId) => {
    // console.log('deleting... ', postId);
    const confirmar = confirm('Estas seguro de eliminar este post?');
    if (!confirmar) return;
    try {
      logic
        .deletePost(postId)
        .then(() => refreshPosts())
        .catch((error) => {
          console.error(error);

          alert(error.message);
        });
    } catch (error) {
      console.error(error);

      alert(error.message);
    }
  };

  return (
    <>
      <section className="flex flex-col gap-6 px-2 py-14">
        {posts.map((post) => (
          <Post
            key={post.id}
            post={post}
            onDeletePostClick={handleDeletePostClick}
          />
        ))}
      </section>
    </>
  );
}

export default Posts;
