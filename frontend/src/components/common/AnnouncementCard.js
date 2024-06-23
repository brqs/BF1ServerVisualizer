import React from 'react';

function AnnouncementCard() {
    const announcements = [
        { title: "系统维护公告", time: "2024-06-24 10:00" },
        { title: "版本更新通知", time: "2024-06-23 15:00" },
        { title: "安全警告", time: "2024-06-22 13:20" },
        { title: "隐私政策更新", time: "2024-06-21 11:00" },
        { title: "活动公告", time: "2024-06-20 09:30" },
    ];

    return (
        <div className="announcement-card">
            <h1>DDF公告板</h1>
            <div className="announcements">
                {announcements.map((announcement, index) => (
                    <div key={index} className="announcement">
                        <p className="title">{announcement.title}</p>
                        <p className="time">{announcement.time}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AnnouncementCard;
