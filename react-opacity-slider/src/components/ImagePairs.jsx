import OpacityImage from "./OpacityImage";

const ImagePairs = ({imagePair, opacity}) => {
    
    return ( 
    <div className="image-pairs">
        <OpacityImage opacity={opacity}/>
        <OpacityImage opacity={1 / opacity}/>
    </div> );
}
 
export default ImagePairs;