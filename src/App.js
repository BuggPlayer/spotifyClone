import React, { useEffect, useState } from "react";
import Routepage from "../src/routes/index";
import ToggleContextProvider from "./Context/ToggleContext";
import Login from "./Page/Login/Login";
import { getTokenFromResponse } from "./Api/SpotifyWebApis";
import { useDataLayerValue } from "./Context/DataLayer";
import "./App.css";
// for connecting react to spotify
import spotifywebapis from "spotify-web-api-js";
const Spotifyweb = new spotifywebapis();

function App() {
  //contex data
  const [{ token }, dispatch] = useDataLayerValue();

  const tokenHandler = () => {
    const hashValue = getTokenFromResponse();
    window.location.hash = "";
    const _token = hashValue.access_token;

    if (_token) {
      dispatch({ type: "SET_TOKEN", token: _token });

      Spotifyweb.setAccessToken(_token);
      // for user information
      Spotifyweb.getMe()
        .then((user) => {
          dispatch({ type: "SET_USER", user: user });
        })
        .catch((err) => console.log(err));
      //for weekly plalist
      Spotifyweb.getPlaylist("37i9dQZEVXcJZyENOWUFo7").then((response) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );
    }
  };
  // for token access/ refresh
  useEffect(() => {
    tokenHandler();
  }, []);

  // console.log("usser", discover_weekly);

  return (
    <ToggleContextProvider>
      {token ? <Routepage spotify={Spotifyweb} /> : <Login />}
    </ToggleContextProvider>
  );
}

export default App;
