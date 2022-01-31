import { Avatar } from '@material-ui/core'
import React from 'react'
import { useStateValue } from './StateProvider';
import "./Story.css"


function Story({image, profileSrc, title}) {

    const [{user}, dispatch] = useStateValue();

    return (
        <div style={{backgroundImage: `url(${image})`}} className="story">
            <Avatar className="story__avatar" src={user.photoURL} />
            <h4>{title}</h4>
         
        </div>
    )
}

export default Story
