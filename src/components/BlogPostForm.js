import React,{useState} from 'react';
import {View,Text,StyleSheet,TextInput} from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/AntDesign';


const BlogPostForm=({onSubmit,initialValues})=>{
    const [title,setTitle]=useState(initialValues.title);
    const [content,setContent]=useState(initialValues.content);
    return <View>
        <Text style={styles.label}>Title:</Text>
        <TextInput style={styles.input}  value={title} onChangeText={(text)=>setTitle(text)}/>
        <Text style={styles.label}>Content:</Text>
        <TextInput style={styles.input}  value={content} onChangeText={(text)=>setContent(text)}/>
        <View style={styles.containerBtn}>
            <Button
                onPress={()=>onSubmit(title,content)}
                raised
                icon={
                    <Icon
                        name="addfile"
                        size={15}
                        color="white"
                    />
                }
                title="Save Blog Post"
            />
        </View>
    </View>
}

BlogPostForm.defaultProps={
    initialValues:{
        title:'',
        content:''
    }
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

export default BlogPostForm;