import Head from 'next/head'
import Header from "../components/header";
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css'

export default function Home(props) {
  return (
    <div className='bg-black h-full w-screen'>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.0/css/all.min.css" />
      </Head>
      <Header rootLevelProps={props} />
      <AboutMe />
      <Projects />
      <Footer />
    </div>
  )
}
