import React, { useState, useCallback, Fragment } from "react"
import { Eva } from "@eva/react-eva"
import usePreloadResources from "./components/Preload"
import GameScene from "./components/GameScene"
import LoadingScene from "./components/LoadingScene"
import "./App.css"

function App() {
  const preloadResources = usePreloadResources()

  const [loadingComplete, setLoadingComplete] = useState(false)
  const onComplete = useCallback(() => setLoadingComplete(true), [])

  return (
    <div className="App">
      <Eva
        preloadResources={preloadResources}
        onPreloadComplete={onComplete}
        width={700}
        height={700}
        transparent={true}
        HiRes={true}
        className="eva"
      >
        {!loadingComplete ? (
          <LoadingScene></LoadingScene>
        ) : (
          <Fragment>
            <GameScene />
          </Fragment>
        )}
      </Eva>
    </div>
  )
}

export default App
