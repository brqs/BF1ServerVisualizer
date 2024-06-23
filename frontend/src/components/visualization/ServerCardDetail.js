import React from 'react';
import PropTypes from 'prop-types';

const ServerCardDetail = ({ backgroundImage, name, player0, player1, star, map, mode, rules }) => {
    return (
        <div className="card" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="card-content">
                <div className="card-header">
                    <h4>{name}</h4>
                </div>
                <div className="card-stats">
                    <div className="stat">
                        <h4>玩家</h4>
                        <p>{player0}</p>
                    </div>
                    <div className="stat">
                        <h4>队列</h4>
                        <p>{player1}</p>
                    </div>
                    <div className="stat">
                        <h4>收藏</h4>
                        <p>{star}</p>
                    </div>
                    <div className="stat">
                        <h4>地图</h4>
                        <p>{map}</p>
                    </div>
                    <div className="stat">
                        <h4>模式</h4>
                        <p>{mode}</p>
                    </div>
                </div>
                <div className="card-rules">
                    <p>{rules}</p>
                </div>
            </div>
        </div>
    );
};

ServerCardDetail.propTypes = {
    backgroundImage: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    player0: PropTypes.string.isRequired,
    player1: PropTypes.string.isRequired,
    star: PropTypes.string.isRequired,
    map: PropTypes.string.isRequired,
    mode: PropTypes.string.isRequired,
    rules: PropTypes.string.isRequired,

};

export default ServerCardDetail;
