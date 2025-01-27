import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';

function PageNavigation({ prevPage, nextPage }) {
    const isDarkMode = document.body.classList.contains('dark-mode');

    return (
        <div className="page-navigation-container">
            <div className="page-navigation-buttons">
                {prevPage && (
                    <button
                        onClick={() => window.location.href = prevPage}
                        className={`btn ${isDarkMode ? 'btn-outline-light' : 'btn-primary'} page-navigation-button mb-3 mb-md-0`}
                    >
                        <FontAwesomeIcon icon={faAnglesLeft} />
                    </button>
                )}
                {nextPage && (
                    <button
                        onClick={() => window.location.href = nextPage}
                        className={`btn ${isDarkMode ? 'btn-outline-light' : 'btn-primary'} page-navigation-button mb-3 mb-md-0`}
                    >
                        <FontAwesomeIcon icon={faAnglesRight} />
                    </button>
                )}
            </div>
        </div>
    );
}

export default PageNavigation;
