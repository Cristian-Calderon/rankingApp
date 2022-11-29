import React from 'react'
import empresasJson from '../../../empresas.json'

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

<input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />

  <ul>
            {results.map((item, index) => (
                <li key={item.id} className='best-apps'>
                    {item.Column1}
                    <img src={item.Column3} alt="2"/>
                    <span>{item.Column2}</span>
                    </li>
            ))}
  </ul>


</div>


};

export default SearchBar;