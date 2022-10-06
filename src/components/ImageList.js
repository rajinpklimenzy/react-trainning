import React from "react";

const ImageList = (props) => {
console.log(props)
const images = props.Images.map((image)=>{

    return <img src={image.webformatURL} width="250px" height="200" alt="image"/>
})
    return(
        <div>{images}</div>
    )
}

export default ImageList;
