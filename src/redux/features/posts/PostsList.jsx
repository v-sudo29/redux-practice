import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";

const PostsList = () => {
  const posts = useSelector(selectAllPosts)

  const renderedPosts = posts.map(post => {
    console.log(post)
    return (
      <article key={post.id}>
        <h4>{post.title}</h4>
        <p>{post.content.substring(0, 100)}</p>
        <p className='postCredit'>
          <PostAuthor userId={post.userId} />
        </p>
      </article>
    )
  })

  return (
    <section>
      <h1>Posts</h1>
      <div>{renderedPosts}</div>
    </section>
  )
}

export default PostsList