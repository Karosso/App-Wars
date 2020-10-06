import React from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import styles from './styles';

interface ItemProps {
    props: {};
}

function PlanetDetails ({ route }) {

    const character = route.params;


    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.title}>{'Name: '}{character.name}</Text>
                <Text style={styles.title}>{'Rotations Period: '}{character.rotation_period}</Text>
                <Text style={styles.title}>{'Orbital Period: '}{character.orbital_period}</Text>
                <Text style={styles.title}>{'Diameter: '}{character.diameter}</Text>
                <Text style={styles.title}>{'Climate: '}{character.climate}</Text>
                <Text style={styles.title}>{'Gravity: '}{character.gravity}</Text>
                <Text style={styles.title}>{'Terrain: '}{character.terrain}</Text>
                <Text style={styles.title}>{'Surface Water: '}{character.surface_water}</Text>
                <Text style={styles.title}>{'Population: '}{character.population}</Text>

            </ScrollView>
        </View>
    );
}

export default PlanetDetails;