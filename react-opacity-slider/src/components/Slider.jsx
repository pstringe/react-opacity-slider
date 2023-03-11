import { useState } from 'react';
import Slider from '@mui/material/Slider';
import styles from '../styles/OpacitySlider.module.css'
import FirstPageIcon from '@mui/icons-material/FirstPage';
import LastPageIcon from '@mui/icons-material/LastPage';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

const OpacitySlider = ({opacity, onChange, onClickBack, onClickForward, isPlaying, onTogglePlayPause}) => {
    
    return ( 
    <div className="opacity-slider" styles={styles.opacitySlider}>
        <div className="slider">
            <Slider aria-label="Opacity" value={opacity} onChange={onChange} />
        </div>
        <div className="buttons" styles={styles.buttons}>
            <FirstPageIcon onClick={onClickBack}/>
            {isPlaying ? 
            <PauseIcon onClick={() => onTogglePlayPause(false)}/> : 
            <PlayArrowIcon onClick={() => onTogglePlayPause(true)}/>}
            <LastPageIcon onClick={onClickForward}/>
        </div>
    </div>
    );
}
 
export default OpacitySlider;