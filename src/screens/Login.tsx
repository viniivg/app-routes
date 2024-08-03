import React from "react";
import { View, Text, Button } from "react-native";
import { PropsScreensApp } from "../routes/interfaces";

export default function Login({ navigation }: PropsScreensApp<'Login'>) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: "center"}}>
            <Text>Login</Text>

            <Button title="Ir para a Home" onPress={() => navigation.navigate('Home', {name: 'Joãozinho'})} />
            <Button title="Ir para a Register" onPress={() => navigation.navigate('Register')} />
            <Button title="Voltar" onPress={() => navigation.goBack()} />
        </View>
    )
}