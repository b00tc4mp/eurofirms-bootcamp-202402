function Post({ post }) {
  return (
    <>
      <article className="w-full">
        <h3 className="font-bold">{post.author.username}</h3>
        <img src={post.image} className="w-full" />
        <p>{post.text}</p>
        <time className="block text-right text-xs">{post.date}</time>
      </article>
    </>
  );
}

export default Post;
