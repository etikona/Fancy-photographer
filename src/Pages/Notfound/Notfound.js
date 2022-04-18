import React from 'react';
import notfound from '../../images/Notfound.webp'

const Notfound = () => {
    return (
        <div>
           <h3>Not Found</h3> 
           <img src={notfound} alt="" />
        </div>
    );
};

export default Notfound;