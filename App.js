import React, {useState, useEffect} from "react";
import {View, StyleSheet, TouchableOpacit} from 'react-native';
import Torch from "react-native-torch";
import RNShake from 'react-native-shake';


const App = () =>{
  const [toggle, setToggle] = useState(false); //false

  const handleChangeToggle = ()=> setToggle(oldToggle => !oldToggle); 

  useEffect(()=>{
    //liga flashd do celular
    Torch.switchState(toggle);
  }, [toggle]);

  useEffect(()=>{
    /**
     * quando o cel for chacoalhado, mudaresmo o toggle
     */
   const subscription = RNShake.addListener(()=>{
    setToggle(oldToggle => !oldToggle);
   });
   // Func vai ser chamada quando o compnents for desmontado
   return () =>subscription.remove();
  }, []);
  
  return (
  <View style={toggle ? style.containerLight : style.container} >
      <TouchableOpacity onPress={handleChangeToggle}>
        
        <Image style={toggle ? style.lightingOn : style.lightingOff} source={toggle? require('./icons/eco-light.png') : require('./icons/eco-light-off.png')} />
      
      <Image style={style.dioLogo}
      source={toggle ? require ('./icons/logo-dio.png') : require('./icons/logo-dio-white.png')} />
      </TouchableOpacity>
    </View>
  );
};

export default App;

const style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'black',
    alignItems:'center',
    justifyContent:'center',

  },
  containerLight:{
    flex:1,
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center',
},
lightingOn:{
  resizeMode:'contain',
  alignSelf:'center',
  width:150,
  height: 150,

},
lightingOff:{
  resizeMode:'contain',
  alignSelf:'center',
  tintColor:'white',
  width:150,
  height: 150,

},
dioLogo: {
  resizeMode:'contain',
  alignSelf:'center',
  width:250,
  height: 250,
},
});

