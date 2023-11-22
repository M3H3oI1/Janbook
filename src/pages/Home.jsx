import Leftbar from "../components/Leftbar";
import Post from "../components/Post";
import Navbar from '../components/Navbar';
import Rightbar from '../components/Rightbar';

function Home() {
  return (
    <div className="bg-slate-100">
      <Navbar></Navbar>
      <Leftbar></Leftbar>
      <Post></Post>
      <Rightbar></Rightbar>
    </div>
  );
}

export default Home;