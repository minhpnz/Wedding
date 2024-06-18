import React from 'react'
import VideoModal from '../ModalVideo'
import videoBg from '../../images/video.mp4'

const VideoSection = (props) => {
    return(
        <section className="wpo-video-sections">
            <video id='videobg' src={videoBg} autoPlay loop muted/>
        </section>
    )
}

export default VideoSection;