import { useState, useEffect } from "react";
import {Link,useParams} from 'react-router-dom';

function CommentSection() {
  const token = localStorage.getItem('token');
  const [commentDetails, set_comment] = useState([]);
  const [content, set_content] = useState(''); // For new comments
  const [editMode, setEditMode] = useState(null); // To track which comment is being edited
  const [editContent, setEditContent] = useState(''); // For editing existing comment
  const Name_user = localStorage.getItem('Name');
   const Video_id_Num=useParams().id;
   console.log(Video_id_Num)
  // Fetch comments from backend
  useEffect(() => {
    fetch('https://youtube-project-py16.onrender.com/getComments')
      .then((response) => response.json())
      .then((data) => set_comment(data))
      .catch((error) => console.error("Error fetching comments:", error));
  }, [commentDetails]);

  // Add a new comment
  const handleclick = () => {
    if (!content.trim()) return;

    fetch('https://youtube-project-py16.onrender.com/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content, username: Name_user ,Video_id_Num}),
    })
      .then((response) => response.json())
      .then((newComment) => set_comment([newComment, ...commentDetails]))
      .catch((error) => console.error("Error adding comment:", error));

    set_content(''); // Reset new comment content
  };

  // Delete a comment
  const handleDelete = (id) => {
    fetch(`https://youtube-project-py16.onrender.com/delete/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          set_comment(commentDetails.filter((comment) => comment._id !== id));
        } else {
          console.error("Error deleting comment:", response.statusText);
        }
      })
      .catch((error) => console.error("Error deleting comment:", error));
  };

  // Update a comment
  const handleEdit = (id, newContent) => {
    fetch(`https://youtube-project-py16.onrender.com/edit/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content: newContent }),
    })
      .then((response) => response.json())
      .then((updatedComment) => {
        const updatedComments = commentDetails.map((comment) =>
          comment._id === id ? updatedComment : comment
        );
        set_comment(updatedComments);
        setEditMode(null); // Reset edit mode after saving
        setEditContent(''); // Reset edit content
      })
      .catch((error) => console.error("Error updating comment:", error));
  };

  return (
    <div className="max-w-4xl mx-auto p-4 mt-3 rounded-lg bg-[#212121] text-white">
      {/* Comment Input Section */}
      {token ? (
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <input
            type="text"
            placeholder="Add a comment..."
            value={content}
            onChange={(e) => set_content(e.target.value)} // New comment input
            className="p-3 border border-gray-600 rounded-md w-full bg-[#212121] text-white focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button
            onClick={handleclick}
            className="p-3 bg-[#ff0000] text-white rounded-md w-full sm:w-auto hover:bg-green-700 focus:outline-none "
          >
            Comment
          </button>
        </div>
      ) : (
        <div className="mb-6 text-center text-gray-400">
               <h1 className="  m-4 text-white font-bold ">Please <Link to='/SignIn'><span className="text-[#33f733] underline">Login</span> </Link>  in order to add comments</h1>
        </div>
      )}

      {/* Comments Section */}
      <div className="space-y-4">
        {commentDetails.map((comment,index) => (
          
          <div
          
            key={comment._id||index}
            className="bg-[#212121] border border-gray-600 p-4 rounded-lg flex flex-col gap-2"
          >
            {/* Comment Text */}
            {editMode === comment._id ? (
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  value={editContent} // Use editContent for editing
                  onChange={(e) => setEditContent(e.target.value)} // Update edit content
                  className="p-3 border border-gray-600 rounded-md w-full bg-[#212121] text-white focus:outline-none focus:ring-2 focus:ring-white"
                />
                <div className="flex gap-4 mt-2">
                  <button
                    onClick={() => handleEdit(comment._id, editContent)} // Save edited comment
                    className="p-2 bg-[#ff0000] text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => {
                      setEditMode(null); // Cancel editing
                      setEditContent(''); // Reset edit content
                    }}
                    className="p-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <>
                <p className="text-sm font-bold">{comment.content}</p>
                {/* User Info */}
                <div className="flex justify-between items-center text-xs text-gray-400">
                <p className=" text-white">Posted by: <span className="text-[#15ff00] font-bold">
                {comment.username ? comment.username.charAt(0).toUpperCase() + comment.username.slice(1) : 'Anonymous'} </span></p>
                  <p>2 hours ago</p>
                </div>
              </>
            )}

            {/* Action Buttons */}
            {comment.username === Name_user && !editMode && (
              <div className="flex gap-4 mt-2">
                <button
                  onClick={() => {
                    setEditMode(comment._id); // Enter edit mode
                    setEditContent(comment.content); // Pre-fill the edit content
                  }}
                  className="text-[#fffc37] font-bold hover:text-[#e4e146b8] text-xs"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(comment._id)}
                  className="text-[#ff0000] font-bold hover:text-red-500 text-xs"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommentSection;
