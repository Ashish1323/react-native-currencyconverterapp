import React,{Component} from 'react';
import { StyleSheet, Keyboard,Text, View, SafeAreaView,TextInput, TouchableOpacity, Alert, TouchableWithoutFeedback } from 'react-native';
import { render } from 'react-dom';

const currencyPerRupee={
  DOLLAR: 0.014,
  EURO: 0.012,
  POUND: 0.011,
  YEN:1.54,
  BITCOIN: 0.0000041
}


export default class App extends Component{
constructor(props){
  super(props);
  this.state={
    inputValue:""
    ,resultValue: "0.0"
  }
}
isNumeric = (input) => {
  if(input=Number)
  return true
  else
  false
}

buttonpressed =(currency) => {
  if(this.state.inputValue === ""){
    this.setState({resultValue:"0.0"})
    Alert.alert("Enter Some Value")
  }
  
  // else if(){
  //   Alert.alert("Please Enter A Number")
  //   this.setState({resultValue:"0.0"})
  //   }
  else{
  let result = parseFloat(this.state.inputValue)* currencyPerRupee[currency]
  this.setState({resultValue: result.toFixed(2)})
}
}

  render()
{

  return(
   
     <SafeAreaView style={styles.container}>
       <View style={styles.screenview}>
         <View style={styles.resultvalue}>
    <Text style={styles.result}>
    {this.state.resultValue}

    </Text>
</View>
<View style={styles.inputcontainer}>
<TextInput 
style={styles.input}
selectionColor="#fff"
keyboardType="numeric"
placeholder="Enter Value"
value={this.state.inputValue}
onChangeText={inputValue => this.setState({ inputValue: inputValue})}/>

</View>
<View style={styles.cvbutcontainer}>
<TouchableOpacity style={styles.button} onPress={() => this.buttonpressed("DOLLAR")}>
<Text style={styles.cvbuttext}>$</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.button} onPress={() => this.buttonpressed("EURO")}>
<Text style={styles.cvbuttext}>€
</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.button} onPress={() => this.buttonpressed("BITCOIN")}>
<Text style={styles.cvbuttext}>฿</Text>
</TouchableOpacity>
</View>
       </View>

    </SafeAreaView>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:30,
    backgroundColor:"grey"
  },
  screenview:{
    flex: 1,
  },
  resultvalue:{
    height:70,
    marginTop:180,
    justifyContent: 'center',
    borderColor:"#c1c1c1",
    backgroundColor:"#0A79DF",
    alignItems:"center",
    borderWidth:2
  },
  result:{
    fontSize:30,
    fontWeight:"bold",
    color:"#fff"
  },
  inputcontainer:{
    height:70,
    marginTop:20,
    justifyContent:"center",
    alignItems:"center",
    borderWidth:2,
    borderColor:"#fff",
    backgroundColor: "#0A79DF"
  },
  input:{
    color:"#fff",
    fontSize:30
  }
,cvbutcontainer:{
  flexDirection:"row",
  flexWrap:"wrap",
  marginTop:20,
  borderColor:"#c1c1c1",
  borderWidth:2
},
button:{
  alignItems:"center",
  justifyContent:"center",
  backgroundColor:"#0A79DF",
  height:100,
  borderColor:"#c1c1c1",
  borderWidth:2,
  width:"33.3%"
},
cvbuttext:{
  color:"#fff",
  fontSize:20,
  fontWeight:"bold"
}
});
