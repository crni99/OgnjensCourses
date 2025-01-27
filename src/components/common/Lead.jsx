import React from 'react';

export default function Lead({ title, paragraph1, paragraph2 }) {
    return (
        <div className="custom-lead">
            <h1 className="display-4 text-center fw-bold">{title}</h1>
            {paragraph1 && <p className="lead text-center">{paragraph1}</p>}
            {paragraph2 && <p>{paragraph2}</p>}
        </div>
    );
};