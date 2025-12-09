import data from "../Data.js";
import { useState } from "react";

function Home() {
  const [allItems, setAllItems] = useState(data);
  const [status, setStatus] = useState("all");

  return (
    <div>
      {allItems.map((oneItem) => {
        return (
          <div key={oneItem.id}>
            <h3>{oneItem.name}</h3>
            <p>{oneItem.description}</p>
          </div>
        );
      })}
    </div>
  );
}
export default Home;
