
import OpacityImage from "./OpacityImage";

const imagePairStyles = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '8px',
    margin: '8px',
    position: 'relative',
  }
  
const overlayStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
}

const ImagePairs = ({ imagePair, opacity }) => {
    const transformation1 = (x) => (-x + 100) / 100;
    const transformation2 = (x) => x / 100;

    return (
        <div className="image-pairs" style={imagePairStyles}>
            <div style={{ flex: 1, position: 'relative' }}>
                <OpacityImage src={imagePair.img1} opacity={transformation1(opacity)} />
                <div style={{ ...overlayStyles}}>
                <OpacityImage src={imagePair.img2} opacity={transformation2(opacity)} />
                </div>
            </div>
        </div>
    );
}

export default ImagePairs;
