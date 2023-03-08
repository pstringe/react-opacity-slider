
const OpacityImage = ({src, opacity}) => {
    const style = { 
        opacity: opacity, 
        width: 200,
        height: 200,
        border: '1px solid black',
    };
 
    console.log({src, opacity})
    return ( 
        <div className="opacity-image">
            <img src={src} style={style} />       
        </div>
    );
}
 
export default OpacityImage;