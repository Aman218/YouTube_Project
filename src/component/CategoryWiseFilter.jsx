import { dataInfo } from "../utils/dummyData"
import { genres } from "../utils/genrecollection";
function CategoryWiseFilter(props){
 
function handleClick(e){
   console.log('Genre',e.target.innerText)
   if(e.target.innerText.toLowerCase()=='all'){
    props.SetDetails(dataInfo)
    return;
   }
   let new_filterArr=dataInfo.filter((data)=>{
    if(data.genre.toLowerCase()==e.target.innerText.toLowerCase()){
        return true;
    }
   });
   if(new_filterArr.length>0){
    props.SetDetails(new_filterArr)
   }
}
    return (
        <>
           {
            genres.map((genre,index)=>{
                return (
                    <button key={index} onClick={(e)=>{handleClick(e)}} className="text-white py-1 px-5 text-[0.9rem] font-semibold hover:bg-[#464644] rounded-md mr-3 bg-[#212121]">{genre}</button>
                    
                )
            })
           }
        </>
    )
}
export default CategoryWiseFilter;