import Head from 'next/head'
import { ToastContainer, toast } from "react-toastify";
import useUser from '../helpers/useUser';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from "../components/header";
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css'

export default function Home(props) {
  const router = useRouter();
  useEffect(async () => {
    const [isAuth, user] = await useUser();
    if (router.query.auth == "failed" && isAuth == null) {
      toast("You need to sign in", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
  }, [router.query])

  return (
    <div className='bg-black h-full w-screen relative'>
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
