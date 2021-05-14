import React from 'react';
import PropTypes from "prop-types";



function Button({ title, link, faIcon, description, id }) {
    return (
        <a href={link} className="bg-white dark:bg-gray-800 py-8 rounded-3xl shadow-lg items-center text-center mt-5" key={id}>
            <span className="ml-6 flex flex-col">
                {faIcon}
                <h1 className="text-2xl font-bold italic">{title}</h1>
                <p>{description}</p>
            </span>
        </a>
    )
}

Button.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    faIcon: PropTypes.string,
    description: PropTypes.string
};
export default Button;