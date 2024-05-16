import React, { useState } from "react"

function SearchWork({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value.toLowerCase();
    setWordEntered(searchWord);
    
    const newFilter = data.filter((value) => {
      const titleMatch = value.title.includes(searchWord);
      const nameMatch = value.name.includes(searchWord);
      return titleMatch || nameMatch;
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  return (
    <div className="">
      <div className="flex">
        <input
          className=" bg-white border-0"
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="">
          <img src="src/assets/images/searchIcon.png" alt="Search Icon" className="h-[30px]"/>
        </div>
      </div>
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => (
            <a className="dataItem" href={value.link} target="_blank" key={key}>
              <p>{value.title}</p>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchWork;