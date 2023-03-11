import { useEffect, useState } from "react";
import ImagePairs from "./ImagePairs";
import Slider from "./Slider";
import Upload from "./Upload";
import styles from "../styles/OpacityView.module.css";
import PdfPairs from "./PdfPairs";

const OpacityView = () => {
    const [dataUrls, setDataUrls] = useState([]);
    const [imagePairIndex, setImagePairIndex] = useState(0);
    const [opacity, setOpacity] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

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
            const isFile1 = fileName.endsWith('_1');
            const isFile2 = fileName.endsWith('_2');
            if (!isFile1 && !isFile2) {
                continue;
            }

            // get the part of the file name before the last underscore
            const imgName = fileName.substring(0, fileName.lastIndexOf('_'));

            //instanciate the object that will contain the dataUrls if it doesn't exist.
            urls[imgName] = !urls[imgName] ?  { fileName: imgName, fileType: file.type } : urls[imgName];
            if (isFile1) {
                urls[imgName].img1 = dataUrl;
            }
            if (isFile2) {
                urls[imgName].img2 = dataUrl;
            }
        }

        const data = Object.values(urls);
        return data;
    };
  
    const handleUpload = async (event) => {
        const urls = await handleImageDirectorySelect(event);
        setDataUrls(urls);
    }

    const onSliderChange = (event, value) => {
        console.log({value});
        setOpacity(value);
    }

    const onClickBack = () => {
        console.log(imagePairIndex);
        setImagePairIndex(Math.max(0, imagePairIndex - 1));
    }

    const onClickForward = () => {
        setImagePairIndex(imagePairIndex === dataUrls.length - 1 ? 0 : imagePairIndex + 1);
    }

    const onClickPlayPause = (isPlaying) => {
        console.log({isPlaying})
        setIsPlaying(isPlaying);

    }

    const renderPairs = (pair, opacity) => {
        return pair.fileType === "application/pdf" ? 
        <PdfPairs pdfPair={pair} opacity={opacity}/> : 
        <ImagePairs imagePair={pair} opacity={opacity}/>;

    }

    useEffect(() => {
        const sliderInterval = setInterval(() => {
            if (isPlaying && opacity < 100) {
                setOpacity(opacity + 1);
            } else if (isPlaying && opacity === 100) {
                setOpacity(0);
                onClickForward();
            };
        }, 100);
        return () => {
            clearInterval(sliderInterval);
        };
        
    }, [isPlaying, opacity]);

    return ( 
    <div className="opacity-view" styles={styles.opacityView}> {
        dataUrls.length ? (
        <div className="image-interface" styles={styles.imageInterface}>
            {renderPairs(dataUrls[imagePairIndex], opacity)}
            <Slider
            opacity={opacity} 
            onChange={onSliderChange} 
            onClickBack={onClickBack} 
            onClickForward={onClickForward} 
            onTogglePlayPause={onClickPlayPause} 
            isPlaying={isPlaying}/>
        </div>) 
        : <Upload onUpload={handleUpload}/>}
    </div>
    );
}
 
export default OpacityView;