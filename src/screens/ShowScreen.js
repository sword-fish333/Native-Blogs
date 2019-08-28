import React,{useContext} from  'react';
import {View,Text,FlatList,StyleSheet,TouchableOpacity} from 'react-native';
import {Context as blogContext} from '../context/BlogContext';
import {Feather} from '@expo/vector-icons';

const ShowScreen=({navigation})=>{
    const {state}=useContext(blogContext);
    const blogPost=state.find(blogPost=>blogPost.id===navigation.getParam('id'));
    return <View>
        <Text style={styles.title}>{blogPost.title}</Text>
        <Text style={styles.content}>{blogPost.content}</Text>
    </View>
}
  ShowScreen.navigationOptions=({navigation})=>{
    return {
        headerRight:(<TouchableOpacity onPress={()=>navigation.navigate('Edit',{id:navigation.getParam('id')})}>
        <Feather name="edit-3"  style={styles.editIcon}/>
        </TouchableOpacity>
        )
    }
    }
const styles=StyleSheet.create({
    title:{
        textAlign:'center',
        fontSize:24,
        textDecorationLine:'underline',
        marginVertical:15
    },
    content:{
        paddingHorizontal:10,
        fontSize:18
    },
    editIcon:{
        marginRight:15,
        fontSize:22
    },
});

export default ShowScreen;