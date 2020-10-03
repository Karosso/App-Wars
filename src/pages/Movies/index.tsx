import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, GestureResponderEvent } from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import api from '../../services/api';

import styles from './styles';

function Movies() {
    const { navigate } = useNavigation();
    const [moviesList, setMoviesList] = useState([]);

    const navigation = useNavigation();

    useEffect(() => {
        api.get('films').then(response => {

            const movies = response.data.results;
            setMoviesList(movies);
            /* moviesList.forEach(element => {
                console.log(element.title);
            }); */
        })
    }, []);

    function handleNavigationToMovieDetailsPage(item){
        // console.log("item: ", item.title);

        navigation.navigate('MovieDetails', item);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Movie List</Text>

            <ScrollView>
                {moviesList.map((movie) => (
                    <TouchableOpacity style={styles.button} key={movie.episode_id} onPress={ ()=>{handleNavigationToMovieDetailsPage(movie)}}>
                        <Text style={styles.movieTitle} >
                            {movie.episode_id}  {'> '} {movie.title}    
                        </Text>

                        <Text style={styles.movieInfo}>
                            {'Release date: '} {'\r\n'} {movie.release_date} {'\r\n'}
                        </Text>

                        <Text style={styles.movieInfo}>
                            {'Synopsis: '} {'\r\n'} {movie.opening_crawl}
                        </Text>
                    </TouchableOpacity>
                    
                ))}
            </ScrollView>
        </View>
    );
}

export default Movies;