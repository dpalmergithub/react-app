import React from 'react'
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';

const Sidebar = () => {

    return (
        <div className = "sidebar">
            <div className = "top">
                <span className = "logo">React Admin</span>
            </div>
            <hr/>
            <div className = "center">
                <ul>
                    <p class="title">Main</p>
                    <li>
                        <DashboardIcon className="icon"/>
                        <span>
                            Dashboard
                        </span>
                    </li>
                    <p class="title">Lists</p>
                    <li>
                        <span>
                            Users
                        </span>
                    </li>
                    <li>
                        <span>
                            Logs
                        </span>
                    </li>
                    <li>
                        <span>
                            Settings
                        </span>
                    </li>
                    <p class="title">User</p>
                    <li>
                        <span>
                            Profile
                        </span>
                    </li>
                    <li>
                        <span>
                            Logout
                        </span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption"></div>
                <div className="colorOption"></div>
            </div>
        </div>
    )
}

export default Sidebar