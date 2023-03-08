import {Document, Page} from 'react-pdf/dist/esm/entry.webpack5';
;

const OpacityPdf = ({src, opacity}) => {
    const style = { 
        opacity: opacity, 
    };
 
    return ( 
        <div className="opacity-image" style={style}>
           <Document file={src}>
                <Page pageNumber={1}/> 
            </Document>    
        </div>
    );
}
 
export default OpacityPdf;