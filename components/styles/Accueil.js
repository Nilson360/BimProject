import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      bgHome: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
      },
      title: {
        fontSize: 24,
        marginBottom: 20,
      },
      buttonContainer: {
        width: '80%',
        //backgroundColor: 'green',
        //padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
      },
      buttonWrapper: {
        padding: 10,
        marginTop: 5,
        backgroundColor: 'lightblue',
        width: '100%'
      },
});
