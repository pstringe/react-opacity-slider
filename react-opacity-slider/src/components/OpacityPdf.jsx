import {Document, Page} from 'react-pdf/dist/esm/entry.webpack5';

const OpacityPdf = ({src, opacity, width}) => {
    const style = { 
        opacity: opacity,
        width: '100%',
    };

    return ( 
        <div className="opacity-pdf" style={style}>
           <Document file={src}>
                <Page pageNumber={1} width={width}/> 
            </Document>    
        </div>
    );
}
 
export default OpacityPdf;