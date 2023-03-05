import OpacityImage from "./OpacityImage";

const imagePairStyles = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  gap: '8px',
  margin: '8px',
  position: 'relative', // Set position to relative
}

const ImagePairs = ({ imagePair, opacity }) => {
  const transformation1 = (x) => (-x + 100) / 100;
  const transformation2 = (x) => x / 100;

  return (
    <div className="image-pairs" style={imagePairStyles}>
      <div style={{ position: 'absolute', top: 0, left: 0 }}>
        <OpacityImage src={imagePair.img1} opacity={transformation1(opacity)} />
      </div>
      <div style={{ position: 'absolute', top: 0, left: 0 }}>
        <OpacityImage src={imagePair.img2} opacity={transformation2(opacity)} />
      </div>
    </div>
  );
}

export default ImagePairs;