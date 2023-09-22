import { View, Text, TextInput, Touchable, TouchableOpacity,} from "react-native";
import { styles } from "./style";
import { useState } from "react";

export default function Home(){

    const[name, setName] = useState('')
    const[email, setEmail] = useState('')

    function handleUserAdd(){
        console.log(
            "nome completo" + name
            +"\nE-mail: " + email
        );
        
    }

    return(
        <View style={styles.container}>
            <Text>Preencha os dados</Text>
            <TextInput
            style={styles.input}
            placeholder="Nome Completo"

            value={ name }
            onChangeText={ setName }
            />

            <TextInput
            style={styles.input}
            placeholder="E-mail"

            value={ email }
            onChangeText={ setEmail }
            />
            <Text style={styles.txt}> {name} </Text>

            <TouchableOpacity style={styles.btn} onPress={ handleUserAdd }>
                <Text style={styles.btnTxt}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    )
}