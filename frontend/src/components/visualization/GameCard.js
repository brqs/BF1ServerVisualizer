import React from 'react';

function GameCard() {
    return (
        <div className="game-card">
            <h2 className="title">热门地图</h2>
            <div className="card topmap topmap1" style={{ backgroundImage: 'url("https://eaassets-a.akamaihd.net/battlelog/battlebinary/gamedata/Tunguska/31/107/MP_Amiens_LandscapeLarge-e195589d.jpg")' }}>
                <div className="card-content">
                    <div className="card-header">
                        top1 亚眠
                    </div>
                    <div className="card-stats">
                        <p>
                        服务器地图介绍服务器地图介绍服务器地图介绍服务器地图介绍服务器地图介绍服务器地图介绍服务器地图介绍服务器地图介绍
                        服务器地图介绍服务器地图介绍服务器地图介绍服务器地图介绍服务器地图介绍服务器地图介绍服务器地图介绍服务器地图介绍服务器地图介绍服务器地图介绍服务器地图介绍服务器地图介绍服务器地图介绍服务器地图介绍服务器地图介绍
                        </p>
                    </div>
                </div>
            </div>
            <div className="card topmap topmap2" style={{ backgroundImage: 'url("https://eaassets-a.akamaihd.net/battlelog/battlebinary/gamedata/Tunguska/10/48/MP_Suez_LandscapeLarge-f630fc76.jpg")',marginTop: "10px" }}>
                <div className="card-content">
                    <div className="card-header">
                        top2 蘇伊士運河
                    </div>
                    <div className="card-stats">
                        <p>
                        昨天我們攻打了蘇伊士運河。是場意料之外的勝仗，但這條大英帝國的血脈仍未被切斷。我們必須等待他們的的反擊。
                        那頭帝國野獸仍在沉睡。那群蠢貨不相信我們能在這場沙漠行軍中生還。而明天，總算，他們將會為他們的愚蠢而懊悔。
                        讚美蘇丹。在这里，我可以听见各种各样的声音。“哒，哒哒，哒哒哒叮”，芝士定点机枪；“磅！”，芝士AT筒；“咚，咚，咚”，芝士高爆迫击炮。
                        </p>
                    </div>
                </div>
            </div>
            <div className="card topmap topmap3" style={{ backgroundImage: 'url("https://eaassets-a.akamaihd.net/battlelog/battlebinary/gamedata/Tunguska/74/59/MP_Underworld_LandscapeLarge-b6c5c7e7.jpg")' ,marginTop: "10px"}}>
                <div className="card-content">
                    <div className="card-header">
                        top3 法务克斯要塞
                    </div>

                    <div className="card-stats">
                        <p>
                        服务器地图介绍服务器地图介绍服务器地图介绍服务器地图介绍服务器地图介绍服务器地图介绍服务器地图介绍服务器地图介绍
                        服务器地图介绍服务器地图介绍服务器地图介绍服务器地图介绍服务器地图介绍服务器地图介绍服务器地图介绍服务器地图介绍服务器地图介绍服务器地图介绍服务器地图介绍服务器地图介绍服务器地图介绍服务器地图介绍服务器地图介绍
                        </p>
                    </div>
                </div>
            </div>
            {/* <div className="leaderboards">
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
            </div> */}
        </div>
    );
}

export default GameCard;
