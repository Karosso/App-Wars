import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#011331',
        /* justifyContent: 'flex-start', */
        alignItems: 'flex-start',
        padding: 40,
        /* height: '100%', */
    },
    title: {
        fontFamily: 'PollerOne_400Regular',
        textAlign: 'center',
        fontSize: 40,
        color: '#fff',
        marginBottom: 40,
    },

    movieTitle: {
        fontFamily: 'PollerOne_400Regular',
        padding: 20,
        textAlign: 'left',
        fontSize: 15,
        color: '#fff',
    },
});

export default styles;