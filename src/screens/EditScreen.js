import React,{useContext,useState} from 'react';
import {View,Text,StyleSheet,TextInput} from 'react-native';
import {Context as blogContext} from  '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';
const EditScreen =({navigation})=>{
    const  id=navigation.getParam('id');
    const {state,editBlogPost}=useContext(blogContext);
    const blogPost=state.find(blogPost=>blogPost.id===id);

    return <BlogPostForm

        initialValues={{title:blogPost.title,content:blogPost.content}}
        onSubmit={(title,content)=>editBlogPost(id,title,content,()=>navigation.pop() )}/>
}

const styles=StyleSheet.create({
    containerBtn:{
        marginTop:30,
        width:200,
        alignSelf:'center',
    },
    input:{
        fontSize:18,
        borderWidth:1,
        borderColor:'black',
        marginHorizontal:15

    },

    label:{
        fontSize:20,
        margin:15
    }
})

export default EditScreen;