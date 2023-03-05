const Upload = ({handleImageDirectorySelect}) => {
    return (
    <div className="upload">
        Upload a directory of images
        <input type="file" directory="" webkitdirectory="" onChange={handleImageDirectorySelect} />
    </div> );
}
 
export default Upload;