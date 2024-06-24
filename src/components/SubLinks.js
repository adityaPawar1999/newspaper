import {Categories} from '../API/NewsData'
const SubLinks = () =>{
   
    return(
        <div className=" py-[50px]">
        <br/>
      <h1 className='text-center text-4xl font-serif font-extrabold'>THE NEWSPAPER</h1>
      <br/>
        <hr/>
        <ul className="flex gap-4 text-center justify-center flex-wrap py-3  ">
            {
                Categories .map((val,index)=>{
                    return(<>
                        <li className='text-gray-600 cursor-pointer hover:text-black hoover:font-extrabold'>{val.title}</li>
                    </>)
                })
            }
    


        </ul>
        <hr/>
        </div>
    )
}
export default SubLinks;