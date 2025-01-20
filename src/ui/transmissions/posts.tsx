import PostCard from "@/ui/transmissions/post-card";

export default async function Posts() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store", // Adjust caching if necessary
  });
  const posts = await res.json();

  function renderPosts() {
    return posts.map((post) => {
      return (
        <PostCard
          key={post.id}
          id={post.id}
          title={post.title}
          description={post.description}
          number={post.number}
        />
      );
    });
  }

  return <div>{renderPosts()}</div>;
}
