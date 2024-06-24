import { useState } from "react"
import NewsData from "../API/NewsData"
const Demo = () =>{
    const[category,setCategory] = useState('nothing here')


    const clicked = (cat) =>{
        setCategory(cat)
        
    }
    return(<>
    <p>{category}</p>
    <p onClick={()=>{clicked('world')}} >world</p>
    <p onClick={()=>{clicked('sport')}} >sport</p>
    <p></p>
    {
        
        NewsData.filter(({category})=>{
            if(category === NewsData.categories){
                return category;
            }
        }).map((val,index)=>{
            return(
                <>
                <p>{val.title}</p>
                </>
            )
        })
    }
    </>)
}
export default Demo;