/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { useState, useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Preload, Points, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'
const Stars = (props) => {
  const ref = useRef()
  const sphere = random.inSphere(new Float32Array(5000), { radius: 1.2 })

  useFrame((stae, delta) => {
    ref.current.rotation.x -= delta / 10
    ref.current.rotation.z -= delta / 15
  })
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          color='#fffff'
          transparent
          size={0.002}
          depthWrite={false}
          sizeAttenuation={true}
        />
      </Points>
    </group>
  )
}
const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  )
}
export default StarsCanvas
