import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF, OrbitControls } from "@react-three/drei"
import { VoxelContainer } from "./VoxelLoader.js"

const Zoom = () => {
  useFrame((state) => {
    state.camera.zoom += 0.0001
    state.camera.updateProjectionMatrix()
  })
}

const Dog = (props) => {
  const ref = useRef()
  const { scene } = useGLTF("/pb-vox-dog.glb")

  return <primitive ref={ref} object={scene} {...props} />
}

const VoxelModel = () => {
  return (
    <VoxelContainer>
      <Canvas
        linear
        camera={{
          position: [2, 2, 3],
          fov: 30,
        }}
      >
        <ambientLight intensity={1.5} />
        <Dog position={[-0.1, -0.2, 0]} scale={0.15} />
        <OrbitControls
          autoRotate
          autoRotateSpeed={1.3}
          minDistance={1.5}
          maxDistance={4}
        />
      </Canvas>
    </VoxelContainer>
  )
}

export default VoxelModel

// import { useEffect, useState, useRef } from "react"

// import { Canvas, useFrame } from "@react-three/fiber"
// import { useGLTF, Environment, OrbitControls } from "@react-three/drei"

// import { loadGLTF } from "../lib/model-loader"

// import { VoxelSpinner, VoxelContainer } from "./VoxelLoader"

// function Zoom() {
//   useFrame((state) => {
//     state.camera.zoom += 0.0001
//     state.camera.updateProjectionMatrix()
//   })
// }

// useEffect(() => {
//   const Dog = (props) => {
//     const ref = useRef()
//     // const { scene } = useGLTF("pb-vox-dog.glb")

//     loadGLTF(scene, "/pb-vox-dog.glb").then(() => setLoading(false))

//     useFrame((state, delta) => (ref.current.rotation.y += -0.01))

//     return <primitive ref={ref} object={scene} {...props} />
//   }
// })
// const VoxelModel = () => {
//   const refContainer = useRef()
//   const [loading, setLoading] = useState(true)

//   return (
//     <VoxelContainer ref={refContainer}>
//       {loading && <VoxelSpinner />}
//     </VoxelContainer>
//   )
// }

// export default VoxelModel
