import "./App.css";
import Header from "./Components/header";
import Slider from "./Components/Slider";
import Production from "./Components/Production";
import GenreMovieList from "./Components/GenreMovieList";

function App() {
  return (
    <div>
      <Header />
      <Slider />
      <Production />
      <GenreMovieList />
    </div>
  );
}

export default App;
