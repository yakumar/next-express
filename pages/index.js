import React, {useState} from "react";
import Link from "next/link";

import Header from "../components/Header";
import Layout from "../components/Layout";
import axios from "axios";
import styles from '../styles/index.module.scss';

// const PostLink = props => (
//     <li>
//       <Link href="/p/[id]" as={`/p/${props.id}`}>
//         <a>{props.id}</a>
//       </Link>
//     </li>
//   );

const Index = (props) => {
  // console.log(props);

  const [myFile, setMyFile] = useState('');

  const letsSubmit = (e) => {
    e.preventDefault();



    const file = document.getElementById("file-field").files[0];
    setMyFile(file);

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    //    console.log(file)
    const data = new FormData();
    data.append("meme", file);
    const url = "http://localhost:8080/uploadFile";
    axios.post(url, data, config).then((res) => {
      console.log("from Client data:", res.data);
    });

  };

  return (
    <Layout>
      <form onSubmit={letsSubmit} className={styles.form}>
        <input type="file" id="file-field" name="meme" value={myFile} />
        <input type="submit" value="submit" />
      </form>
    </Layout>
  );
};

// Index.getInitialProps = async()=>{

//     let res = await axios.get('https://api.tvmaze.com/search/shows?q=batman')

//     let data = await res.data;

//     // console.log("show Data ::", data);

//     return {
//         data:data
//     }

// }

export default Index;

// <ul>
// <PostLink id="Hello-Nextjs" />
// <PostLink id="Learn-Next.js-is-awesome" />
// <PostLink id="Deploy-apps-with-Zeit" />
// </ul>
