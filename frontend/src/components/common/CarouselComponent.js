// src/components/common/CarouselComponent.js
import React from 'react';
import Slider from 'react-slick';
import ServerCard from '../visualization/ServerCard';
import ServerCardDetail from '../visualization/ServerCardDetail';
import TopmapCard from '../visualization/TopmapCard';
import AnnouncementCard from './AnnouncementCard'; 
const CarouselComponent = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
    };

    return (
        <Slider {...settings}>
            <div class="server-card-container">
                <p className="servergroup">
                    DDF群组服务器列表
                </p>
                <ServerCardDetail
                backgroundImage="https://eaassets-a.akamaihd.net/battlelog/battlebinary/gamedata/Tunguska/55/40/MP_Islands_LandscapeLarge-c9d8272b.jpg"
                mode="团队死斗"
                name="[DDF#1]/dashuanfu/B2B/m1903semi&flash&dynamite=kick/qq:838082738"
                star="15300"
                player0="20/24"
                player1="0/10"
                map="亚眠"
                rules='本服務器為DDF1大栓服，非權限服，禁止閃光彈，禁止m1903實驗半自動模式，禁止炸藥，禁止空爆迫擊炮，禁止公屏罵人，舉報閃光彈與暖服都可獲得對應天數的vip，QQ群號：838082738 no flash/no m1903 semi-auto mode/no bark/no dynamite/no air burst mortar'
                />
                <ServerCard
                backgroundImage="https://eaassets-a.akamaihd.net/battlelog/battlebinary/gamedata/Tunguska/45/126/MP_Harbor_LandscapeLarge-d382c7ea.jpg"
                mode="TM"
                description="[DDF#1]/dashuanfu/B2B/m1903semi&flash&dynamite=kick/qq:838082738 团队死斗: 沙布呂赫"
                status="20/24"
                />
                <ServerCard
                backgroundImage="https://eaassets-a.akamaihd.net/battlelog/battlebinary/gamedata/Tunguska/45/126/MP_Harbor_LandscapeLarge-d382c7ea.jpg"
                mode="TM"
                description="[DDF#1]/dashuanfu/B2B/m1903semi&flash&dynamite=kick/qq:838082738 团队死斗: 沙布呂赫"
                status="20/24"
                />
                <ServerCard
                backgroundImage="https://eaassets-a.akamaihd.net/battlelog/battlebinary/gamedata/Tunguska/45/126/MP_Harbor_LandscapeLarge-d382c7ea.jpg"
                mode="TM"
                description="[DDF#1]/dashuanfu/B2B/m1903semi&flash&dynamite=kick/qq:838082738 团队死斗: 沙布呂赫"
                status="20/24"
                />
            </div>
            <div class="server-card-container">
                <AnnouncementCard/>
            </div>
            <div class="server-card-container">
                <TopmapCard/>
            </div>
        </Slider>
    );
};

export default CarouselComponent;
