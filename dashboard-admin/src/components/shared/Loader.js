import React from 'react';
import loading from '../../assets/images/Spinner-1s-200px.gif'

const Loader = () => {
    return (
        <div style={{width: '100%', textAlign: 'center', padding: '60px 0'}}>
            <img alt='spinner' src={loading}/>
        </div>
    );
};

export default Loader;