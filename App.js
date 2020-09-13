import * as React from 'react';
import { Text, StyleSheet, View, Button } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, StackActions } from '@react-navigation/native';

const HomeScreen=({navigation})=> {
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>Home screen</Text>
      <Button
      title="Go to detail screen"
      onPress={()=>navigation.navigate("Details")}
      />
    </View>
  );
};

const DetailScreen=({navigation})=> {
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center',padding:10}}>
      <Text>Detail screen</Text>
      <Button 
      title="Go to detail screen...again"
      onPress={()=>navigation.push("Details")}
      />

      <Button
      title="Go to home"
      onPress={()=>navigation.navigate("Home")}
      />
      <Button
      title="Go back"
      onPress={()=>navigation.goBack()}
      />
      <Button 
      title="Go to the first screen"
      onPress={()=>navigation.popToTop()}
      />
    </View>
  );
};

const Stack=createStackNavigator();
const App=()=>{
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{
          headerStyle:{
            backgroundColor:'#88fc03',
          }
        }} />
        <Stack.Screen name="Details" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
