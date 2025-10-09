import "./App.css";
import Header from "../ui/Header/Header";
import Footer from "../ui/Footer/Footer";
import MemeForm from "../functionnal/MemeForm/MemeForm";
import { useEffect, useState } from "react";
import FlexHGrow3 from "../layout/FlexHGrow3/FlexHGrow3";
import FlexVGrow1 from "../layout/FlexVGrow1/FlexVGrow1";
import Navbar from "../ui/Navbar/Navbar";
import {emptyMeme,type MemeInterface, MemeSVGViewer} from "orsys-tjs-meme";

const App = () => {
  const [counter, setCounter] = useState(-100);
  useEffect(() => {
    setCounter(0);
    //console.log('mount',counter)
  }, []);
  useEffect(() => {
    //console.log('useEffect->',counter)
  }, [counter]);
  useEffect(() => {
    //console.log('all refresh mount and unmount');
  });

  const [currentmeme, setCurrentMeme] = useState<MemeInterface>(emptyMeme);

  return (
    <>
      <FlexHGrow3>
        <Header />
        <Navbar />
        <FlexVGrow1>
          <MemeSVGViewer meme={currentmeme} image={undefined} basePath=""/>
          <MemeForm
          meme={currentmeme}
          onMemeChange={(newMeme: MemeInterface) => {
            setCurrentMeme(newMeme);
          }}
        />
        </FlexVGrow1>
        <Footer />
      </FlexHGrow3>
    </>
  );
};

export default App;
