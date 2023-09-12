import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import Time from "./Time";
import ReactionButtons from "./ReactionButtons";

const PostsList = () => {
  const posts = useSelector(selectAllPosts)

  const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

  const renderedPosts = orderedPosts.map(post => {
    return (
      <article key={post.id}>
        <h4>{post.title}</h4>
        <p>{post.content.substring(0, 100)}</p>
        <p className='postCredit'>
          <PostAuthor userId={post.userId} />
          <Time timestamp={post.date} />
        </p>
        <ReactionButtons post={post}/>
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