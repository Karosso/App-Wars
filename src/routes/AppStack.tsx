import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import Movies from '../pages/Movies';
import MovieDetails from '../pages/MovieDetails';
import CharacterDetails from '../pages/CharacterDetails';
import PlanetDetails from '../pages/CharacterDetails';
import StarshipDetails from '../pages/StarshipDetails';
import VehicleDetails from '../pages/VehicleDetails';
import SpecieDetails from '../pages/SpecieDetails';


const { Navigator, Screen } = createStackNavigator();

function AppStack() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen name="Home" component={Home}/>
                <Screen name="Movies" component={Movies}/>
                <Screen name="MovieDetails" component={MovieDetails}/>
                <Screen name="CharacterDetails" component={CharacterDetails}/>
                <Screen name="PlanetDetails" component={PlanetDetails}/>
                <Screen name="StarshipDetails" component={StarshipDetails}/>
                <Screen name="VehicleDetails" component={VehicleDetails}/>
                <Screen name="SpecieDetails" component={SpecieDetails}/>
            </Navigator>
        </NavigationContainer>
    )
}

export default AppStack;