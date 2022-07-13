import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Test from './sub/test'
import { Canvas } from '@react-three/fiber'

export default function Home() {
  
  return (
    <div className={styles.container}>
      <Test />
      <Canvas style={
        {
          width : '100%',
          height : '100%'
        }
      }>
        <pointLight position={[10, 10, 10]} />
        <mesh>
          <sphereBufferGeometry />
          <meshStandardMaterial color="red" />
        </mesh>
        <mesh position={[1, 1, 1]}>
          <sphereBufferGeometry />
          <meshStandardMaterial color="red" />
        </mesh>
        <mesh position={[2, 2, 2]}>
          <sphereBufferGeometry />
          <meshStandardMaterial color="red" />
        </mesh>
      </Canvas>
    </div>
  )
}
