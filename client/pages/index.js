import Head from 'next/head'
import Header from "../components/header";
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='bg-black h-full w-screen'>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.0/css/all.min.css" />
      </Head>
      <Header />
    </div>
  )
}
