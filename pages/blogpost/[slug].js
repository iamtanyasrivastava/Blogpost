import React ,{useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import styles from '../../styles/blogPost.module.css'
import * as fs from 'fs';

//step1: find the files corresponding to the slug
//step2: populate them inside the page

const slug = (props) => {
    function createMarkup(c) {
        return {__html: c};
      }
    const[blog, setBlog]=useState(props.myBlog);
    
  return (
    <div className={styles.container}> 
        <main className={styles.main}>
        <h1>{blog && blog.title}</h1>
        <hr/>
    {blog && <div dangerouslySetInnerHTML={createMarkup(blog.content)}></div>}
    
       
        </main>
      </div>
  )

};
export async function getStaticPaths(){
    return{
        paths: [
            {params: {slug:'how-to-learn-flask'}},
            {params: {slug:'how-to-learn-javascript'}},
            {params: {slug:'how-to-learn-nextjs'}},
        ],
        fallback: true //flase or 'blocking'
    };
}
export async function getStaticProps( context) {
    // Fetch data from external API
    const {slug}= context.params;
    let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`,'utf-8')
    
   
    // Pass data to the page via props
    return { props: { myBlog: JSON.parse(myBlog)}, }
  }

export default slug;

