import {React , useEffect , useState} from 'react'
import axios from "axios";
import '../../styles/top.css'
import ComparationObject from './ComparationObject'



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
          <div className='search'>
            <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleChange}
            />
          </div>
          <ComparationObject products={results}></ComparationObject>
        </div>
      );
}
    
    export default InputSearch;
    
