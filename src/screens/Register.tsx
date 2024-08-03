import React from "react";
import { View, Text, Button } from "react-native";
import { PropsScreensApp } from "../routes/interfaces";

export default function Register({ navigation }: PropsScreensApp<'Register'>) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: "center" }}>
            <Text>Register</Text>

            <Button title="Ir para a Home" onPress={() => navigation.navigate('Home', { name: 'Vini' })} />
            <Button title="Ir para a Login" onPress={() => navigation.navigate('Login')} />
            <Button title="Voltar" onPress={() => navigation.goBack()} />
        </View>
    )
}