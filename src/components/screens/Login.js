import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Container, Header, Content, Form, Item, Input, Label, Button } from 'native-base'

export default class Login extends Component{
    render(){
        return(
            <View style={styles.loginContainer}>
            <Container>
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>E-mail</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel >
                            <Label>Mot de passe</Label>
                            <Input />
                        </Item>
                    </Form>
                </Content>
                <Button onPress={()=> Actions.Home()}>
                    <Text>go to the main screen</Text>
                </Button>
            </Container>
                
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    loginContainer:{
        flex:1,
        backgroundColor: '#FCE3D5',
        
    }
})