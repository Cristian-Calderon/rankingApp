// import React from 'react'
// import '../../styles/top.css'
// import {Link} from "react-router-dom"
// import imagen4 from '../../../images/Facebook_icon.svg.png';





// export const Worst = () => {
//   return (
//     <div>
//        <div>
//          <h2 className='h-1-top-apps'>Worst Apps</h2>
//        </div>
//        <p className='tap'>Tap each one for more details</p>
//        <p className='click'>Click each one for more details</p>
//        <div className='top-container'>
//            <div className='best-apps'>
//            <img src={imagen4} className="logo-twit" />
//            </div>
//            <div className='best-apps'></div>
//            <div className='best-apps'></div>
//            <div className='best-apps'></div>
//            <div className='best-apps'></div>
//            <div className='best-apps'></div>
//            <div className='best-apps'></div>
//            <div className='best-apps'></div>
//      </div>
//      <div className='btn-next-back'>
//      <Link to="/Worst2" className="now-join"><button className='next-top-apps'>Next</button></Link>
//      </div>
//     </div>
//   )
// }

// export default Worst

import {React , useEffect , useState} from 'react'
import axios from "axios";
import '../../styles/top.css'

function FilterWorse() {

    const client = axios.create({
        baseURL: "http://localhost:3000/posts" 
    });

    const [posts, setPosts] = useState([]);
    
      useEffect(() => {
           client.get('?_limit=100').then((response) => {
              setPosts(response.data);
           });
        }, []);
    
    const [searchTerm, setSearchTerm] = useState("");
    const handleChange = event => {
          setSearchTerm(event.target.value);
        };
    const results = !searchTerm
        ? posts
        : posts.filter(item  =>
            item.nombre.toLowerCase().includes(searchTerm.toLocaleLowerCase())
          );
    
   
        
    
      return (
        <div className="App">
          <div className='search'>
            <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleChange}
            />
         </div>

         <div className='top-container'>
                        {results.map((data) => {
                          
                           if(data.ranking.length > 0 && data.ranking.length < 6 ) {
                            
                               return  ( 
                                <div key={data.id} className='best-apps'>
                                <img src={data.logo} className="foto" />
                                <a href={`/companys/${data.id}`}>{data.nombre}</a><br />
                                <a>{data.ranking}</a>
                               </div>
                               )
                           }
                          })

                          }              
        </div>          
    
        </div>
      );
}
    
    export default FilterWorse;
    
