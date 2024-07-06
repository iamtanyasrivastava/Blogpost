import React, {useState} from "react";
import styles from "../styles/contact.module.css";


const Contact = () => {
  const [name,setName]= useState('');
  const [email,setEmail]= useState('');
  const [phone,setPhone]= useState('');
  const [desc,setDesc]= useState('');
  const handleSubmit =(e)=>{
    e.preventDefault()
    console.log(name,email,phone,desc)
    const data = {phone, name, email, desc};
    fetch ('http://localhost:3000/api/postcontact',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.text())
    .then(data =>{
      console.log('Success:', data);
      alert("thanks for contacting us");
      setPhone('')
      setName('')
      setEmail('')
        setDesc('')
      
    })
    .catch((error)=>{
      console.error('Error:', error);
    });
    
  }
  const handleChange =(e)=>{
    if (e.target.name == 'phone'){
      setPhone(e.target.value)
    }
    else if (e.target.name == 'email'){
      setEmail(e.target.value)
    }
    else if (e.target.name == 'name'){
      setName(e.target.value)
    }
    else if (e.target.name == 'desc'){
      setDesc(e.target.value)
    }
  }
    return (
    <div className={styles.container}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.mb3}>
          <label htmlFor="name" className={styles.formlabel}>
            Enter your name here
          </label>
          <input
            type="text"
            className={styles.input}
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
            aria-describedby="emailHelp"
          />
        </div>

        <div className={styles.mb3}>
          <label htmlFor="email" className={styles.formlabel}>
            Email address
          </label>
          <input
            type="email"
            className={styles.input}
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            aria-describedby="emailHelp"
          />
        </div>

        <div className={styles.mb3}>
          <label htmlFor="Phone" className={styles.formlabel}>
            Phone
          </label>
          <input
            type="phone"
            className={styles.input}
            id="phone"
            name="phone"
            value={phone}
            onChange={handleChange}
          />
        </div>

        <div className={styles.mb3} >
          <label className={styles.formlabel} htmlFor="desc">
            Elaborate your concern
          </label>
          <br></br>
          
            <textarea
            className={styles.input}
            placeholder="write your concern here............"
            id="desc"
            value={desc}
            name="desc"
            rows="1" cols="45"
            onChange={handleChange}
          />
           <button type="click here" className={styles.btn}>
          Submit
        </button>
        
       </div>
       
      </form>
    </div>
  );
};

export default Contact;
