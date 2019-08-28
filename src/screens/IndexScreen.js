    import React,{useContext,useEffect} from  'react';
    import {View,Text,FlatList,StyleSheet,TouchableOpacity} from 'react-native';
    import {Button} from 'react-native-elements';
    import {Feather} from '@expo/vector-icons';

    import {Context as BlogContext} from '../context/BlogContext';
    const  IndexScreen=({navigation})=>{
    const {state,deleteBlogPost,getBlogPosts}=useContext(BlogContext);

    useEffect(()=>{
        getBlogPosts();
    const listener= navigation.addListener('didFocus',()=>{
            getBlogPosts();
        });

        return ()=>{
        listener.remove();
        }
    },[]);

        return <View>


           <FlatList
               keyExtractor={item=>item.id.toString()}
           data={state}
           renderItem={({item})=>{
               return(
               <TouchableOpacity onPress={()=>{navigation.navigate('Show',{id:item.id})}}>
               <View style={styles.blogContainer} >

               <Text>{item.title}</Text>
                   <TouchableOpacity onPress={()=>deleteBlogPost(item.id)}>
                   <Feather name="trash" style={styles.icon}/>
                   </TouchableOpacity>
               </View>
               </TouchableOpacity>)
                   }
           }
           />
        </View>
    }

    IndexScreen.navigationOptions=({navigation})=>{
        return {
            headerRight:<TouchableOpacity onPress={()=>navigation.navigate('Create')}><Feather name="plus" style={styles.plusIcon}/></TouchableOpacity>
        }
    }
        const styles=StyleSheet.create({
            plusIcon:{
                marginRight:15,
              fontSize:22
            },
            icon:{
                fontSize:24
            },
            blogContainer:{
                flexDirection:'row',
                justifyContent:'space-between',
                paddingVertical:20,
                fontSize:18,
                borderBottomWidth:1,
                // borderTopWidth:1,
                borderColor:'#7f8c8d',
                paddingHorizontal:10
            },
            addBtn:{

                paddingLeft:20
            }
        })
    export default IndexScreen;