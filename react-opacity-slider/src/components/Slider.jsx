import { useState } from 'react';
import Slider from '@mui/material/Slider';
import styles from '../styles/OpacitySlider.module.css'
import FirstPageIcon from '@mui/icons-material/FirstPage';
import LastPageIcon from '@mui/icons-material/LastPage';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

const OpacitySlider = ({opacity, onChange, onClickBack, onClickForward}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    
    return ( 
    <div className="opacity-slider" styles={styles.opacitySlider}>
        <div className="slider">
            <Slider sx={{width: 200}} aria-label="Opacity" value={opacity} onChange={onChange} />
        </div>
        <div className="buttons" styles={styles.buttons}>
            <FirstPageIcon onClick={onClickBack}/>
            {isPlaying ? <PauseIcon onClick={() => setIsPlaying(false)}/> : <PlayArrowIcon onClick={() => setIsPlaying(true)}/>}
            <LastPageIcon onClick={onClickForward}/>
        </div>
    </div>
    );
}
 
export default OpacitySlider;