import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { getPosts, getSinglePost } from "./api/PostApi";
import Card from "./Card";
import { Link } from "react-router-dom";

function App() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await getPosts();

    console.log(res);
    setData(res.data.posts);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="card-container">
      {data &&
        data.map((card, key) => {
          return (
            <Link key={key} to={`view/${card.ID}`}>
              <Card
                title={card.title.rendered}
                content={card.content.rendered}
                date={card.date}
                data={card.excerpt.rendered}
              />
            </Link>
          );
        })}
    </div>
  );
}

export default App;
