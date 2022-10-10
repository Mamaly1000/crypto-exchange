import React from 'react';
import gif from "./gif/spinner.gif"
const Loader = () => {
    return (
        <div>
            <img src={gif} alt="gif" />
        </div>
    );
};

export default Loader;