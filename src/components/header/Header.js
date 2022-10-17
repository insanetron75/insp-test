import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './Header.scss';

const Header = () => {
    const [isDark, setIsDark] = useState(false);
    const [buttonText, setButtonText] = useState('Dark Mode');
    const [buttonColour, setButtonColour] = useState('white');

    const timeRemaining = useSelector((state) => state.time.timeRemaining);
    const handleClick = () => {
        const options = document.getElementsByClassName('mpc-interaction')[0];

        if (isDark) {
            setButtonText('Dark Mode');
            options.classList.remove('darkmode');
        } else {
            setButtonText('Light Mode');
            options.classList.add('darkmode');
        }
        setIsDark(!isDark);
    };
    return (
        <div className={`header ${isDark ? 'darkmode' : ''}`}>
            <div className="candidate">Front-end Test Candidate</div>
            <div className="time-remaining">
                { timeRemaining }
                {' '}
                seconds remaining
            </div>
            <button onClick={handleClick} type="button" className={`theme-toggle ${!isDark ? 'darkmode' : ''}`}>
                {buttonText}
            </button>
        </div>
    );
};

export default Header;
