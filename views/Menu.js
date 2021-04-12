import React, {useEffect, useContext, Fragment} from 'react'
import { StyleSheet } from 'react-native'
import FirebaseContext from '../context/firebase/firebaseContext';
import { useNavigation } from '@react-navigation/native';
import{
    Container,
    Separator,
    Content,
    List,
    ListItem,
    Thumbnail,
    Text,
    Left,
    Body
} from 'native-base';

import globalStyles from '../styles/global'

const Menu = () => {

    //contect firebase
    const {menu, obtenerProductos } = useContext(FirebaseContext);

    useEffect(() => {
        obtenerProductos();
        console.log({menu})

    }, [])

    return (
        <Container style={globalStyles.contenedor}>
            <Content style={{ backgroundColor:'#FFF'}}>
                <List>
                    {menu.map( platillo => {
                        const { imagen, nombre, descripcion, categoria, id} = platillo
                        return(
                            <Fragment key={id}>
                                <ListItem

                                >
                                    <Body>
                                        <Text>{nombre}</Text>
                                    </Body>
                                </ListItem>
                            </Fragment>
                        )
                    })}
                </List>
            </Content>

        </Container>
    )
}

const styles = StyleSheet.create({
    separador: {
        backgroundColor: '#000',
    },
    separadorTexto: {
        color: '#FFDA00',
        fontWeight: 'bold',
        textTransform: 'uppercase'
    }
})

export default Menu


