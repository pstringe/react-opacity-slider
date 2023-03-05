const Upload = ({onUpload}) => {
    return (
    <div className="upload">
        Upload a directory of images
        <input type="file" directory="" webkitdirectory="" onChange={(e) => onUpload(e)} />
    </div> );
}
 
export default Upload;