import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
export default function Body({isDone}) {
  
  return (
       <View style={styles.container}>
           <View style={styles.header}>
           <View style={styles.blank1} />
           
             <View style={styles.name}>
             <View style={styles.blank1} />

              <Image style={styles.image}
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Disk_pack1.svg/1200px-Disk_pack1.svg.png',
              }}>
              </Image>

              <View style={styles.blank1} />
              <View>
              <View style={styles.blank2} />
              <Text style={styles.name1}>
                  Me
              </Text>
              </View>

              <View style={styles.blank} />
              <View style={styles.blank} />

              <View>
              <View style={styles.blank2} />
              <Text style={styles.name1}>
                  2/4
              </Text>
              </View>

             </View>
             
             <View style={styles.picTimer}>
             <View style={styles.blank4} />

              <View style={styles.pic}>
                  {
                      !isDone ? 
                      <TouchableOpacity>
                      <Image style={styles.image1}
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Disk_pack1.svg/1200px-Disk_pack1.svg.png',
              }}>
              </Image>
                      </TouchableOpacity> 
                    : 
                      <TouchableOpacity>
                      <Text style={styles.child}>
                        00:00:00
                      </Text>
                      </TouchableOpacity>
                  }
              </View>
              
             </View>
             <View style={styles.blank1} />

             <View style={styles.name}>
             <View style={styles.blank1} />

              <Image style={styles.image}
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Disk_pack1.svg/1200px-Disk_pack1.svg.png',
              }}>
              </Image>

              <View style={styles.blank1} />
              <View>
              <View style={styles.blank2} />
              <Text style={styles.name1}>
                  Me
              </Text>
              </View>

              <View style={styles.blank} />
              <View style={styles.blank} />

              <View>
              <View style={styles.blank2} />
              <Text style={styles.name1}>
                  2/4
              </Text>
              </View>

             </View>
             
             <View style={styles.picTimer}>
             <View style={styles.blank4} />

              <View style={styles.pic}>
                  {
                      !isDone ? 
                      <TouchableOpacity>
                      <Image style={styles.image1}
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Disk_pack1.svg/1200px-Disk_pack1.svg.png',
              }}>
              </Image>
                      </TouchableOpacity> 
                    : 
                      <TouchableOpacity>
                      <Text style={styles.child}>
                        00:00:00
                      </Text>
                      </TouchableOpacity>
                  }
              </View>
              
             </View>
             <View style={styles.blank1} />

             <View style={styles.name}>
             <View style={styles.blank1} />

              <Image style={styles.image}
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Disk_pack1.svg/1200px-Disk_pack1.svg.png',
              }}>
              </Image>

              <View style={styles.blank1} />
              <View>
              <View style={styles.blank2} />
              <Text style={styles.name1}>
                  Me
              </Text>
              </View>

              <View style={styles.blank} />
              <View style={styles.blank} />

              <View>
              <View style={styles.blank2} />
              <Text style={styles.name1}>
                  2/4
              </Text>
              </View>

             </View>
             
             <View style={styles.picTimer}>
             <View style={styles.blank4} />

              <View style={styles.pic}>
                  {
                      !isDone ? 
                      <TouchableOpacity style={styles.imageContain}>
                      <Image style={styles.image1}
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Disk_pack1.svg/1200px-Disk_pack1.svg.png',
              }}>
              </Image>
                      </TouchableOpacity>
                    : 
                      <TouchableOpacity>
                      <Text style={styles.child}>
                        00:00:00
                      </Text>
                      </TouchableOpacity>
                  }
              </View>
              
             </View>
            
                
           </View>
       </View>
    
      
  );
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'row'
  },
  header:{
      flex:1,
      backgroundColor: 'green',
  },
  coName:{
      alignSelf: 'center'
  },
  name:{
      flex:1,
      flexDirection:'row',
      backgroundColor:'green',
      alignSelf:'stretch'
  },
  picTimer:{
      flex:2,
      flexDirection:'row',
      alignSelf: 'stretch',
      flexDirection:'row',
      backgroundColor: 'pink',
      
  },
  blank:{
   flex:0.43
  },
  blank1:{
   flex:0.05
  },
  image:{
      height:55,
      width:55
  },
  blank2:{
    flex:0.5
  },
  pic:{
    backgroundColor: 'red',
    flex:0.35
  },
  image1:{
    flex: 1,
    width: 50,
    height: 50,
    resizeMode: 'contain'
  },
  imageContain:{
    flex:1,
    alignSelf: 'stretch',
backgroundColor: 'blue'  
},
blank4:{
  flex:0.025
}

  
});
