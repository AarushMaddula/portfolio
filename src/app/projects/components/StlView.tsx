"use client";

import { StlViewer } from "react-stl-viewer";

export default function StlView({resource} : {resource: string}) {
  
  const style = {
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
  }

  return (
    <StlViewer
      style={style}
      orbitControls
      shadows
      url={`/projects/3d-printed-brick/${resource}`}
    />
  )
}