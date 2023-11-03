import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Row from "./components/Row";
import requests from "../requests";
import { Route, Routes } from "react-router-dom";
import AuthContextProvider from "./context/AuthContext";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </AuthContextProvider>
      <Row rowID="1" title="Up Coming" fetchURL={requests.upcomingMovies} />
      <Row rowID="2" title="Now Playing" fetchURL={requests.nowPlaying} />
      <Row rowID="3" title="Top Rated" fetchURL={requests.topRated} />
      <Row rowID="4" title="TV Shows" fetchURL={requests.tvShows} />
    </>
  );
}

export default App;
