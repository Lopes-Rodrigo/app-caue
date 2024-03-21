import { useEffect, useState } from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";

/**
 * 
 * LOGICA SIMPLES
 * - ENTREI NESSA TELA
 * - OPA! PRECISO BUSCAR A TEMPERATURA 
 * - COMO? QUEM É O CARA QUE EXECUTA QUANDO ENTRA?
 * - LEMBREI É O U... COM [] VAZIO 
 * - 
 */

export default function TempoScreenAula(){
    const [temperatura, setTemperatura] = useState('');

    useEffect(()=>{

    },[]) // só uma vez


    return(
        <View>
            <Text
                variant="headlineLarge"
            >
                Possui mais variedades
            </Text>
            <Text>Temperatura atual: {temperatura}</Text>
        </View>
    )
}