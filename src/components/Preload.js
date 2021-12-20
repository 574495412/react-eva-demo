import { useImageResource } from "@eva/react-eva-image"

export default function usePreloadResources() {
  return {
    turnTable: useImageResource({
      image: "./image/turnTable.png",
    }),
    selected: useImageResource({
      image: "./image/selected.png",
    }),
    go: useImageResource({
      image: "./image/go.png",
    }),
    btc: useImageResource({
      image: "./image/btc.png",
    }),
    bigBg: useImageResource({
      image: "./image/turnTable_bg.png",
    }),
  }
}
