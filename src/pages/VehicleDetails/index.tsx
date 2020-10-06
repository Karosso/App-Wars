import React from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import styles from './styles';

interface ItemProps {
    props: {};
}

function VehicleDetails ({ route }) {

    const character = route.params;


    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.title}>{'Name: '}{character.name}</Text>
                <Text style={styles.title}>{'Model: '}{character.model}</Text>
                <Text style={styles.title}>{'Manufacturer: '}{character.manufacturer}</Text>
                <Text style={styles.title}>{'Cost: '}{character.cost_in_credits}</Text>
                <Text style={styles.title}>{'Lenght: '}{character.length}</Text>
                <Text style={styles.title}>{'Max Speed: '}{character.max_atmosphering_speed}</Text>
                <Text style={styles.title}>{'Crew: '}{character.crew}</Text>
                <Text style={styles.title}>{'Passengers: '}{character.passengers}</Text>
                <Text style={styles.title}>{'Cargo Capacity: '}{character.cargo_capacity}</Text>
                <Text style={styles.title}>{'Consumables: '}{character.consumables}</Text>
                <Text style={styles.title}>{'Classe: '}{character.starship_class}</Text>

            </ScrollView>
        </View>
    );
}

export default VehicleDetails;