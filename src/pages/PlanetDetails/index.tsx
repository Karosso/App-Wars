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
                <Text style={styles.title}>{'Height: '}{character.height}</Text>
                <Text style={styles.title}>{'Mass: '}{character.mass}</Text>
                <Text style={styles.title}>{'Hair: '}{character.hair_color}</Text>
                <Text style={styles.title}>{'Skin: '}{character.skin_color}</Text>
                <Text style={styles.title}>{'Eye: '}{character.eye_color}</Text>
                <Text style={styles.title}>{'Birth year: '}{character.birth_year}</Text>
                <Text style={styles.title}>{'Gender: '}{character.gender}</Text>

            </ScrollView>
        </View>
    );
}

export default PlanetDetails;