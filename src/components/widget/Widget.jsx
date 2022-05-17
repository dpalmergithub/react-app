import React from 'react'
import './widget.scss'
import { KeyboardArrowUpOutlined,PersonOutlineOutlined, ShoppingBagOutlined } from '@mui/icons-material'

const Widget = ({type}) => {
    let data;

    switch(type){
        case "user":
            data={
                title:"Users",
                isMoney:false,
                link:"See all users",
                icon:(
                    <PersonOutlineOutlined className="icon"/>
                )
            }
            break;
            case "order":
                data={
                    title:"Orders",
                    isMoney:false,
                    link:"See all orders",
                    icon:(
                        <ShoppingBagOutlined className="icon"/>
                    )
                }
                break;
            default:
                break;
    }


    return (
        <div className="widget">
            <div className="left">
                <span className="title">
                    Users
                </span>
                <span className="counter">
                    100
                </span>
                <span className="link">
                    See All
                </span>
            </div>
            <div className="right">
                <div className="percentage">
                    <KeyboardArrowUpOutlined/>
                    20%
                </div>
                <PersonOutlineOutlined className="icon"/>
            </div>
        </div>
    )
}

export default Widget