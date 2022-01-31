import React from 'react'

function Widgets() {
    return (
        <div className="widgets">
            <iframe src="https://www.skynewsarabia.com/" 
            width="340"
            height="100%"
            style={{
                border:"none",
                overflow: "hidden"
            }}
            scrolling="no"
            frameborder="0"
            allowTransparency='yes'
            allow="encrypted-media"
            title="Skynews"
            ></iframe>
        </div>
    )
}

export default Widgets
