import {useRouter} from 'next/router';
import Layout from '../components/Layout'
import Post from './p/[id]';
import axios from 'axios';


const post = (props) => {
    console.log(props);

    const router = useRouter();
    return (
        <Layout>
            <h1>{router.query.title}</h1>

            <p>This is wonderful Post</p>
            
        </Layout>
    )
}

Post.getInitialProps = async(context)=>{
    console.log('context from post', context)
    const {id} = context.query;

    const res = await axios.get(`https://api.tvmaze.com/shows/${id}`);

    const show = res.data;

    console.log('Post show:', show.data[0]);

    return {
        data:show
    }

}

export default post
