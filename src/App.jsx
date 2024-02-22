import { useState } from "react";

import "./App.css";
import { useMutation, useQuery } from "react-query";
// https://jsonplaceholder.org/posts

function App() {
  // const fetchData = useQuery(
  //   ["posts"],
  //   () => {
  //     return fetch("https://jsonplaceholder.org/posts").then((response) =>
  //       response.json()
  //     );
  //   },
  //   {
  //     enabled: false,
  //   }
  // );

  // const { data, isLoading, refetch } = fetchData;
  // console.log(data);
  // if (isLoading) {
  //   return <div>loading ...</div>;
  // }

  const { data, reset, mutate, isLoading } = useMutation(
    ["users"],
    (newPost) => {
      return fetch("https://jsonplaceholder.org/users", {
        method: "POST",
        body: JSON.stringify(newPost),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }).then((response) => response.json());
    }
  );
  if (isLoading) {
    return <div>Loading...</div>;
  }
  console.log(data);
  return (
    <div>
      <button
        onClick={() => mutate({ title: "deneme", body: "deneme", num: 1 })}
      >
        verileri ekle
      </button>
      <button onClick={() => reset()}>verileri resetle</button>
      <div>
        {/* {data && data.map((datas, id) => <div key={id}>{datas.title}</div>)} */}
      </div>
    </div>
  );
}

export default App;
