
const OpacityImage = ({src, opacity}) => {
    const style = { 
        opacity: opacity, 
        maxWidth: 300,
    };
 
    return ( 
        <div className="opacity-image">
            <img src={src} style={style} />       
        </div>
    );
}
 
export default OpacityImage;