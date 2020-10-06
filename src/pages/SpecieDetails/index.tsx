import React from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import styles from './styles';

interface ItemProps {
    props: {};
}

function SpecieDetails ({ route }) {

    const character = route.params;


    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.title}>{'Name: '}{character.name}</Text>
                <Text style={styles.title}>{'Classification: '}{character.classification}</Text>
                <Text style={styles.title}>{'designation: '}{character.designation}</Text>
                <Text style={styles.title}>{'Average height: '}{character.average_height}</Text>
                <Text style={styles.title}>{'Skin colors: '}{character.skin_colors}</Text>
                <Text style={styles.title}>{'Hair colors: '}{character.hair_colors}</Text>
                <Text style={styles.title}>{'Eye colors: '}{character.eye_colors}</Text>
                <Text style={styles.title}>{'Averafe lifespan: '}{character.average_lifespan}</Text>
                <Text style={styles.title}>{'Language: '}{character.language}</Text>

            </ScrollView>
        </View>
    );
}

export default SpecieDetails;