import React, { useState } from "react";
import './App.css';

const App = () => {

  const list = [
    "Banana",
    "Apple",
    "Orange",
    "Grapes",
    "Pineapple",
    "Watermelon",
    "Mango",
    "Strawberry",
    "Papaya",
    "Peach",
    "Pear",
    "Cherry",
    "Kiwi",
    "Lemon",
  ];

  const [filterList, setFilterList] = useState(list);
  const [word, setWord] = useState("");

  const handleSearch = (e) => {

    if(e.target.value === "") {
      setFilterList(list);
      return;
    }

    const filteredValues = list.filter((item) => item.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1);
    setFilterList(filteredValues);

    };

  const addWord = (list) => {
  

    
  }  


  return (
    <div className="App">
      <div>
          {/* <form onSubmit={addWord}>
           Add Word: <input type="text" value={word} onChange={e => setWord(e.target.value)}  /><button  type="submit">Add</button>
          </form> */}
        </div>
      <div>
        Search: <input name="query" type="text" onChange={handleSearch} />
      </div>
      {filterList &&
        filterList.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
        
     
    </div>
  );
};

export default App;
