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
        const urls = {};
      
        for (let i = 0; i < fileList.length; i++) {
            const file = fileList[i];
            const name = file.name;
            const reader = new FileReader();
            // use a Promise to wait for the file to be read as a data URL
            const dataUrl = await new Promise((resolve, reject) => {
            reader.onload = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(file);
            });

            //strip the extention off of the file name
            const fileName = name.substring(0, name.lastIndexOf('.'));

            console.log({fileName});
            // check if the file name ends with _1 or _2
            if (!fileName.endsWith('_1') && !fileName.endsWith('_2')) {
                continue;
            }

            // get the part of the file name before the last underscore
            const imgName = fileName.substring(0, fileName.lastIndexOf('_'));
            console.log({imgName, dataUrl});
            if (!urls[imgName]) {
                urls[imgName] = { img1: dataUrl };
            } else if (urls[imgName].img1) {
                urls[imgName].img2 = dataUrl;
            }
        }
      
        // do something with the array of data URLs
        console.log(urls);

        return Object.entries(urls).map(([key, value]) => value);

    };
  
    const handleUpload = async (event) => {
        const urls = await handleImageDirectorySelect(event);
        setDataUrls(urls);
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
    : <Upload onUpload={handleUpload}/>);
}
 
export default OpacitySlider;