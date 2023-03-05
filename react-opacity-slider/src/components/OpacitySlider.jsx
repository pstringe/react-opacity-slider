import { useState } from "react";
import ImagePairs from "./ImagePairs";
import Slider from "./Slider";
import Upload from "./Upload";

const OpacitySlider = () => {
    const [dataUrls, setDataUrls] = useState([]);
    const [imagePairIndex, setImagePairIndex] = useState(0);
    const [opacity, setOpacity] = useState(0.5);

    const handleImageDirectorySelect = async (event) => {
        const fileList = event.target.files;
        console.log({fileList})
        // create an array to hold the data URLs
        const urls = [];
      
        for (let i = 0; i < fileList.length; i++) {
          const file = fileList[i];
          const reader = new FileReader();
      
          // use a Promise to wait for the file to be read as a data URL
          const dataUrl = await new Promise((resolve, reject) => {
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(file);
          });
      
          // add the data URL to the array
          urls.push(dataUrl);
        }
      
        // do something with the array of data URLs
        console.log(dataUrls);
    };


    const onUpload = (dataUrls) => {
        handleImageDirectorySelect(dataUrls);
        setDataUrls(dataUrls);
    }

    const onSliderChange = (value) => {
        setOpacity(value);
    }

    const onClickBack = () => {
        setImagePairIndex(Math.max(0, imagePairIndex - 1));
    }

    const onClickForward = () => {
        setImagePairIndex(Math.min(dataUrls.length - 1, imagePairIndex + 1));
    }

    return ( dataUrls.length ? (<>
        <ImagePairs imagePair={dataUrls[imagePairIndex]} opacity={opacity}/>
        <Slider onSliderChange={onSliderChange} onClickBack={onClickBack} onClickForward={onClickForward}/>
    </>) 
    : <Upload onImageDirectorySelect={handleImageDirectorySelect}/>);
}
 
export default OpacitySlider;