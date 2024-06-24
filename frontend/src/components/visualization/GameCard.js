import React from 'react';

function GameCard() {
    return (
        <div className="game-card">
            <h2 className="title">热门地图</h2>
            <div className="maps">
                <div className="map" style={{ backgroundImage: 'url("https://eaassets-a.akamaihd.net/battlelog/battlebinary/gamedata/Tunguska/55/40/MP_Islands_LandscapeLarge-c9d8272b.jpg")' }}></div>
                <div className="map" style={{ backgroundImage: 'url("https://eaassets-a.akamaihd.net/battlelog/battlebinary/gamedata/Tunguska/55/40/MP_Islands_LandscapeLarge-c9d8272b.jpg")' }}></div>
                <div className="map" style={{ backgroundImage: 'url("https://eaassets-a.akamaihd.net/battlelog/battlebinary/gamedata/Tunguska/55/40/MP_Islands_LandscapeLarge-c9d8272b.jpg")' }}></div>
            </div>
            <div className="leaderboards">
                <div className="leaderboard">
                    <h3>击杀排行榜</h3>
                    <ul>
                        <li><span>Xueqinwangnanoda</span><span>216861</span></li>
                        <li><span>MustForgiveHer77</span><span>173087</span></li>
                        <li><span>Jue_Jue_Need</span><span> 156560</span></li>
                    </ul>
                </div>
                <div className="leaderboard">
                    <h3>时长排行榜</h3>
                    <ul>
                        <li><span>Xueqinwangnanoda</span><span>6987382s</span></li>
                        <li><span>MustForgiveHer77</span><span>4651208s</span></li>
                        <li><span>MatthewDaddy1 </span><span>4070555s</span></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default GameCard;
