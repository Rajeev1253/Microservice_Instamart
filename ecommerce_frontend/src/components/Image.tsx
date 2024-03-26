import React from 'react'
interface ImageComponentProps {
    srcs:any
}
const ImageComponent = (props:ImageComponentProps) => {
  return (
    <div>
        <img src={props.srcs}></img>
    </div>
  )
}

export default ImageComponent