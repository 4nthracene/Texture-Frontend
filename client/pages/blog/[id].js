import React, { useEffect, useState } from 'react'
import withAuth from '../../helpers/withAuth';
import CodeBlock from '../../components/Codeblock';
import ReactMarkdown from "react-markdown";
import axios from 'axios';
import { useRouter } from 'next/router'

export default withAuth(function Post() {
  const router = useRouter();
  const [post, setPost] = useState(null);
  const { id } = router.query;
  useEffect(async () => {
      const GET_POST = "https://texture-blog.herokuapp.com/posts?id=" + id;
      const _post = await axios.get(GET_POST, { withCredentials: true });
      setPost(_post.data.post);
      console.log(_post.data);
  }, [])
  return (
    <div className='bg-black min-h-screen w-full p-9 flex flex-col items-center justify-center'>
        <h1 className='text-white font-bold text-3xl'>{post && post.title}</h1>
        {
            post && <div className='p-9 bg-white rounded-xl m-4 prose lg:prose-xl w-[80vw]'><ReactMarkdown components={CodeBlock}>{post.content}</ReactMarkdown></div>
        }
    </div>
  )
});
