import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#011331',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 40,
        height: '100%',
    },
    title: {
        paddingTop: 10,
        paddingBottom: 10,
        fontFamily: 'PollerOne_400Regular',
        textAlign: 'left',
        fontSize: 20,
        color: '#fff',
    },
    itemDetails: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    content: {
        paddingLeft: 20,
        fontFamily: 'PollerOne_400Regular',
        textAlign: 'left',
        fontSize: 15,
        color: '#fff',
    },
    button: {
        flex: 1,
        position: 'relative',
        width: '100%',
        height: '100%',
    }
});

export default styles;