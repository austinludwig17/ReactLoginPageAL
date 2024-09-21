import { Text, SafeAreaView, StyleSheet, TextInput, Button, View } from 'react-native';
import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// You can import supported modules from npm
import { Card } from 'react-native-paper';




export default function App() {
  const [fname, setfName] = useState('');
  const [lname, setlName] = useState('');
  const [u_email, setEmail] = useState('');
  const [passWord, setpassWord] = useState('');
  const [tempPassWord, setTempPassWord] = useState('');
  const [greeting, setGreeting] = useState('');
  const [showPassword, setShowPassword] = useState(true); // New state for password visibility
  const [showTempPassword, setShowTempPassword] = useState(true); // New state for password visibility
  const [passWordMatch] = useState(true);  // Initially assume they match
  const [isLogin, setIsLogin] = useState(true); // Toggle between login/signup

  const handlePress = () => {
    setGreeting("   " + `Thank you, ${fname} ${lname}, Congratulations on creating your account!"`);
  };

  const signInReturn = () => {
    setGreeting(`Going back to sign in...`);
  };

  //Handles shown passwords on press
  const handleShow = () => {
    setShowPassword(!showPassword); // Toggle password visibility
  };
  const handleShowTemp = () => {
    setShowTempPassword(!showTempPassword); // Toggle password visibility
  };

  return (
    <SafeAreaView style={styles.container}>

<Text style={styles.head}>{isLogin ? "Login" : "Sign Up"}</Text>
    

    {!isLogin && (
      <>
        <Text // <----FNAME FIELD---->
          style={styles.labels}>Enter your first name : </Text>
        <TextInput
          style={styles.uInput}
          onChangeText={text => setfName(text)}
          value={fname}
          placeholder="First Name"
        />
        

        <Text // <----LNAME FIELD---->
          style={styles.labels}>Enter your last name : </Text>
        <TextInput
          style={styles.uInput}
          onChangeText={text => setlName(text)}
          value={lname}
          placeholder="Last Name"
        />
      </>
    )}
    

    <Text // <----EMAIL FIELD---->
      style={styles.labels}>Enter your email address : </Text>
    <TextInput
      style={styles.uInput}
      onChangeText={text => setEmail(text)}
      value={u_email}
      placeholder="Email"
    />

  
    <Text  // <----PASSWORD FIELD---->
      style={styles.labels}>Enter your password : </Text>
    <TextInput onPressIn={handleShow} onPressOut={handleShow}
      style={styles.uInput}
      onChangeText={text => setpassWord(text)}
      value={passWord}
      secureTextEntry={showPassword}
      placeholder="Password"
    />

    {!isLogin && (
      <>
        <Text // <----PASSWORD CONFIRM FIELD---->
        style={styles.labels}>Re-Enter your password : </Text>
        <TextInput onPressIn={handleShowTemp} onPressOut={handleShowTemp}
          style={styles.uInput}
          onChangeText={text => setTempPassWord(text)}
          value={tempPassWord}
          secureTextEntry={showTempPassword}
          placeholder="Password"
        />
      </>
    )}

    {passWord && tempPassWord && passWord !== tempPassWord && (
        <Text style={{ color: 'red' }}>Passwords do not match.</Text> //More confusing than I expected :/ Tells if passwords don't match
        
      )}


    <View style={styles.buttonContainer}>
      <View style={styles.buttonWrapper}>
        <Button
          title={isLogin ? "Login" : "Sign Up"}
          onPress={handlePress}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <Button
          title={isLogin ? "Switch to Sign Up" : "Switch to Login"}
          onPress={() => setIsLogin(!isLogin)}
        />
      </View>
    </View>

    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  labels: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: '1%'
  },
  head: { 
    fontSize: 26,
    fontWeight: 'bold',
    padding: 15,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 15,
  },
  uInput: { //user input text formatting
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10,
  },
  buttonContainer: {  //allows buttons to sit beside each other
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  buttonWrapper: {  //button width
    width: '45%', 
  }
});