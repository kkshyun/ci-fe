import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState(0);
  const [title, setTitle] = useState(0);
  const [data, setData] = useState();
  const getData = async () => {
    try {
      const response = await axios.get(
        "http://35.184.254.51:8080/api/v1/boards"
      );
      setData(response.data);
      console.log(response);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const postData = async () => {
    try {
      const response = await axios.post(
        "http://35.184.254.51:8080/api/v1/boards",
        {
          userName: name,
          title: title,
        }
      );
      console.log(response);
      getData();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <input type="name" onChange={(e) => setName(e.target.value)}></input>
      <input type="title" onChange={(e) => setTitle(e.target.value)}></input>
      <button onClick={postData}>submit</button>
      {data?.map((element) => (
        <div>
          name:{element.userName} title:{element.boardTitle}
        </div>
      ))}
    </div>
  );
}

export default App;
