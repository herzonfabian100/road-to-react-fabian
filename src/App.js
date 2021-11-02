
import * as React from 'react';

function App() {

  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];
  const handleSearch = (event) => {
    console.log(event.target.value);
  }

  return (
    <div>
      <h1> My Hacker Story</h1>

      <Search onSearch={handleSearch} />

      <hr />
      <List list={stories} />


    </div >

  );
}

const Search = (props) => {
  const [searchTerm, setSearchTerm] = React.useState('');
  console.log(`Rendering Search with searchTerm ${searchTerm}`);

  const handleChange = (event) => {
    console.log(`Before Setting searchTerm: ${searchTerm}`);
    setSearchTerm(event.target.value)
    console.log(event.target.value);
    console.log(`After Setting searchTerm: ${searchTerm}`);
    props.onSearch(event);
  }
  const handleMouseOver = (event) => {
    console.log(event);
  }

  return (
    <div>
      <label htmlFor="sarch">Search:</label>
      <input id="search" type="text" onChange={handleChange} onMouseOver={handleMouseOver} />
      <p>
        Searching for <strong>{searchTerm}</strong>
      </p>
    </div>
  );
}
const List = (props) => {
  return (

    <ul>
      {props.list.map(function (item) {
        return (
          <Item item={item} />
        );
      })}

    </ul>

  );
}
const Item = (props) => {
  const item = props.item;
  return (
    <li key={item.objectID}>
      <span>
        <a href={item.url}>{props.item.title}</a>
      </span>
      <span>{item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>
    </li>
  );
}

export default App;