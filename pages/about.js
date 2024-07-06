import React from "react";
import styles from "../styles/about.module.css";

const About = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.center}>About Hunting Coder</h1>
      <div className={styles.dive}>
      <h2 className={styles.h2}>Introduction</h2>
      <p >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda id
        consequuntur magnam architecto fugiat mollitia tenetur quia dolores
        neque aperiam aliquid saepe porro, nemo provident deleniti, repellat
        ipsum, quasi et debitis. Omnis, sit aperiam ipsam suscipit ex deserunt
        temporibus voluptates, minima enim dolorum eveniet dolor.Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Quam, dignissimos laborum
        sed laudantium consequatur quod ullam quaerat molestias unde omnis
        repellendus, sit enim debitis.
      </p>
      </div>
      <div className={styles.dive}>
        <h2 className={styles.h2}>Services Offered</h2>
      <p>
        Omnis, sit aperiam ipsam suscipit ex deserunt temporibus voluptates,
        minima enim dolorum eveniet dolor.Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Quam, dignissimos laborum sed laudantium consequatur
        quod ullam quaerat molestias unde omnis repellendus, sit enim debitis.
      </p>
      <p>Some of the services are:</p>
      <ul>
        <li>service1</li>
        <li>service1</li>
        <li>service1</li>
        <li>service1</li>
        <li>service1</li>
        <li>service1</li>
      </ul></div>
      
<div className={styles.dive}>
<h2 className={styles.h2}>Contact Us</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum,
        dolor sit amet consectetur adipisicing elit. Dolorum nostrum recusandae
        facilis officiis ducimus facere soluta voluptatem. Labore vel quis ut?
        Aspernatur, id fugiat odio commodi ipsam officia temporibus at. Quam,
        dignissimos laborum sed laudantium consequatur quod ullam quaerat
        molestias unde omnis repellendus, sit enim debitis.
      </p>
      
</div>
      
    </div>
  );
};

export default About;
