import { useState } from "react";
import "./styles.css";

export default function App() {
  //https://codeforces.com/api/user.rating?handle=Fefer_Ivan
  const [name, setName] = useState([]);
  const [handle, setHandel] = useState([]);

  function handel() {
    fetch(`https://codeforces.com/api/user.rating?handle=${handle}`)
      .then((res) => res.json())
      .then((data) => setName(data.result));
  }

  // useEffect(() => {

  // }, []);

  return (
    <div className="App">
      <div className="cc">
        <input
          onChange={(e) => {
            setHandel(e.target.value);
          }}
        />
        <button onClick={handel}>Submit</button>
      </div>
      {name &&
        name.map((item) => {
          return (
            <div className="main">
              <div className="c">
                <p>
                  <span>handel:</span>
                  {item.handle}
                </p>
                <p>
                  <span>contestName:</span>
                  {item.contestName}
                </p>
                <p>
                  <span>Rank:</span>
                  {item.rank}
                </p>
                <p>
                  <span>oldRating:</span>
                  {item.oldRating}
                </p>
                <p>
                  <span>newRating:</span>
                  {item.newRating}
                </p>
              </div>
            </div>
          );
        })}
    </div>
  );
}
