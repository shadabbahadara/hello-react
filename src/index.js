import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css"

const lakesList = [
{id: "1", name: "Lake 1", description: "Lake 1 desc"},
{id: "2", name: "Lake 2", description: "Lake 2 desc"},
{id: "3", name: "Lake 3", description: "Lake 3 desc"}
];
function App({lakes}) {
  return (
    <ul>
      {lakes.map((lake, i) => (
        <li key={i}>{lake.id} - {lake.name} - {lake.description}</li>
      ))}
    </ul>
  );
}

ReactDOM.render(
  <App lakes={lakesList}/>,
  document.getElementById("root")
);

