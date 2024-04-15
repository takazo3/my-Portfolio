import { useGLTF, useAnimations } from '@react-three/drei'
import { useCallback, useEffect, useMemo, useState } from 'react'

const actionNames = ['Base Stack']

export const Earth = () => {

  const [ scale, setScale ] = useState(0.7)

  const memorizedEarth = useMemo(() => {
    return useGLTF('./earth/scene.gltf')
  })

  const animations = useAnimations(
    memorizedEarth.animations,
    memorizedEarth.scene
  )

  const onScroll = useCallback(() => {
    const percentage =
      window.scrollY / (document.body.scrollHeight - window.innerHeight)
    const newScale = 0.7 + 3 * percentage
    setScale(newScale);
  }, [])

  useEffect(() => {
    actionNames.forEach((actionName) => {
      const action = animations.actions[actionName]
      action.play();
    })

    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [animations, onScroll])

  return (
    <mesh>
      <primitive
        object={memorizedEarth.scene}
        scale={scale}
      ></primitive>
    </mesh>
  )
}
