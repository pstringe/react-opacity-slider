import Slider from '@mui/material/Slider';
import styles from '../styles/OpacitySlider.module.css'

const OpacitySlider = ({opacity, onChange}) => {
    return ( 
    <div className="opacity-slider" styles={styles.opacitySlider}>
        <Slider sx={{width: 200}} aria-label="Opacity" value={opacity} onChange={onChange} />
    </div>
    );
}
 
export default OpacitySlider;