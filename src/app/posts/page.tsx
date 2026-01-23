'use client'
import { ICardPosts } from "@/app/posts/interfacePosts";
import { useState, useEffect } from "react";
import clsx from 'clsx';
import React from 'react';
import {Moon, Sun} from 'lucide-react';
export default function Posts() {
 const [mode, setMode] = React.useState<'dark' | 'light'>('light');

  function toggleMode() {
    return mode === 'dark' ? setMode('light') : setMode('dark');
  }



    const [postData, setPostData] = useState<ICardPosts[]>([]);
    const [query, setQuery]= useState<string>("")

  useEffect(() => {
    async function getPosts(): Promise<void> {
      try {
        const response=await fetch('https://jsonplaceholder.typicode.com/posts');

        const data:ICardPosts[]= await response.json()
        const filterData = data.filter(post =>
          post.title.toLowerCase().includes(query.toLowerCase())
        );
        setPostData(filterData);

      } catch (error) {
     console.error(error);

      }
    }

    getPosts()
  }, [query]);

  return (
    <main className={clsx(mode === 'dark' ? 'bg-slate-900' : 'bg-gray-100', )}>
   <section className='min-h-screen'>
    <div className='  m-auto ' >
      <header className={clsx(mode === 'dark' ? 'bg-slate-800 text-gray-200 flex items-center p-4 gap-2 justify-around md:justify-between   mb-4 shadow ' : 'bg-white flex items-center p-4 gap-2  justify-around  md:justify-between  mb-4 shadow  text-slate-700' )}>
        <div className='flex items-center   gap-2 justify-around '>
        <h1 className='text-lg font-medium md:font-bold '>Найти</h1>
        <input
        value={query}
        onChange={(e)=> setQuery(e.target.value)}


        className='rounded-2xl h-6 md:h-8 w-[8rem] md:w-1/1 ' placeholder='Вводите текст'/>

        </div>
        <button className='' onClick={toggleMode}>{mode === 'dark' ? <Sun/> :<Moon/>} </button>

      </header>
    <div className='flex gap-2 flex-row flex-wrap justify-around '>

      {postData.slice(0,26).map(post => (
        <div key={post.id}
        className={clsx(mode === 'dark' ? 'bg-slate-800 text-gray-300 rounded-md cursor-pointer p-2 my-2 md:w-[45%] w-[90%]    text-xs flex flex-col space-y-4 hover:shadow-violet-500 hover:shadow-sm  ' : 'bg-white shadow-md rounded-md p-2 my-2  md:w-[45%] w-[90%] text-xs    flex flex-col space-y-4 hover:shadow-slate-500 hover:shadow-sm  cursor-pointer', )}
        >
          <h2
          className={clsx(mode === 'dark' ? 'text-gray-300 font-bold text-sm' : 'text-slate-600 font-bold text-sm', )}
          > {post.title.charAt(0).toUpperCase() + post.title.slice(1)}</h2>
          <p className='font-light'>{post.body}</p>
        </div>
      ))}
    </div>
    </div>

</section>
    </main>
  );
}
