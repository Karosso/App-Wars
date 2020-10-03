import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#011331',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40,
        height: '100%',
    },
    title: {
        fontFamily: 'PollerOne_400Regular',
        textAlign: 'center',
        fontSize: 60,
        color: '#fff',
        marginTop: -100,
        marginBottom: 130,
    },
    buttonContainer: {
        backgroundColor: '#011638',
        borderRadius: 8,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '80%',
        height: '35%',
    },
    folder: {
        width: '75%',
        height: '75%',
        resizeMode: 'contain',
    },
    subTitle: {
        marginTop: -15,
        fontFamily: 'PollerOne_400Regular',
        textAlign: 'center',
        fontSize: 25,
        color: '#fff',
    },
});

export default styles;