import React from "react";
import NorthImage from "./images/northern-hemisphere.png";
import SouthImage from "./images/southern-hemisphere.png";

const hemisphereConfig = {
    Northern:{
        text:'it is in Northern Hemisphere',
        picture:NorthImage
    },
    Southern:{
        text:'it is in southern Hemisphere',
        picture:SouthImage
    }
}
const HemisphereDisplay = ({latitude}) => {
    
   // const hemispere = latitude>0 ? 'Northern hemisphere' : 'southern hemishere'
    const hemispere = latitude > 0 ? 'Northern' : 'Southern'
    const {text , picture } = hemisphereConfig[hemispere]
    return(<div>
        {text}
        <img src={picture} />
    </div>)
}

export default HemisphereDisplay;