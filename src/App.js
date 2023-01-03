import React from 'react';
import Calendar from './components/Calendar.js';
import Notes from './components/Notes.js';
import SelectThemeDayOrNight from './components/SelectThemeDayOrNight.js';

import './styles/App.css';
import './styles/responsive.css';

function App() {
    return (
        <div className="App">
            <div className='datepicker'>
                <SelectThemeDayOrNight/>
                <div className="calendarWrapper">
                    <Calendar/>
                </div>
                <Notes/>
            </div>
        </div>
    );
}

export default App;
