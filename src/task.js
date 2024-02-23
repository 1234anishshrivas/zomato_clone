import React, { useState, useEffect } from "react";
function task() {
  const [task, settask] = useState(null);
  useEffect(() => {
    fetch("https://"jokes-by-api-ninjas.p.rapidapi.com/v1/jokes, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "your-api",
        "X-RapidAPI-Host": "jokes-by-api-ninjas.p.rapidapi.com",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setJoke(data[0].joke);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <h2>lorem50:</h2>
      {joke && <p>{joke}</p>}
    </div>
  );
}
export default Joke;