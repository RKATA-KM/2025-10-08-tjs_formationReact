import "./App.css";
import Header from "../ui/Header/Header";
import Footer from "../ui/Footer/Footer";
import MemeForm from "../functionnal/MemeForm/MemeForm.stored";
import FlexHGrow3 from "../layout/FlexHGrow3/FlexHGrow3";
import FlexVGrow1 from "../layout/FlexVGrow1/FlexVGrow1";
import Navbar from "../ui/Navbar/Navbar";
import store from '../../store/store'
import MemeSvgViewer from "../ui/MemeSVGViewer/MemeSVGViewer.stored";

const App = () => {

  console.log(store);
  return (
    <>
      <FlexHGrow3>
        <Header />
        <Navbar />
        <FlexVGrow1>
          <MemeSvgViewer
            basePath=""/>
          <MemeForm/>
        </FlexVGrow1>
        <Footer />
      </FlexHGrow3>
    </>
  );
};

export default App;
