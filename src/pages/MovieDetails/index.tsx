import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

import styles from './styles';

interface ItemProps {
    props: {};
}

function MovieDetails ({ route }) {
    const navigation = useNavigation();

    const movie = route.params;

    const [charactersList, setCharactersList] = useState([]);
    const [planetsList, setPlanetsList] = useState([]);
    const [starshipsList, setStarshipsList] = useState([]);
    const [vehiclesList, setVehiclesList] = useState([]);
    const [speciesList, setSpeciesList] = useState([]);

    async function getCharactersList(url: string, temp: []){
        try {
            await api.get(url).then(response => {
                const item = response.data.results;
    
                item.forEach(element => {
                    temp.push(element);
                });
    
                if (response.data.next !== null) {
                    getCharactersList(response.data.next, temp);
                }else{
                    setCharactersList(temp);
                }

            })
        } catch {
            console.log('getCharactersList Error');
        }
    }

    async function getPlanetsList(url: string, temp: []){
        try {
            await api.get(url).then(response => {
                const item = response.data.results;
    
                item.forEach(element => {
                    temp.push(element);
                });
    
                if (response.data.next !== null) {
                    getPlanetsList(response.data.next, temp);
                }else{
                    setPlanetsList(temp);
                    // console.log('planetsList', planetsList);
                }
            })
        } catch {
            console.log('getPlanetsList Error');
        }
    }

    async function getStarshipsList(url: string, temp: []){
        try {
            await api.get(url).then(response => {
                const item = response.data.results;
    
                item.forEach(element => {
                    temp.push(element);
                });
    
                if (response.data.next !== null) {
                    getStarshipsList(response.data.next, temp);
                }else{
                    setStarshipsList(temp);
                    // console.log('StarshipsList', starshipsList);
                }
            })
        } catch {
            console.log('getStarshipsList Error');
        }
    }

    async function getVehiclesList(url: string, temp: []){
        try {
            await api.get(url).then(response => {
                const item = response.data.results;
    
                item.forEach(element => {
                    temp.push(element);
                });
    
                if (response.data.next !== null) {
                    getVehiclesList(response.data.next, temp);
                }else{
                    setVehiclesList(temp);
                    // console.log('getVehiclesList', vehiclesList);
                }
            })
        } catch {
            console.log('getVehiclesList Error');
        }
    }

    async function getSpeciesList(url: string, temp: []){
        try {
            await api.get(url).then(response => {
                const item = response.data.results;
    
                item.forEach(element => {
                    temp.push(element);
                });
    
                if (response.data.next !== null) {
                    getSpeciesList(response.data.next, temp);
                }else{
                    setSpeciesList(temp);
                    // console.log('getSpeciesList', speciesList);
                }
            })
        } catch {
            console.log('getSpeciesList Error');
        }
    }

    useEffect(() => {
        var charactersListTemp = [];
        var planetsListTemp = [];
        var starshipsListTemp = [];
        var vehiclesListTemp = [];
        var speciesListTemp = [];
        
        getCharactersList("https://swapi.dev/api/people", charactersListTemp);
        getPlanetsList("https://swapi.dev/api/planets", planetsListTemp);
        getStarshipsList("https://swapi.dev/api/starships", starshipsListTemp);
        getVehiclesList("https://swapi.dev/api/vehicles", vehiclesListTemp);
        getSpeciesList("http://swapi.dev/api/species/", speciesListTemp);
        
    }, []);


    function handleNavigationToCharacterDetailsPage(item){
        console.log(item.name);
        navigation.navigate('CharacterDetails', item);
    }

    function handleNavigationToPlanetDetailsPage(item){
        console.log(item.name);
        navigation.navigate('PlanetDetails', item);
    }

    function handleNavigationToStarshipsDetailsPage(item){
        console.log(item.url);

        /* starshipsList.map((starship) => {
            console.log(starship.name);
        }) */

        navigation.navigate('StarshipDetails', item);
    }

    function handleNavigationToVehiclesDetailsPage(item){
        console.log(item.name);
        navigation.navigate('VehicleDetails', item);
    }

    function handleNavigationToSpeciesDetailsPage(item){
        console.log(item.name);
        navigation.navigate('SpecieDetails', item);
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
                    <TouchableOpacity style={styles.button} 
                        key={movie.characters.id} 
                        disabled={!charactersList[character.split("/")[5]-1]}
                        onPress={ ()=>{handleNavigationToCharacterDetailsPage(charactersList[character.split("/")[5]-1])}}>
                        <Text style={styles.content} >
                            {'> '}
                            {charactersList[character.split("/")[5]-1] 
                                ? charactersList[character.split("/")[5]-1].name 
                                : 'Loading...' }
                        </Text> 
                    </TouchableOpacity>
                
                ))}

                <Text style={styles.title}>{'Planets: '}</Text>
                {movie.planets.map((planet) => (
                    <TouchableOpacity style={styles.button} 
                        key={movie.planets.id} 
                        disabled={!planetsList[planet.split("/")[5]-1]}
                        onPress={ ()=>{handleNavigationToPlanetDetailsPage(planetsList[planet.split("/")[5]-1])}}>
                        <Text style={styles.content} >
                            {'> '}
                            {planetsList[planet.split("/")[5]-1] 
                                ? planetsList[planet.split("/")[5]-1].name 
                                : 'Loading...' }
                        </Text>
                    </TouchableOpacity>
                    
                ))}

                <Text style={styles.title}>{'Starships: '}</Text>
                {movie.starships.map((starship) => (
                    <TouchableOpacity style={styles.button} 
                    key={movie.starships.id} 
                    disabled={!starshipsList[starship.split("/")[5]-1]}
                    onPress={ ()=>{handleNavigationToStarshipsDetailsPage(starshipsList[starship.split("/")[5]-1])}}>
                        <Text style={styles.content} >
                            {'> '}
                            {starshipsList[starship.split("/")[5]-1] 
                                ? starshipsList[starship.split("/")[5]-1].name 
                                : 'Loading...' }
                        </Text>
                    </TouchableOpacity>
                    
                ))}

                <Text style={styles.title}>{'Vehicles: '}</Text>
                {movie.vehicles.map((vehicle) => (
                    <TouchableOpacity style={styles.button} 
                    key={movie.vehicles.id} 
                    disabled={!vehiclesList[vehicle.split("/")[5]-1]}
                    onPress={ ()=>{handleNavigationToVehiclesDetailsPage(vehiclesList[vehicle.split("/")[5]-1])}}>
                        <Text style={styles.content} >
                            {'> '}
                            {vehiclesList[vehicle.split("/")[5]-1] 
                                ? vehiclesList[vehicle.split("/")[5]-1].name 
                                : 'Loading...' }
                        </Text>
                    </TouchableOpacity>
                    
                ))}

                <Text style={styles.title}>{'Species: '}</Text>
                {movie.species.map((specie) => (
                    <TouchableOpacity style={styles.button} 
                    key={movie.species.id} 
                    disabled={!speciesList[specie.split("/")[5]-1]}
                    onPress={ ()=>{handleNavigationToSpeciesDetailsPage(speciesList[specie.split("/")[5]-1])}}>
                        <Text style={styles.content} >
                            {'> '}
                            {speciesList[specie.split("/")[5]-1] 
                                ? speciesList[specie.split("/")[5]-1].name 
                                : 'Loading...' }
                        </Text>
                    </TouchableOpacity>
                    
                ))}


            </ScrollView>
        </View>
    );
}

export default MovieDetails;