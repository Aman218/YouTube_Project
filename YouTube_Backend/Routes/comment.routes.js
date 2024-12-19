import { addComment, getComment,deleteComment, editComment } from "../Controller/comment.controller.js"
export function commentRoutes(app){
      app.post('/add',(req,res)=>{
        addComment(req,res)
      })
      app.get('/getComments',(req,res)=>{
        getComment(req,res)
      });
      app.delete('/delete/:id',(req,res)=>{
        deleteComment(req,res)
      })
      app.put('/edit/:id',(req,res)=>{
        editComment(req,res)
      })
}

