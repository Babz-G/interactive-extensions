import data from "../Data.js";
import { useState } from "react";
import Card from "../Components/Card.jsx";
import Button from "../Components/Button.jsx";

function Home() {
  const [allItems, setAllItems] = useState(data);
  const [status, setStatus] = useState("all");
  function handleAllClick() {
    console.log("Button 1 is clickable!");
    setStatus("all");
  }
  function handleActiveClick() {
    console.log("Button 2 is clickable!");
    setStatus("active");
  }
  function handleInactiveClick() {
    console.log("Button 3 is clickable!");
    setStatus("inactive");
  }
  function filterThrough() {
    if (status === "all") {
      return allItems;
    } else if (status === "active") {
      return allItems.filter((oneItem) => oneItem.isActive === true);
    } else if (status === "inactive") {
      return allItems.filter((oneItem) => oneItem.isActive === false);
    }
  }
  function toggle(id) {}
  return (
    <div>
      <div className="header">
        <h1>Extensions List</h1>
        <div className="buttons">
          <Button buttonText="All" onClick={handleAllClick} />
          <Button buttonText="Active" onClick={handleActiveClick} />
          <Button buttonText="Inactive" onClick={handleInactiveClick} />
        </div>
      </div>
      <div className="card-container">
        {filterThrough().map((oneItem) => {
          return (
            <Card
              logo={oneItem.logo}
              name={oneItem.name}
              description={oneItem.description}
              key={oneItem.id}
              isActive={oneItem.isActive}
              onToggle={() => toggle(oneItem.id)}
            >
              {/* <h3>{oneItem.name}</h3>
            <p>{oneItem.description}</p> */}
            </Card>
          );
        })}
      </div>
    </div>
  );
}
export default Home;
