import React, { Component } from "react"
import { Eva } from "@eva/react-eva"
import Image, { useImageResource } from "@eva/react-eva-image"
import logo from "./logo.svg"
import "./App.css"
// import Img from "./Img"

const App = props => {
  const state = {
    counter: 0,
    rotation: 0,
    txt: "",
    resource: useImageResource({
      image:
        "https://gw.alicdn.com/tfs/TB1DNzoOvb2gK0jSZK9XXaEgFXa-658-1152.webp",
    }),
  }

  return (
    <Eva width="300" height="400">
      <scene>
        <Image
          x={150}
          y={200}
          width={300}
          height={400}
          rotation={state.rotation}
          originX={0.5}
          originY={0.5}
          resource={state.resource}
        >
          <Image
            x={0}
            y={0}
            width={100}
            height={100}
            rotation={0}
            originX={0.5}
            originY={0.5}
            anchorX={0.5}
            anchorY={0.5}
            resource={state.resource}
          />
        </Image>
        <gameobject color="yellow">{state.txt}</gameobject>
      </scene>
    </Eva>
  )
}

export default App
