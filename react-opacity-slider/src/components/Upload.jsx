const Upload = ({onImageDirectorySelect}) => {
    return (
    <div className="upload">
        Upload a directory of images
        <input type="file" directory="" webkitdirectory="" onChange={(e) => onImageDirectorySelect(e)} />
    </div> );
}
 
export default Upload;