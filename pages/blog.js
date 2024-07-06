import React, { useEffect, useState } from "react";
import styles from "../styles/blog.module.css";
import Link from "next/link";
import * as fs from "fs";
import InfiniteScroll from "react-infinite-scroll-component";

const Blog = (props) => {
  console.log(props);
  const [blogs, setBlogs] = useState(props.allBlogs);
  const [count, setCount] = useState(2);

  const fetchData = async () => {
    let d = await fetch(`http://localhost:3000/api/blogs/?count=${count + 2}`);
    setCount(count + 2);
    let data = await d.json();

    setBlogs(data);
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <InfiniteScroll
          dataLength={blogs.length} //This is important field to render the next data
          next={fetchData}
          hasMore={props.allCount !== blogs.length}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
          // below props only if you need pull down functionality
        >
          {blogs.map((blogItem) => {
            return (
              <div key={blogItem.slug}>
                <Link legacyBehavior href={`/blogpost/${blogItem.slug}`}>
              
                  <h3 className={styles.blogItemh3}>{blogItem.title}</h3>
                
                </Link>
                <p className={styles.blogItemp}>
                  {blogItem.metadesc.substr(0, 140)}...
                </p>
                <Link href={`/blogpost/${blogItem.slug}`}>
                  <button className={styles.button}>Read More...</button> 
                </Link>
              </div>
            );
          })}
        </InfiniteScroll>
      </main>
    </div>
  );
};

export async function getStaticProps(context) {
  // Fetch data from the blogdata directory
  let data = await fs.promises.readdir("blogdata");
  let allCount = data.length;
  let myFile;
  let allBlogs = [];
  for (let index = 0; index < 2; index++) {
    const item = data[index];
    console.log(item);
    myFile = await fs.promises.readFile("blogdata/" + item, "utf-8");
    allBlogs.push(JSON.parse(myFile));
  }

  // Pass data to the page via props
  return {
    props: { allBlogs, allCount },
  };
}

export default Blog;
