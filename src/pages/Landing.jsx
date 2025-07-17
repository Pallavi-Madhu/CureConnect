import React, {useEffect} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import AnimatedDNA from "../../Components/AnimatedDNA.jsx";

const Landing = ({navigation}) =>{
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace("MainTabs")
        },2500);
        return () => clearTimeout(timer);
    }, [navigation]);

    return(
        <View style={style.container}>
            <AnimatedDNA />
        </View>
    );
};

export default Landing;

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    }
})