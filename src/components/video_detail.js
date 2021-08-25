import React from 'react';

const VideoDetail = ({video}) => {
    console.log(`video ${video}`);
    if (!video) return <div>Loading...</div>;

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;
    console.log("does it ever finish?");
    return (
        <div>
            <div className="video-detail col-md-8">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
};

export default VideoDetail;