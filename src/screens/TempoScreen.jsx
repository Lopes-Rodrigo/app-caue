import { View } from "react-native"; // importei do native
import { Text } from "react-native-paper"; // importei do native paper
import styles from "../config/styles";
import { useEffect } from "react";

const API_KEY = "58f0cf79195fef97df91af42c5973568"; //peguem a de vocês
const CITY_NAME = "Joinville, SC"; //peguem a de vocês

export default function TempoScreen() {
  useEffect(() => {
    const fetchTempo = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}&units=metric`;

      // Faça a requisição usando Axios
      try {
        const response = await axios.get(url, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        // A resposta está disponível no objeto response.data
        const data = response.data;
        // Faça algo com os dados recebidos
      } catch (error) {
        // Trate o erro
        console.error("There was an error!", error);
      }
    };
    fetchTempo();
  }, []); // array vazio no final de useEffect simula simboliza que a função será executada apenas uma vez, quando o componente for montado

  return (
    <View style={styles.container}>
      <Text
        variant="bodyLarge" // variantes que só o paper possui
      >
        Tempo
      </Text>
    </View>
  );
}

/*
import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const API_KEY = 'sua_chave_da_api_do_openweather';
const CITY_NAME = 'nome_da_cidade'; // Por exemplo, 'London' para Londres

const WeatherScreen = () => {
  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}&units=metric`
        );
        const { main } = response.data;
        setTemperature(main.temp);
      } catch (error) {
        console.error('Erro ao obter os dados meteorológicos:', error);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {temperature !== null ? (
        <Text>A temperatura atual em {CITY_NAME} é: {temperature}°C</Text>
      ) : (
        <Text>Carregando...</Text>
      )}
    </View>
  );
};

export default WeatherScreen;/**/
