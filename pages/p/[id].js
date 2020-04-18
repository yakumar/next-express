    import React from 'react';
    import {useRouter} from 'next/router';
    import Layout from '../../components/Layout'
    import axios from 'axios'


   const Post = (props)=>{

console.log(props)

    const letsSubmit = (e)=>{
        e.preventDeafult();
        console.log('submitted')

    }


        return(
            <Layout>

                 <form onSubmit={letsSubmit}>
                    <input type="text" />
                 
                 </form>


            
            </Layout>

        )
    }

    // Post.getInitialProps = async(context)=>{
    //     console.log('context from post', context)
    //     const {id} = context.query;
    
    //     const res = await axios.get(`https://api.tvmaze.com/shows/${id}`);
    
    //     const show = res.data;
    
    //     console.log('Post show:', show);
    
    //     return {
    //         data:show
    //     }
    
    // }
    

     export default Post;