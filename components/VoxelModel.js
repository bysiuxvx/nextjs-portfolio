import { useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF, Environment, OrbitControls } from "@react-three/drei"
import { Box } from "@chakra-ui/react"
import { VoxelContainer } from "./VoxelLoader.js"

function Zoom() {
  useFrame((state) => {
    state.camera.zoom += 0.0001
    state.camera.updateProjectionMatrix()
  })
}

function Dog(props) {
  const ref = useRef()
  const { scene } = useGLTF("/pb-vox-dog.glb")
  useFrame((state, delta) => (ref.current.rotation.y += -0.01))

  return <primitive ref={ref} object={scene} {...props} />
}

const VoxelModel = () => {
  return (
    <VoxelContainer>
      <Canvas linear camera={{ position: [2, 2, -2.5], fov: 30 }}>
        <ambientLight intensity={1.5} />
        <Dog
          position={[-0.1, -0.2, 0]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.15}
        />
        {/* <Dog position={[-0.1, -0.2, 0]} rotation={[0, Math.PI / 2, 0]} scale={0.2} /> */}
        <OrbitControls />
        <Zoom />
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
