import OpacityPdf from "./OpacityPdf";

const imagePairStyles = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '8px',
    position: 'relative',
  }
  
const overlayStyles = {
    position: 'absolute',
    top: 0,
    left: 0,
}

const anchorStyles = {
    position: 'relative', 
    display: 'flex', 
    justifyContent: 'center',
    width:'auto'
}

const PdfPairs = ({ pdfPair, opacity }) => {
    const transformation1 = (x) => (-x + 100) / 100;
    const transformation2 = (x) => x / 100;
    return (
        <div className="pdf-pairs" style={imagePairStyles}>
            <div style={anchorStyles}>
                <OpacityPdf src={pdfPair.img1} opacity={transformation1(opacity)} />
                <div style={{ ...overlayStyles}}>
                    <OpacityPdf src={pdfPair.img2} opacity={transformation2(opacity)} />
                </div>
            </div>
        </div>
    );
}

export default PdfPairs;