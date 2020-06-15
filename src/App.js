// https://www.youtube.com/watch?v=35lXWvCuM8o&t=497s

import React from "react";
import "./App.css";
import "./App.css";
import MovieList from "./MovieList";
import Nav from "./Nav";
import "bootstrap/dist/css/bootstrap.css";
import { AccessAlarm, ThreeDRotation } from "@material-ui/icons";

import { MovieProvider } from "./OpleidingContext";
// import AddMovie from "./AddMovie";

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <br />
        {/* <AddMovie /> */}
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
