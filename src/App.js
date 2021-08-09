import Row from "./Row";
import requestUrls from './api-request-urls';
import './App.css';
import Banner from './Banner';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">

      <Navbar />

      <Banner />

      <Row title="NETFLIX ORIGINALS" isLargeRow={true} requestUrl={requestUrls.fetchNetflixOriginals} />
      <Row title="Trending Now" requestUrl={requestUrls.fetchTrending} />
      <Row title="Top Rated" requestUrl={requestUrls.fetchTopRated} />
      <Row title="Action Movies" requestUrl={requestUrls.fetchActionMovies} />
      <Row title="Romance" requestUrl={requestUrls.fetchRomanceMovies} />
      <Row title="Documentaries" requestUrl={requestUrls.fetchDocumenteris} />
      <Row title="Comedy Movies" requestUrl={requestUrls.fetchComedyMovies} />
      <Row title="Horror Movies" requestUrl={requestUrls.fetchHorrorMovies} />
    </div>
  );
}

export default App;
