import {Document, Page} from 'react-pdf/dist/esm/entry.webpack5';

const OpacityPdf = ({src, opacity}) => {
    const style = { 
        //display: 'flex',
        //justifyContent: 'center',
        opacity: opacity,
    };
 
    return ( 
        <div className="opacity-pdf" style={style}>
           <Document file={src}>
                <Page pageNumber={1} height={500}/> 
            </Document>    
        </div>
    );
}
 
export default OpacityPdf;