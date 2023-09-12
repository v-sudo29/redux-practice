import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addPost } from "./postsSlice"
import { selectAllUsers } from "../users/usersSlice"

const NewPostForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [userId, setUserId] = useState('')

  const dispatch = useDispatch()
  const users = useSelector(selectAllUsers)

  const handleTitleChange = (e) => setTitle(e.target.value)
  const handleContentChange = (e) => setContent(e.target.value)
  const handleAuthorChange = (e) => setUserId(e.target.value)
  
  const handleSavePost = () => {
    if (title.length > 0 && content.length > 0) {    
      dispatch(addPost(title, content, userId))
      setTitle('')
      setContent('')
    }
  }

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

  const usersOptions = users.map(user => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ))

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id='postTitle'
          name='postTitle'
          value={title}
          onChange={handleTitleChange}
        />
        <label htmlFor='postAuthor'>Author:</label>
        <select onChange={handleAuthorChange} name="postAuthor" id="postAuthor">
          <option value=''></option>
          {usersOptions}
        </select>
        <label htmlFor="content">Content:</label>
        <textarea
          id='content'
          name='conte'
          value={content}
          onChange={handleContentChange}
        />
        <button
          type='button'
          onClick={handleSavePost}
          disabled={!canSave}
        >
          Save Post
        </button>
      </form>
    </section>
  )
}

export default NewPostForm