import NewsData from '../API/NewsData'
const LatestArticle =() =>{
    return(<>
    <p className="text-lg font-extrabold">Latest Articles</p>
    <hr/>
    <ol className='list-disc'>
        <br/>
        {
            NewsData.slice(2,9).map((val,index)=>{
                return(<>
                    
                    <li className="py-2 text-sm font-thin hover:shadow-md p-1" key={index}>{val.title} <span className='bg-gray-800 text-white text-[10px] rounded-lg py-[1px] px-1'>{val.category}</span></li>
                
                </>)
            })
        }
    </ol>
     <div className='card mt-5'>
          {
            NewsData.slice(3,4).map((val,index)=>{
              return(<>
          <div key={index} className=''>
            <img src={val.image} alt="Story 1" className="mb-2 h-[200px] w-[100%] cover bg-gray-300 filter grayscale" />
            <h3 className="text-sm font-bold ">{val.title}</h3>
          </div>
          <br/>
          <hr/>
          <br/>
              </>)
            })
          }
        </div>

<ul className="flex gap-4 text-center justify-center flex-wrap w-[100%]  py-3 ">
    <li>World</li>
    <li>Politics</li>
    <li>Technology</li>
    <li>Science</li>
    <li>Health</li>
    <li>Sports</li>
    <li>Entertainment</li> 
    <li>Travel</li>
    <li>Opinion</li>
    <li>Education</li>
    <li>Environment</li>
    <li>Fashion</li>
    <li>Food</li>
    <li>Business</li>


        </ul>
        

    </>)
}
export default LatestArticle;