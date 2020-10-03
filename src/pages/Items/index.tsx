import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

function Items() {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Episode: 4</Text>
            <Text style={styles.title}>Title: A New Hope</Text>
        </View>
    );
}

export default Items;