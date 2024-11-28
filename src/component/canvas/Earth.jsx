/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF, Preload, OrbitControls } from '@react-three/drei'
import CanvasLoader from '../Loader'
const Earth = () => {
  const earth = useGLTF('./planet/scene.gltf')
  return (
    <>
      <primitive
        object={earth.scene}
        scale={2.5}
        position-y={0}
        rotation-y={0}
      />
    </>
  )
}
const EarthCanvas = () => {
  return (
    <Canvas
      frameloop='demand'
      shadows
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 6, 3],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotate
        />
        <Earth />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}
export default EarthCanvas
