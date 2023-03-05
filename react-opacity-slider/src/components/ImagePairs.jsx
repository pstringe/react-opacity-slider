import OpacityImage from "./OpacityImage";

const ImagePairs = ({imagePair, opacity}) => {
    
    return ( 
        <div className="image-pairs">
            <OpacityImage src={imagePair.img1} opacity={opacity}/>
            <OpacityImage src={imagePair.img2} opacity={1 / opacity}/>
        </div>
    );
}
 
export default ImagePairs;