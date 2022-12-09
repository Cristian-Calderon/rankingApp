import {React , useEffect , useState} from 'react';
import axios from "axios";
import '../../style/top.css';
import {Link} from "react-router-dom";
import { Button } from '../../style/buttons.js';

function FilterMedium() {

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
          if(data.ranking.length === 6 ) {
            return ( 
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
        <div className='btn-next-back'>
          <Link to="/" className="now-join"><Button className='next-top-apps'>Back</Button></Link>
        </div>        
    </div>
  );
}
    
export default FilterMedium;