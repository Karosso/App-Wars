import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import styles from './styles';

import folderImg from '../../assets/images/folder.png';

function Home() {
    const navigation = useNavigation();

    function handleNavigationToMoviesPage(){
        navigation.navigate('Movies');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title} >STAR WARS</Text>

            <TouchableOpacity onPress={handleNavigationToMoviesPage} style={styles.buttonContainer}>
                <Image source={folderImg} style={styles.folder} />
                <Text style={styles.subTitle} >MoviePedia</Text>
            </TouchableOpacity>
            

        </View>
    );
}

export default Home;