import React from "react";
import useFetch from "../Hooks/useFetch";
import Card from "../Components/Card";

function Home() {
  const API = "https://jsonplaceholder.typicode.com/todos";
  const { data, loading, error } = useFetch(API);
  return (
    <main className=" bg-gray-950 min-h-screen flex gap-1 flex-wrap">
      {loading && <p className="text-white">Data is loading</p>}
      {error && <p className="text-white">{error}</p>}
      {data && data.map((data) => <Card key={data.id} data={data} />)}
    </main>
  );
}

export default Home;
