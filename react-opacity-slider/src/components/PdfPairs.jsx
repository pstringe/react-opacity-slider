import { useEffect, useRef, useState } from 'react';
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
    width: 'auto'
}

const PdfPairs = ({ pdfPair, opacity }) => {
    const parent = useRef(null);
    const [width, setWidth] = useState(0);
    const transformation1 = (x) => (-x + 100) / 100;
    const transformation2 = (x) => x / 100;

    useEffect(() => {
        const handleResize = () => {
            setWidth(parent.current.offsetWidth);
            console.log(parent.current.offsetWidth);
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    return (
        <div ref={parent} className="pdf-pairs" style={imagePairStyles}>
            <div style={anchorStyles}>
                <OpacityPdf src={pdfPair.img1} opacity={transformation1(opacity)} width={width - 16}/>
                <div style={{ ...overlayStyles}}>
                    <OpacityPdf src={pdfPair.img2} opacity={transformation2(opacity)} width={width - 16}/>
                </div>
            </div>
        </div>
    );
}

export default PdfPairs;