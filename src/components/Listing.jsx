import React, { useEffect, useState } from 'react'



export  function Listing() {

    const [lists, setLists] = useState([]);
    const [searchMovie, setsearchMovie] = useState("")
    const[type, setType] = useState("movie")
    const[year, setYear] = useState("2024")
    

    const [noMatch, setNoMatch] = useState(false);

    useEffect(()=> {

        if(searchMovie || type || year){

        
        fetch(`https://www.omdbapi.com/?apikey=7d155e4&t=${searchMovie}&type=${type}&y=${year}`)
        
        .then((res)=> res.json() )
        .then((data)=> {

            if (data.Response === "False") {
                
                setNoMatch(true);
                setLists([]);

              } else {
                
                setNoMatch(false);
                setLists([data]);
                
              }

            
        })
            
        }
        
    },[searchMovie, type, year])

   

  return (
    <>

   

    <div className='flex flex-col gap-[24px] w-full'>

        

        


        <div className='flex flex-col gap-[32px] px-[64px] py-[16px] '>

        {/* Search */}

        <div className='flex gap-[24px]'>

            <input 
            type="text" 
            placeholder='Search MovieDB'
            className=' flex  text-secondary text-[14px] leading-[100%] px-[16px] py-[12px] border border-primary rounded-[4px] '
            value={searchMovie}
            onChange={(e)=> setsearchMovie(e.target.value)} />

        <div className='flex items-center gap-[8px]'>
        <label className='text-secondary'> Type: </label>

        <select
        value={type}
        onChange={(e)=> setType(e.target.value)}
        className='px-[12px] py-[8px] text-secondary border border-primary rounded-[4px] focus:outline-none '
        >
            <option value="movie">Movie</option>
            <option value="series">Series</option>
            <option value="episode">Episode</option>
                
        </select>

        
     </div>

     <div className='flex items-center gap-[8px]'>
        <label className='text-secondary'> Year of release: </label>

        <select
        value={year}
        onChange={(e)=> setYear(e.target.value)}
        className='px-[12px] py-[8px] text-secondary border border-primary rounded-[4px] focus:outline-none '
        >
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
            <option value="2014">2014</option>
            <option value="2013">2013</option>
            <option value="2012">2012</option>
            <option value="2011">2011</option>
            <option value="2010">2010</option>
            <option value="2009">2009</option>
            <option value="2008">2008</option>
            <option value="2007">2007</option>
            <option value="2006">2006</option>
            <option value="2005">2005</option>
            <option value="2004">2004</option>
            <option value="2003">2003</option>
            <option value="2002">2002</option>
            <option value="2001">2001</option>
            <option value="2000">2000</option>
           

            

            
                
        </select>

        
     </div>

           

        </div>
        

        

        <p 
        className='border-l-[8px] border-brand-color px-[12px] text-primary text-[40px] font-[600]'>
            {type.toUpperCase()}
        </p>

        {/* all listings */}
        <div className='flex flex-col'>

            { noMatch ? 
            (<p className='text-secondary text-[18px]'> No Match Found</p>) :

            (lists.map((m, index)=>{

                return(

                 <div key={index} className='flex flex-col gap-[24px]'>

                    {/* // movie list */}
                    <div 
                
                className='flex gap-[12px] py-[12px] border-b border-primary items-center'>

                {/* image part */}
                <img 
                src= {m.Poster}
                className='flex flex-shrink-0 w-[64px] rounded-[8px]' />

                {/* text part */}
                <div className='flex flex-col gap-[6px]'>
                    <p className='text-primary text-[18px] font-[700]'>{m.Title}</p>
                    <p className='text-secondary text-[14px]'>{m.Released}</p>
                    <div className='flex gap-[8px]'>

                        <div className='flex gap-[2px] items-center'>
                            <img src="/assets/star.png" className='w-[14px]'  />
                            <p className='text-secondary text-[14px]'>{m.imdbRating}</p>
                        </div>

                        <p className='text-secondary text-[14px]'>{m.Actors}</p>

                    </div>
                    
                </div>
                    </div>


                    {/* more details */}
                     <p 
                    className='border-l-[8px] border-brand-color px-[12px] text-primary text-[40px] font-[600]'>
                    More details
                     </p>

                     <div className='flex flex-col gap-[16px] p-[8px]'>
                        <p className='text-primary text-[16px]'>Year: {m.Year}</p>
                        <p className='text-primary text-[16px]'>Runtime: {m.Runtime}</p>
                        <p className='text-primary text-[16px]'>Genre: {m.Genre}</p>
                        <p className='text-primary text-[16px]'>Director: {m.Director}</p>
                        <p className='text-primary text-[16px]'>Writer: {m.Writer}</p>
                        <p className='text-primary text-[16px]'>Language: {m.Language}</p>
                        <p className='text-primary text-[16px]'>Country: {m.Country}</p>
                        <p className='text-primary text-[16px]'>Awards: {m.Awards}</p>
                        <p className='text-primary text-[16px]'>IMDM votes: {m.imdbVotes}</p>

        </div>

                    

                    </div>

                
                    
                );
                

            }))
            
            }

            

            

        </div>

       

    </div>



    </div>

    

   
    </>
  )
}




// {/* first list */}
// <div className='flex gap-[12px] py-[12px] border-b border-primary'>

// {/* image part */}
// <img 
// src="https://www.hubspot.com/hubfs/Google%20Drive%20Integration/Untitled%20document-Aug-24-2023-08-02-14-0205-PM.jpeg"
// className='flex flex-shrink-0 w-[64px] rounded-[8px]' />

// {/* text part */}
// <div className='flex flex-col gap-[6px]'>
//     <p className='text-primary text-[16px] font-[600]'>Weird Science</p>
//     <p className='text-secondary text-[14px]'>1985</p>
//     <p className='text-secondary text-[14px]'>Anthony Michael Hall, Ilan Mitchell-Smith</p>
// </div>
// </div>
