import {React , useEffect , useState} from 'react'
import axios from "axios";

function InputSearch() {

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
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleChange}
          />
    
                        {results.map((data) => (
                            <div key={data.id} className='best-apps'>
                                <a>{data.nombre}</a>
                                <img src={data.logo} alt="" />
                                <a>{data.ranking}</a>
                            </div>
            
                        ))}
                   
    
        </div>
      );
}
    
    export default InputSearch;
    