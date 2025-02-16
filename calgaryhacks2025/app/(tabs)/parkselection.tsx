import { Text, View,StyleSheet, TextInput, Image,Button, TouchableOpacity} from 'react-native'
import React, { Component } from 'react'

export class parkselection extends Component {

    icons = {
        bike: require('../../assets/images/bikeicon.svg'),
        bus: require('../../assets/images/busicon.svg'),
        walk: require('../../assets/images/walkicon.svg'),
        car: require('../../assets/images/caricon.svg'),
    };
    

    state = {
        currentLocation: null,
        selectedMode: null,
        selectedActivity:null,
    };

    handleSelectMode = (mode) => {
        this.setState({ selectedMode: mode });
    };
    
    handleSubmit = async() =>{
        const {currentLocation, selectedMode, selectedActivity} = this.state;

        const API_URL = 'http://localhost:8082';

        try {
            const response = await fetch(`${API_URL}/submit`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    location: currentLocation,
                    mode: selectedMode,
                    activity: selectedActivity
                })
            });
    
            const data = await response.json();
            if (response.ok) {
                console.log('Data received:', data);
                // Handle data here (e.g., navigate to a new screen, show a message)
            } else {
                throw new Error(data.error || 'Something went wrong');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            // Handle errors here (e.g., show an error message)
        }
    };


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

            <Text style = {styles.pointsText}>0</Text>
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
            
            
            {['bike', 'bus', 'walk', 'car'].map((mode: string) => (
    <TouchableOpacity
        key={mode}
        onPress={() => this.handleSelectMode(mode)}
        style={[
            styles.iconStyle,
            this.state.selectedMode === mode && styles.selectedIcon
                ]}
            >
                <Image
                    source={this.icons[mode]}
                />
            </TouchableOpacity>
        ))}

            
        </View>

        <TextInput 
        placeholder='What activity are you looking for?'
        style = {styles.activity}
        >

        </TextInput>

        <TouchableOpacity
        onPress={this.handleSubmit}
        style ={styles.enter_btn}
        >
            <Text style = {styles.enterText}>Enter</Text>

        </TouchableOpacity>
        

            
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

    pointsText:{
        position: "absolute",
        color: "#597378",
        marginLeft: 45,
        marginTop: 5,
        

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
        fontWeight: "bold",

    },

    formContainer:{
        justifyContent: "center",
        alignItems: "center",
        position:"absolute",
        backgroundColor: "#A8DFC9",
        width: 250,
        height: 300,
        borderRadius: 25,
        marginTop: 250,

    },

    location:{
        position: "absolute",
        backgroundColor:"#FDFDFD",
        width: 240,
        height: 45,
        paddingLeft: 10,
        borderRadius: 25,
        marginBottom: 240,
        textAlign: "left",
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
        marginTop: 10,

    },

    travelText:{
        position: "absolute",
        marginTop: 70,
        marginLeft: 35,
        color:"#729182",
        fontWeight:"bold",

    },

    iconStyle:{
        justifyContent:"center",
        alignItems: "center",
        marginTop: 100,
        margin: 10,
        width: 40,
        height: 35,
        borderRadius:10,
        backgroundColor: "#FDFDFD",

    },

    selectedIcon: {
        borderWidth: 2,
        borderColor: '#7B9E90' // Outline color when an icon is selected
    },

    activity:{
        position: "absolute",
        backgroundColor:"#FDFDFD",
        width: 240,
        height: 50,
        borderRadius: 25,
        marginBottom: -100,
        textAlign: "center",
        color: "#597378",

    },

    enter_btn:{
        justifyContent:"center",
        alignItems:"center",
        borderRadius: 25,
        width:70,
        height:40,
        marginBottom:20,
        backgroundColor: "#7B9E90",
    },

    enterText:{
        color: "white",
        fontWeight: "bold",

    }


    
})

export default parkselection

