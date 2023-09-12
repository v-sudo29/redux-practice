import Counter from './redux/features/counter/Counter'
import PostsList from './redux/features/posts/PostsList'
import NewPostForm from './redux/features/posts/NewPostForm'
import './App.css'

function App() {
  return (
    <div>
      <Counter/>
      <PostsList/>
      <NewPostForm/>
    </div>
  )
}

export default App
