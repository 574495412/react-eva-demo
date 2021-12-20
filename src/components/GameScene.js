import React, { useEffect, useRef, useState, useCallback } from "react"
import { useComponents, usePreload } from "@eva/react-eva"
import "@eva/react-eva-a11y"
import Image from "@eva/react-eva-image"
import { useGraphics } from "@eva/react-eva-graphics"
import { useMask, MaskType } from "@eva/react-eva-mask"
import { useTransition } from "@eva/react-eva-transition"
const config = [
  {
    text: "7",
    priceCurriery: "USDT",
    icon: "btc",
    x: 0,
    y: 0,
  },
  {
    text: "2",
    priceCurriery: "KCS",
    icon: "btc",
    x: 73,
    y: 24,
  },
  {
    text: "4000",
    priceCurriery: "",
    icon: "btc",
    x: 117.5,
    y: 86.4,
  },
  {
    text: "7",
    priceCurriery: "USDT",
    icon: "btc",
    x: 117.5,
    y: 163,
  },
  {
    text: "70",
    priceCurriery: "USDT",
    icon: "btc",
    x: 72.8,
    y: 224,
  },
  {
    text: "700",
    priceCurriery: "USDT",
    icon: "btc",
    x: 0,
    y: 247.8,
  },
  {
    text: "700",
    priceCurriery: "USDT",
    icon: "btc",
    x: -73,
    y: 224.5,
  },
  {
    text: "76",
    priceCurriery: "USDT",
    icon: "btc",
    x: -118.4,
    y: 162.5,
  },
  {
    text: "760",
    priceCurriery: "USDT",
    icon: "btc",
    x: -118.4,
    y: 85.5,
  },
  {
    text: "7600",
    priceCurriery: "USDT",
    icon: "btc",
    x: -72.8,
    y: 23.4,
  },
]
export default function GameScene() {
  const [go, setGo] = useState(false)

  const preload = usePreload()
  // const byte2Hex = n => {
  //   var nybHexString = "0123456789ABCDEF"
  //   return (
  //     String(nybHexString.substr((n >> 4) & 0x0f, 1)) +
  //     nybHexString.substr(n & 0x0f, 1)
  //   )
  // }
  const angle = (36 * Math.PI) / 180
  // const drawArc = useCallback(context => {
  //   const radius = 146
  //   const angle = 360 / config.length
  //   const startAngle = (angle * index * Math.PI) / 180
  //   const endAngle = (angle * (index + 1) * Math.PI) / 180
  //   // let x1 = Math.cos(startAngle) * radius
  //   // let y1 = Math.sin(endAngle) * radius
  //   var colour =
  //     "0x" +
  //     byte2Hex((100 * 80) / 255) +
  //     byte2Hex((100 * 100) / 255) +
  //     byte2Hex(((100 / 100) * 80) / 255)
  //   context.graphics.beginFill(index % 2 === 0 ? 0xa3faff : 0x954d95, 0.4)
  //   // context.graphics.lineStyle(4, 0xffd900, 1)
  //   context.graphics.moveTo(0.5, 0.5)
  //   // context.graphics.lineTo(x1, y1)
  //   context.graphics.arc(0, 0, radius, startAngle, endAngle)
  //   context.graphics.x = 78 / 2
  //   context.graphics.y = 62
  //   context.graphics.endFill()
  //   index++
  // }, [])
  // const arcGraphics = useGraphics(drawArc)
  // const arcComponent = useComponents(arcGraphics)
  // console.log(arcComponent)

  const transition = useTransition(({ Transform }) => {
    return {
      transform: [
        {
          name: "rotation",
          component: Transform,
          values: [
            {
              time: 0,
              value: 0,
              tween: "ease-in",
            },
            {
              time: 1500,
              value: angle * 10,
              tween: "ease-out",
            },
            {
              time: 5000,
              value: angle * 40,
            },
          ],
        },
      ],
    }
  })

  // const transformComponent = useComponents(transition)

  const play = useCallback(() => {
    setGo(true)
    transition.play("transform", 1)
  }, [])
  const finish = useCallback(name => {
    name === "transform" && setGo(false)
  }, [])
  useEffect(() => {
    transition.on("finish", finish)
  }, [transition])
  return (
    <scene design={324}>
      <Image
        resource={preload.resources.bigBg}
        anchorX={0.5}
        anchorY={0.5}
        originX={0.5}
        originY={0.5}
        width={324}
        height={324}
      >
        <Image
          x={0.5}
          y={0.5}
          resource={preload.resources.turnTable}
          anchorX={0.5}
          anchorY={0.5}
          originX={0.5}
          originY={0.5}
          width={252}
          height={252}
          components={[transition]}
          // role="button"
          // aria-label={collectConfig.text}
        >
          {config.map((item, index) => {
            return (
              <gameobject
                key={index}
                anchorX={0.5}
                anchorY={0}
                originX={0.5}
                originY={0}
                x={item.x}
                y={item.y}
                width={78}
                rotation={angle * index}
                height={125}
              >
                <Image
                  key={index}
                  resource={preload.resources[item.icon]}
                  anchorX={0.5}
                  anchorY={0.5}
                  originX={0.5}
                  originY={0.5}
                  width={24}
                  height={24}
                  y={-44}
                ></Image>
                <gameobject
                  x={0}
                  y={-16}
                  anchorX={0.5}
                  anchorY={0.5}
                  originX={0.5}
                  originY={0.5}
                  fill="#fff"
                  fontSize={12}
                >
                  {item.text}
                </gameobject>
                <gameobject
                  x={0}
                  y={2}
                  anchorX={0.5}
                  anchorY={0.5}
                  originX={0.5}
                  originY={0.5}
                  fill="#fff"
                  fontSize={12}
                >
                  {item.priceCurriery}
                </gameobject>
              </gameobject>
            )
          })}
        </Image>
        <Image
          x={0.5}
          y={0.5}
          resource={preload.resources.selected}
          anchorX={0.501}
          anchorY={0.05}
          originX={0.5}
          originY={0}
          width={87}
          height={119}
        />
        <Image
          onClick={play}
          visible={!go}
          x={0.5}
          y={0.5}
          resource={preload.resources.go}
          anchorX={0.5}
          anchorY={0.38}
          originX={0.5}
          originY={0}
          width={70}
          height={70}
        />
      </Image>
    </scene>
  )
}
