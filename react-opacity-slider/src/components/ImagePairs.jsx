import OpacityImage from "./OpacityImage";

const imagePairStyles = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: '8px',
    margin: '8px',
}

const ImagePairs = ({imagePair, opacity}) => {
    
    return ( 
        <div className="image-pairs" style={imagePairStyles}>
            <OpacityImage src={imagePair.img1} opacity={opacity}/>
            <OpacityImage src={imagePair.img2} opacity={1 / opacity}/>
        </div>
    );
}
 
export default ImagePairs;