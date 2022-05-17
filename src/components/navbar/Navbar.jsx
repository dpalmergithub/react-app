import React from 'react'
import './navbar.scss'
import { SearchOutlined,LanguageOutlined,DarkModeOutlined,FullscreenExitOutlined,NotificationsNoneOutlined,ChatBubbleOutlineOutlined,ListOutlined } from '@mui/icons-material'


const Navbar = () => {

    return (
        <div className = "navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="search" placeholder="Search..." />
                    <SearchOutlined className="icon"/>
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageOutlined className="icon"/>
                        English
                    </div>
                    <div className="item">
                        <DarkModeOutlined className="icon"/>
                    </div>
                    <div className="item">
                        <FullscreenExitOutlined className="icon"/>
                    </div>
                    <div className="item">
                        <NotificationsNoneOutlined className="icon"/>
                        <div class="counter">1</div>
                    </div>
                    <div className="item">
                        <ChatBubbleOutlineOutlined className="icon"/>
                        <div class="counter">2</div>
                    </div>
                    <div className="item">
                        <ListOutlined className="icon"/>
                    </div>
                    <div className="item">
                        <div class="avatar"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar