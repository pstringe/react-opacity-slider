import { useState } from "react";
import ImagePairs from "./ImagePairs";
import Slider from "./Slider";
import Upload from "./Upload";

const OpacitySlider = () => {
    const [dataUrls, setDataUrls] = useState([]);
    const [imagePairIndex, setImagePairIndex] = useState(0);
    const [opacity, setOpacity] = useState(0.5);

    const onUpload = (dataUrls) => {
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

    return ( dataUrls.length ? (
    <>
        <ImagePairs imagePair={dataUrls[imagePairIndex]} opacity={opacity}/>
        <Slider onSliderChange={onSliderChange} onClickBack={onClickBack} onClickForward={onClickForward}/>
    </>) 
    : <Upload onUpload={onUpload}/>);
}
 
export default OpacitySlider;