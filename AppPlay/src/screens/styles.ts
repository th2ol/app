//import { StyleSheet } from "react-native";
import { theme } from '../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: 'white',                                                                                                                                                                               
        justifyContent: 'center',
        alignItems: 'center',
        backgroundcolor: theme.colors.backgorung
    },
    image:{
        width: '100%',
        height: 360
    },
    content:{
        marginTop: -40
    },
    title:{
        color:theme.colors.header,
        fontSize:40,
        marginBottom:16,
        textAlign:'center'
    },
    subtitle:{
        color:theme.colors.header,
        fontSize:15,
        textAlign:'center',
        marginBottom:64
    }
});