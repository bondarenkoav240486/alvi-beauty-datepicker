
import React from 'react';

const SelectThemeDayOrNight = () => {
    const buttonSelectThemeDayOrNight = 
        document.querySelector(
            '.buttonSelectThemeDayOrNight'
        );
        
    const info = 
        document.querySelector(
            '.info'
        );

    const letSelectThemeDayOrNight = () => {
      document.body.classList.toggle('dark-theme'); 
      console.log(info); 
    }


    return (
        <div className="selectThemeDayOrNight">
            <button
                className="buttonSelectThemeDayOrNight"
                onClick={letSelectThemeDayOrNight}
            >
                
            </button>
        </div>
    );
};

export default SelectThemeDayOrNight;