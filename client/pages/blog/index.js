import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import Head from 'next/head';
import axios from "axios"
import Checkbox from '../../components/checkbox';
import format from '../../helpers/formatDate';
import withAuth from '../../helpers/withAuth';

const index = (props) => {
  const [loading, setLoading] = useState(true);
  const [tags, setTags] = useState([]);
  const [allPosts, setAllPosts] = useState(null);
  useEffect(async () => {
    const GET_ALL_URI = "http://localhost:8000/posts/all";

    const res = await axios.get(GET_ALL_URI, { withCredentials: true })
    res.data.forEach(post => {
      const postTags = post.tags;
      postTags.forEach(tag => {
        if (!tags.includes(tag)) {
          const _tags = tags;
          _tags.push(tag)
          setTags(_tags);
        }
      })
    });
    setAllPosts(res.data);
    setLoading(false);
  }, [])
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.0/css/all.min.css" />
      </Head>
      <div className='p-[90px] min-h-screen relative grid grid-cols-5 grid-rows-4 gap-6 w-full bg-black'>
        <div className="title col-span-5 p-5 flex items-center">
          <img src="/rocket.svg" className='hidden md:inline-block w-[180px]' alt="" />
          <h1 className="text-white uppercase font-bold text-5xl"> Blogs! </h1>
        </div>
        <div className="sidebar hidden lg:flex lg:flex-col border-r-2 border-white col-span-1 row-span-3">
          <h1 className="text-white uppercase text-2xl">Filter</h1>
          <div className="flex flex-col justify-center mt-7 gap-6">

            {
              tags.length > 0 &&
              tags.map((tag, i) => {
                return <Checkbox id={i} key={i} text={tag} />
              })
            }
          </div>
        </div>
        {/*  md:grid-cols-2 grid-cols-1 lg:grid-cols-3*/}
        <div className="content col-span-4 row-span-3 grid auto-cols-fr">
          {
            !loading &&
            allPosts.map((post, i) => {
              console.log("post:", post);
              return (
                <div className="bg-white max-h-[500px] rounded-xl flex relative gap-5 justify-around p-5">
                  <img src={post.imageUrl} className="hidden lg:inline-block w-[40%] rounded-xl" alt="" />
                  <div className="content flex flex-col justify-center">
                    <h1 className="text-black font-extrabold">
                      {post.title}
                    </h1>
                    <p className='text-black font-light max-w-[400px] overflow-hidden'>
                      {post.description}
                    </p>
                    <hr />
                    <div className="flex items-center justify-between">
                      <p className="font-bold text-gray-500 ">{format(post.createdAt)}</p>
                      <Link href={`/blog/${post._id}`} className="uppercase font-light text-black">Read More...</Link>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default withAuth(index);