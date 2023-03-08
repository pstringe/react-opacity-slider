import {Document, Page} from 'react-pdf/dist/esm/entry.webpack5';
;

const OpacityPdf = ({src, opacity}) => {
    const style = { 
        opacity: opacity, 
    };
 
    return ( 
        <div className="opacity-image">
           <Document file={src}>
                <Page pageNumber={1} style={style} /> 
            </Document>    
        </div>
    );
}
 
export default OpacityPdf;