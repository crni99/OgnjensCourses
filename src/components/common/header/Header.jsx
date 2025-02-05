import React, { useState, useEffect } from 'react';
import GroupItemBackend from './GroupItemBackend';
import GroupItemFrontend from './GroupItemFrontend';
import GroupItemDatabases from './GroupItemDatabase';

export default function Header() {

    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setIsDarkMode(savedTheme === 'dark');
        }
        if (isDarkMode) {
            document.body.classList.add('bg-dark');
            document.body.classList.remove('bg-light');
            document.body.classList.add('text-light');
            document.body.classList.remove('text-dark');

            const dropdownMenus = document.querySelectorAll('.dropdown-menu');
            dropdownMenus.forEach(menu => {
                menu.classList.add('dropdown-menu-dark');
            });
        } else {
            document.body.classList.add('bg-light');
            document.body.classList.remove('bg-dark');
            document.body.classList.add('text-dark');
            document.body.classList.remove('text-light');

            const dropdownMenus = document.querySelectorAll('.dropdown-menu');
            dropdownMenus.forEach(menu => {
                menu.classList.remove('dropdown-menu-dark');
            });
        }
    }, [isDarkMode]);


    const toggleTheme = () => {
        const newTheme = !isDarkMode ? 'dark' : 'light';
        localStorage.setItem('theme', newTheme);
        setIsDarkMode(!isDarkMode);
    };

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm mb-3">
                <div className="container">
                    <a className="navbar-brand" href="/">Ognjen's Courses</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <GroupItemBackend />
                            <GroupItemFrontend />
                            <GroupItemDatabases />
                        </ul>
                    </div>
                </div>
                <button
                    onClick={toggleTheme}
                    className={`btn ${isDarkMode ? 'btn-light' : 'btn-dark'} ms-3 me-3`}
                    aria-label="Toggle theme"
                >
                    {isDarkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
                </button>
            </nav>
        </header>
    );
}
