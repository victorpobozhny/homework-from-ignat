import React from 'react'
import Slider, {SliderProps} from '@mui/material/Slider'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                width: '147px',
                color: '#00CC22',
                '& .MuiSlider-rail': {
                    color: '#8B8B8B',
                },
                '& .MuiSlider-thumb': {
                    color: '#fff',
                    border: 1,
                    borderColor: '#00CC22'
                },
                '& .MuiSlider-thumb:after': {
                    width: '6px',
                    height: '6px',
                    background: '#00CC22'
                }, // Задайте желаемый цвет для ползунков
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
