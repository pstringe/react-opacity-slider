import OpacityImage from "./OpacityImage";

const imagePairStyles = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: '8px',
    margin: '8px',
}

const ImagePairs = ({imagePair, opacity}) => {
    const transformation1 = (x) => (-x + 100) / 100;
    const transformation2 = (x) => x / 100;

    return ( 
        <div className="image-pairs" style={imagePairStyles}>
            <OpacityImage src={imagePair.img1} opacity={transformation1(opacity)}/>
            <OpacityImage src={imagePair.img2} opacity={transformation2(opacity)}/>
        </div>
    );
}
 
export default ImagePairs;