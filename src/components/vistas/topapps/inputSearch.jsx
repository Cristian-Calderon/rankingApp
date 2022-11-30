import React from 'react'
import empresasJson from '../../../empresas.json'
import '../../styles/top.css'

const SearchBar = () => {

    const [searchTerm, setSearchTerm] = React.useState("");
    const handleChange = event => {
      setSearchTerm(event.target.value);
    };
    const results = !searchTerm
    ? empresasJson
    : empresasJson.filter(item =>
        item.Column1.toLowerCase().includes(searchTerm.toLocaleLowerCase())
      );


return <div>
<div className='search'>
<input 
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
</div>
  <div className='top-container'>
            {results.map((item, index) => (
                <div key={item.id} className='best-apps'>
                    <img src={item.Column3} className="foto"/>
                    {item.Column1}<br/>
                    <span>{item.Column2}</span>
                    </div>
            ))}
  </div>


</div>


};

export default SearchBar;