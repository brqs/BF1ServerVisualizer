import React from 'react';
import PropTypes from 'prop-types';

const ServerCard = ({ backgroundImage, mode, description, status }) => {
    return (
        <div className="serverCard">
            <div className="serverImage" style={{ backgroundImage: `url("${backgroundImage}")` }}>
                <div className="serverMode"><h1>{mode}</h1></div>
            </div>
            <p className="serverDescription">
                <b>{description}</b>
                
            </p>
            
            <b className="serverStatus">{status}</b>
        
        </div>
        
    );
};

ServerCard.propTypes = {
    backgroundImage: PropTypes.string.isRequired,
    mode: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired
};

export default ServerCard;
