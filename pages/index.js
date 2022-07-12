import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Test from './sub/test'

export default function Home() {
  return (
    <div className={styles.container}>
      Hello Next.js
      <h1>/pages/index.js</h1>
      <ul>
        <li><a href="/sub">/pages/sub/index.js</a></li>
        <li><a href="/sub/about">/pages/sub/about.js</a></li>
        <li><a href="/sub/1">/pages/sub/[id].js</a></li>
      </ul>

      <Test />
    </div>
  )
}
