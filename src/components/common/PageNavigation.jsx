import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';

function PageNavigation({ prevPage, nextPage }) {
    const navigate = useNavigate();
    const isDarkMode = document.body.classList.contains('dark-mode');

    const handleNavigation = (page) => {
        if (page) {
            navigate(page);
        }
    };

    return (
        <div className="page-navigation-container">
            <div className="page-navigation-buttons">
                {prevPage && (
                    <button
                        onClick={() => handleNavigation(prevPage)}
                        className={`btn ${isDarkMode ? 'btn-outline-light' : 'btn-primary'} page-navigation-button mb-3 mb-md-0`}
                        aria-label="Go to previous page"
                    >
                        <FontAwesomeIcon icon={faAnglesLeft} />
                    </button>
                )}
                {nextPage && (
                    <button
                        onClick={() => handleNavigation(nextPage)}
                        className={`btn ${isDarkMode ? 'btn-outline-light' : 'btn-primary'} page-navigation-button mb-3 mb-md-0`}
                        aria-label="Go to next page"
                    >
                        <FontAwesomeIcon icon={faAnglesRight} />
                    </button>
                )}
            </div>
        </div>
    );
}

export default PageNavigation;
