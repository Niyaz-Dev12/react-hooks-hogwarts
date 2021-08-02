import React,{useState} from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import Tile from "./Tile";
import Filter from "./Filter";

function App() {
	const [hoger,setHoger]=useState(hogs)
	const [condition,setCondition]=useState(false);

	const [showGreased, setShowGreased] = useState(false);
  const [sortBy, setSortBy] = useState("name");

  const hogsToDisplay = hogs
    .filter((hog) => (showGreased ? hog.greased : true))
    .sort((hog1, hog2) => {
      if (sortBy === "weight") {
        return hog1.weight - hog2.weight;
      } else {
        return hog1.name.localeCompare(hog2.name);
      }
    });

	const handleClick=(e)=>{
  setCondition(prev=>!prev)
	}

	const tileArray=hoger.filter((hog) => (showGreased ? hog.greased : true))
    .sort((hog1, hog2) => {
      if (sortBy === "weight") {
        return hog1.weight - hog2.weight;
      } else {
        return hog1.name.localeCompare(hog2.name);
      }
    }).map((hog,index)=>{
		return <Tile key={index} hoger={hog} onClicked={handleClick} showCondition={condition}/>
	})
	return (
		<div className="App">
			<Nav />
			<br />
			<Filter showGreased={showGreased}
          onChangeShowGreased={setShowGreased}
          sortBy={sortBy}
          onChangeSortBy={setSortBy} />
			{tileArray}
		</div>
	);
}

export default App;
