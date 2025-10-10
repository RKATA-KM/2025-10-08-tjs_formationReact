import "./App.css";
import Header from "../ui/Header/Header";
import Footer from "../ui/Footer/Footer";
import FlexHGrow3 from "../layout/FlexHGrow3/FlexHGrow3";
import FlexVGrow1 from "../layout/FlexVGrow1/FlexVGrow1";
import Navbar from "../ui/Navbar/Navbar";
import store from '../../store/store'
import { Route,Routes } from "react-router";
import Home from "../../pages/Home";
import Editor from "../../pages/Editor";

//https://github.com/champix56/2025-10-08-tjspa

const App = () => {

  console.log(store);
  return (
    <>
      <FlexHGrow3>
        <Header />
        <Navbar />
        <FlexVGrow1>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/editor" Component={Editor} />
          </Routes>
        </FlexVGrow1>
        <Footer />
      </FlexHGrow3>
    </>
  );
};

export default App;
