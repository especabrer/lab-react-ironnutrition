import { useState } from "react";

function SearchFood(props) {

  const [searchLetters, setSearchLetters] = useState("");

  const handleSelect = (e) => {
    
    setSearchLetters(e.target.value);
    props.searchFood(e.target.value);
    console.log("searchLetters: ", e.target.value)
  };

  return (
    <div className="searchFood">
      <form>
            <label>Search:</label>
             <input value={searchLetters} type="text" onChange={handleSelect} />
        </form>
    </div>
  );
}

export default SearchFood;
