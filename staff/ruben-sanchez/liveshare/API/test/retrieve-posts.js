fetch("http://localhost:8080/posts", {
  method: "GET",
  headers: { authorization: "6615534652fc8c38c116c9bf" },
  
})
  .then((res) => console.log(res))
  .then((userId) => console.log(posts))
  .catch((error) => console.error(error));
