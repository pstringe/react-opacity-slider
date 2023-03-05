import Slider from '@mui/material/Slider';
import '../styles/OpacitySlider.css'

const OpacitySlider = ({opacity, onChange}) => {
    return ( 
    <div className="opacity-slider">
        <Slider sx={{width: 200}} aria-label="Opacity" value={opacity} onChange={onChange} />
    </div>
    );
}
 
export default OpacitySlider;