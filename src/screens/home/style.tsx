import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'gray',
      alignItems: 'center',
      justifyContent: 'center',
    },

    title:{
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',

        paddingBottom: 10,
    },
    
    input:{
        color: '#fff',
        backgroundColor: 'black',
        borderRadius: 5,
        fontWeight: "200",

        width: '60%',
        margin: 10,
        padding: 10,
    },

    btn:{
        backgroundColor: '#000',
        fontSize: 14,
        width: '60%',

        margin: 10,
        padding: 15,
        marginBottom: 20,
        borderRadius: 5,
    },

    btnTxt:{
        color:"#fff",
        fontFamily:'Arial',
        fontWeight: "600",
    },

    txt:{
        fontSize: 10,

    }
});