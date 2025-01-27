import React from 'react';
import { Link } from 'react-router-dom';

export default function HomeSection({ title, paragraph1, boldPart = "Key Takeaways: ", paragraph2, targetURL, linkTitle = "Learn More" }) {

    return (
        <div className="section-title">
            <h2>{title}</h2>
            {paragraph1 && <p>{paragraph1}</p>}
            {paragraph2 && <p><strong>{boldPart}</strong>{paragraph2}</p>}
            <Link to={targetURL} className="btn custom-btn">
                {linkTitle}
            </Link>
        </div>
    );
};
