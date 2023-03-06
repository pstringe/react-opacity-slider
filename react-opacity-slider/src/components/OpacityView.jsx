import { useState } from "react";
import ImagePairs from "./ImagePairs";
import Slider from "./Slider";
import Upload from "./Upload";
import styles from "../styles/OpacityView.module.css";

const OpacityView = () => {
    const [dataUrls, setDataUrls] = useState([]);
    const [imagePairIndex, setImagePairIndex] = useState(0);
    const [opacity, setOpacity] = useState(0.5);

    const handleImageDirectorySelect = async (event) => {
        const fileList = event.target.files;
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

            // check if the file name ends with _1 or _2
            if (!fileName.endsWith('_1') && !fileName.endsWith('_2')) {
                continue;
            }

            // get the part of the file name before the last underscore
            const imgName = fileName.substring(0, fileName.lastIndexOf('_'));
            if (!urls[imgName]) {
                urls[imgName] = { img1: dataUrl };
            } else if (urls[imgName].img1) {
                urls[imgName].img2 = dataUrl;
            }
        }

        return Object.entries(urls).map(([key, value]) => value);

    };
  
    const handleUpload = async (event) => {
        const urls = await handleImageDirectorySelect(event);
        setDataUrls(urls);
    }

    const onSliderChange = (event, value) => {
        setOpacity(value);
    }

    const onClickBack = () => {
        setImagePairIndex(Math.max(0, imagePairIndex - 1));
    }

    const onClickForward = () => {
        setImagePairIndex(Math.min(dataUrls.length - 1, imagePairIndex + 1));
    }

    return ( 
    <div className="opacity-view">{dataUrls.length ? (
        <div className="image-interface" styles={styles.imageInterface}>
            <ImagePairs imagePair={dataUrls[imagePairIndex]} opacity={opacity}/>
            <Slider onChange={onSliderChange} onClickBack={onClickBack} onClickForward={onClickForward}/>
        </div>) 
        : <Upload onUpload={handleUpload}/>
    }
    </div>
    );
}
 
export default OpacityView;