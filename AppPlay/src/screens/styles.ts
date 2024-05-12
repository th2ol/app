import { StyleSheet } from 'react-native';
import { theme } from '../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: theme.colors.backgorung,                                                                                                                                                                               
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor: theme.colors.backgorung
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
        textAlign:'center',
        fontFamily: theme.fonts.title700,
        lineHeight:40
    },
    subtitle:{
        color:theme.colors.header,
        fontSize:15,
        textAlign:'center',
        marginBottom:64,
        lineHeight:25
    }
});