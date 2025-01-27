import HomeContent from "../HomeContent";
import Navbar from "../Navbar";

const Home = ({ dataDua }) => {
  return (
    <div>
      <Navbar />
      <HomeContent dataDua={dataDua} />
    </div>
  );
};
export default Home;
