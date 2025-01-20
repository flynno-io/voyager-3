export async function fetchPostById(id: number) {
  console.log("param id", id);
  try {
    const res = await fetch("http://localhost:3000/api/posts", {
      cache: "no-store", // Adjust caching if necessary
    });
    const posts = await res.json(); // returns an array of objects
    const post = posts.find((post) => post.id === id);
    return post;
  } catch (error) {
    console.error(error);
  }
}
