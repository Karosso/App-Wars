import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
// import { FlatList } from 'react-native-gesture-handler';
import api from '../../services/api';

import styles from './styles';

function Movies() {
    const { navigate } = useNavigation();
    const [moviesList, setMoviesList] = useState([]);

    useEffect(() => {
        api.get('films').then(response => {

            const movies = response.data.results;

            setMoviesList(movies);

            /* moviesList.forEach(element => {
                console.log(element.title);
            }); */
            
        })
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Movies List</Text>

            {moviesList.map((movie) => (
                <Text style={styles.movieTitle} key={movie.episode_id}>
                   {movie.episode_id}  {'> '} {movie.title}    
                </Text>
            ))}
            
        </View>
    );
}

export default Movies;