import "./App.css";
import Header from "../ui/Header/Header";
import Footer from "../ui/Footer/Footer";
import MemeForm from "../functionnal/MemeForm/MemeForm.stored";
import { useEffect, useState } from "react";
import FlexHGrow3 from "../layout/FlexHGrow3/FlexHGrow3";
import FlexVGrow1 from "../layout/FlexVGrow1/FlexVGrow1";
import Navbar from "../ui/Navbar/Navbar";
import store from '../../store/store'
import {emptyMeme,type ImageInterface,type MemeInterface, MemeSVGViewer} from "orsys-tjs-meme";

const App = () => {

  console.log(store);

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
  const [images, setImages] = useState<Array<ImageInterface>>([]);
  useEffect(() => {
  //fetch(`${REST_ADR}${REST_RESSOURCES.images}`).then(r=>r.json()).then(imgs=>setImages(imgs));
  },[]);
  return (
    <>
      <FlexHGrow3>
        <Header />
        <Navbar />
        <FlexVGrow1>
          <MemeSVGViewer
            meme={currentmeme}
            image={images.find((img) => img.id === currentmeme.imageId)}
            basePath=""
          />
          <MemeForm/>
        </FlexVGrow1>
        <Footer />
      </FlexHGrow3>
    </>
  );
};

export default App;
