import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: 'center'
      },
      title: {
        marginTop:35,
        fontSize: 22,
        fontWeight: 'bold'
      },
      information:{
        marginTop: 20,
        color: 'red',
        fontSize: 12,
        width:'90%'
      },
      error: {
        color: 'red',
        marginTop: 10
      },
      updateMessage: {
        color: 'green',
        marginTop: 5
      },
      dataContainer: {
        marginTop: 20,
        paddingHorizontal: 10,
        paddingVertical: 15,
        backgroundColor: 'lightgrey',
        width: '100%'
      },
      variableContainer: {
        padding: 10,
        marginTop: 5,
        backgroundColor: 'lightblue',
        width: '100%'
      },
});
