import ReactPlayer from "react-player";
import './responsive-player.css'
import React from 'react'



const ResponsivePlayer = () => {


    
    return (
        <div className='player-wrapper'>
            <ReactPlayer
            className='react-player'
            url='https://www.youtube.com/watch?v=ZQlHaaI0kFU'
            width='100%'
            height='100%'
            />
        </div>
    );


    }


    export default ResponsivePlayer