import { useOutletContext } from "react-router-dom";
import './Shimmer.css';
function Shimmer(){
    let arr=new Array(20).fill(0);
    console.log(arr)
    const { flag, titleName } = useOutletContext();
    return (
        <>
         <div id={`${flag?'grid':'grid-width'}`}>
           {arr.map((data,index)=>{
             return (
                <div key={index} className="animation w-[100%] h-[200px] rounded-lg bg-[#212121] border border-black ">
                     
                 </div>
             )
           })}
           </div>
        </>
    )
}
export default Shimmer;