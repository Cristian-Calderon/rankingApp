

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
                                <a className='nameApp' href={`/companys/${data.id}`}>{data.nombre}</a><br />
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
    
