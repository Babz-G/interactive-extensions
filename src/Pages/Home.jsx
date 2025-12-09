import data from "../Data.js";
import { useState } from "react";
import Card from "../Components/Card.jsx";

function Home() {
  const [allItems, setAllItems] = useState(data);
  const [status, setStatus] = useState("all");

  return (
    <div className="card-container">
      {allItems.map((oneItem) => {
        return (
          <Card
            name={oneItem.name}
            description={oneItem.description}
            key={oneItem.id}
          >
            {/* <h3>{oneItem.name}</h3>
            <p>{oneItem.description}</p> */}
          </Card>
        );
      })}
    </div>
  );
}
export default Home;
