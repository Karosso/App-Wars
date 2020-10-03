import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import styles from './styles';

interface ItemProps {
    props: {};
}

function MovieDetails ({ route }) {

    const movie = route.params;

    function handleNavigationToCharacterDetailsPage(item){
        console.log(item);
    }

    function handleNavigationToPlanetDetailsPage(item){
        console.log(item);
    }

    function handleNavigationToStarshipsDetailsPage(item){
        console.log(item);
    }

    function handleNavigationToVehiclesDetailsPage(item){
        console.log(item);
    }

    function handleNavigationToSpeciesDetailsPage(item){
        console.log(item);
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.title}>{'Title: '}{movie.title}</Text>
                <Text style={styles.title}>{'Episode: '}{movie.episode_id}</Text>
                <Text style={styles.title}>{'Synopsis: '}</Text>
                <Text style={styles.content}>{movie.opening_crawl}</Text>
                <Text style={styles.title}>{'Director: '}{movie.director}</Text>
                <Text style={styles.title}>{'Producer: '}{movie.producer}</Text>
                <Text style={styles.title}>{'Release: '}{movie.release_date}</Text>

                <Text style={styles.title}>{'Characters: '}</Text>
                {movie.characters.map((character) => (
                    <TouchableOpacity style={styles.button} key={movie.characters.id} onPress={ ()=>{handleNavigationToCharacterDetailsPage(character)}}>
                        <Text style={styles.content} >{character}</Text>
                    </TouchableOpacity>
                    
                ))}

                <Text style={styles.title}>{'Planets: '}</Text>
                {movie.planets.map((planet) => (
                    <TouchableOpacity style={styles.button} key={movie.planets.id} onPress={ ()=>{handleNavigationToPlanetDetailsPage(planet)}}>
                        <Text style={styles.content} >{planet}</Text>
                    </TouchableOpacity>
                    
                ))}

                <Text style={styles.title}>{'Starships: '}</Text>
                {movie.starships.map((starship) => (
                    <TouchableOpacity style={styles.button} key={movie.starships.id} onPress={ ()=>{handleNavigationToStarshipsDetailsPage(starship)}}>
                        <Text style={styles.content} >{starship}</Text>
                    </TouchableOpacity>
                    
                ))}

                <Text style={styles.title}>{'Vehicles: '}</Text>
                {movie.vehicles.map((vehicle) => (
                    <TouchableOpacity style={styles.button} key={movie.vehicles.id} onPress={ ()=>{handleNavigationToVehiclesDetailsPage(vehicle)}}>
                        <Text style={styles.content} >{vehicle}</Text>
                    </TouchableOpacity>
                    
                ))}

                <Text style={styles.title}>{'Species: '}</Text>
                {movie.species.map((specie) => (
                    <TouchableOpacity style={styles.button} key={movie.species.id} onPress={ ()=>{handleNavigationToSpeciesDetailsPage(specie)}}>
                        <Text style={styles.content} >{specie}</Text>
                    </TouchableOpacity>
                    
                ))}


            </ScrollView>
        </View>
    );
}

export default MovieDetails;