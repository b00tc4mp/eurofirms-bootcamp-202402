function Post({ post }) {
  console.debug("Post render");

  return (
    <>
      <article className="w-full">
        <h3>{post.author.username}</h3>
        <img className="w-[90%] px-2" src={`${post.image}`}></img>
        <p>
          {post.text}
          <br />
          <sup>{post.date}</sup>
        </p>
      </article>
      ;
    </>
  );
}
export default Post;
