import { useState } from "react";
import { Link } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import MenuIcon from '@mui/icons-material/Menu';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import './CommentSection.css'

function CommentSection() {

  const token = localStorage.getItem('token');

  const [commentDetails, set_comment] = useState([]);
  const [content, set_content] = useState('');
  const Name_user = localStorage.getItem('Name');
  const [flag, setFlag] = useState(false);
  function handleChange(e) {
    set_content(e.target.value);
  }
  function handleclick() {
    if (content == '') {
      return;
    }
    set_comment([...commentDetails, content])
    set_content('')
  }

  function handleEdit(e) {
    let parent = e.target.closest('#parent-container');
    let child = parent.querySelector('#content');
    set_content(child.innerText);
    parent.remove()

  }
  function handleDelete(e) {
    e.target.closest('#parent-container').remove();

  }
  return (
    <>

      {
        token ?
          <>
            <div className="border-b border-white m-4">
              <input onChange={handleChange} value={content} type="text" placeholder="Add Comment" className="border-none outline-none w-[100%] text-white pb-2 bg-[#0f0f0f] " />
            </div>
            <div className="m-4 text-end">
              <button className="text-white font-bold bg-[#ff0000] px-4 py-1 rounded-lg hover:bg-white hover:text-[#ff0000]" onClick={handleclick}>Add</button>
            </div>

            {
              commentDetails.length > 0 ?
                (
                  commentDetails.map((map) => {
                    return (
                      <div id='parent-container' className="border-b border-[#5e5c5c75] mb-3 p-2 text-white">
                      <div  className="  flex w-[100%] items-center  text-white relative ">
                        <div>
                          <div className="p-1 border rounded-full">
                            <PersonIcon />
                          </div>
                        </div>
                        <div className="ml-2 flex flex-col">
                          <div className="flex justify-between w-[100%]">
                            <span id='name-sec' className="font-bold text-[#37ff00]">
                              @{Name_user.slice(0, 1).toUpperCase() + Name_user.slice(1)}
                            </span>
                            <div id='btn' className="absolute right-0 cursor-pointer flex items-center bg-[#212121] justify-center">
                              <div onClick={handleEdit} className="flex hover:bg-[#7a7878] items-center p-2">
                                <BorderColorIcon id='edit_btn' className="text-[#ff0000]" />
                                <button>Edit</button>
                              </div>

                              <div onClick={handleDelete} className="hover:bg-[#7a7878] p-2 flex items-center">
                                <DeleteIcon id='delete-btn' className="text-[#ff0000]" />
                                <button>Delete</button>
                              </div>
                            </div>
                          </div>

                     
                        </div>
                      



                      </div>
                      <div className="ml-11 mt-[-0.5rem]">
                            <span id="content" className="inline-block w-[78%] text-[0.8rem]  ">
                              {map}
                            </span>
                          </div>
                      </div>
                    )
                  })
                ) : null
            }


          </> :
          <h1 className="  m-4 text-[#ff0021] font-bold ">Please <Link to='/SignIn'><span className="text-white underline">Login</span> </Link>  in order to add comments</h1>
      }
    </>
  )
}
export default CommentSection