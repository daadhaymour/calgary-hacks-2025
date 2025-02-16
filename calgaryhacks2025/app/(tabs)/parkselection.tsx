import { Text, View,StyleSheet, TextInput, Image} from 'react-native'
import React, { Component } from 'react'

export class parkselection extends Component {
  render() {
    return (
      <View style = {styles.background}>
        <View style ={styles.header}>
            <Text style={styles.text1}>Figure out a park</Text>

            <View style ={styles.points}>
            <Image
            style = {styles.pointsIcon}
            source={require("../../assets/images/leaf.svg")}
            />
            </View>
        </View>

        <Image
        
        style = {styles.mainImage}
        source={require('../../assets/images/handearth.svg')}
        ></Image>
        <View className='form' style = {styles.formContainer} >
            <TextInput
            placeholder='Current location'
            style = {styles.location}
            ></TextInput>
        
        <View style={styles.travelChoice}>
            <Text style={styles.travelText}>How are you getting there?</Text>
            
            <Image

            style = {styles.iconStyle}
            source={require('../../assets/images/bikeicon.svg')}
            
            />

            <Image
            style = {styles.iconStyle}
            source={require('../../assets/images/busicon.svg')}
            />

            <Image
            style = {styles.iconStyle}
            source={require('../../assets/images/walkicon.svg')}
            />

            <Image
            style = {styles.iconStyle}
            source={require('../../assets/images/caricon.svg')}
            />

            
        </View>

        <TextInput 
        placeholder='What activity are you looking for?'
        style = {styles.activity}
        >

        </TextInput>

            
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({

    background:{
        flex: 1,
        backgroundColor:"#D1F6E7",
        alignItems: "center",
        justifyContent: "center",


    },
    header:{
        backgroundColor: "#8FB0C4",
        width: 305,
        height: 133,
        borderRadius: 25,
        marginBottom: 470,
        
    },
    

    points:{
        position:"absolute",
        marginLeft:200 ,
        marginTop: 80,
        width: 90,
        height: 30,
        borderRadius: 15,
        backgroundColor:"#F1F1F1",

    },

    pointsIcon:{
        marginTop: 2,

    },

    text1:{
        color: '#4D856F',
        fontSize: 22,
        marginRight: 100,
        textAlign: 'center',
        marginTop: 75,

    },

    formContainer:{
        justifyContent: "center",
        alignItems: "center",
        position:"absolute",
        backgroundColor: "#A8DFC9",
        width: 250,
        height: 280,
        borderRadius: 25,
        marginTop: 230,

    },

    location:{
        position: "absolute",
        backgroundColor:"#FDFDFD",
        width: 240,
        height: 40,
        borderRadius: 25,
        marginBottom: 200,
        textAlign: "center",
        color: "#597378",

    },

    mainImage:{
        position: "absolute",
        marginBottom: 190,
    },


    travelChoice: {
        flex: 1,
        flexDirection: "row",
        marginRight: 5,
        marginTop: 30,

    },

    travelText:{
        position: "absolute",
        marginTop: 70,
        marginLeft: 35,
        color:"#729182",
        fontWeight:"bold",

    },

    iconStyle:{
        marginTop: 100,
        margin: 10,
        width: 40,
        height: 35,
        borderRadius:10,
        backgroundColor: "#FDFDFD",
    },

    activity:{
        position: "absolute",
        backgroundColor:"#FDFDFD",
        width: 240,
        height: 50,
        borderRadius: 25,
        marginBottom: -170,
        textAlign: "center",
        color: "#597378",

    }
    
})

export default parkselection

