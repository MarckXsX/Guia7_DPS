import { View, Image, StyleSheet, ScrollView} from 'react-native'
import React from 'react'
import { Text, Card, Button, Icon } from '@rneui/themed';

export default function Gatos() {
  return (
    <ScrollView>
    <View>
    <Card>
        <Card.Title>Gato Manx, el felino sin cola</Card.Title>
        <Card.Image
          style={{ padding: 0 }}
          source={{
            uri:
              'https://www.hogarmania.com/archivos/202210/gato-manx-668x400x80xX-1.jpg',
          }}
        />
        <Text style={{ marginBottom: 10 }}>
        El gato manx es un adorable felino con una mutación genética que lo ha llevado a no tener cola. 
        Esto implica que necesite revisiones veterinarias periódicas para asegurarnos de que todo va bien.
        </Text>
      </Card>

      <Card>
        <Card.Title>Gato Toyger, el tigre en miniatura</Card.Title>
        <Card.Image
          style={{ padding: 0 }}
          source={{
            uri:
              'https://www.hogarmania.com/archivos/202209/gato-toyger-668x400x80xX-1.jpg',
          }}
        />
        <Text style={{ marginBottom: 10 }}>
        ¿Sabes que puedes tener un tigre en casa? No exactamente un tigre, pero puedes tener un gato toyger, 
        que es un tigre en miniatura y con un carácter muy mimoso. Esta raza se ha creado específicamente para ser el tigre domestico, ya que el aspecto es realmente parecido. Te contamos todas las características de este felino con aspecto salvaje.
        </Text>
      </Card>

      <Card>
        <Card.Title>Gato Munchkin, un felino con patitas cortas</Card.Title>
        <Card.Image
          style={{ padding: 100 }}
          source={{
            uri:
              'https://www.hogarmania.com/archivos/202209/gato-munchkin-668x400x80xX-1.jpg',
          }}
        />
        <Text style={{ marginBottom: 10 }}>
        El Munchkin es un felino con las patas muy cortitas, que se asemeja al Teckel o perro salchicha. Su aspecto adorable concuerda con su personalidad. Y es que es un gato muy cariñoso que demanda mucho afecto y horas de juego. 
        ¡Te contamos todas las curiosidades sobre esta raza!
        </Text>
      </Card>

      <Card>
        <Card.Title>Tonkinés</Card.Title>
        <Card.Image
          style={{ padding: 0 }}
          source={{
            uri:
              'https://www.hogarmania.com/archivos/201110/tonkines-xl-668x400x80xX.jpg',
          }}
        />
        <Text style={{ marginBottom: 10 }}>
        El Tonkinés es una raza de gato de tamaño medio originario de Canadá y que proviene de las razas siamesa y burmesa. 
        </Text>
      </Card>

      <Card>
        <Card.Title>Lykoi, el curioso gato con aspecto lobuno</Card.Title>
        <Card.Image
          style={{ padding: 0 }}
          source={{
            uri:
              'https://www.hogarmania.com/archivos/202010/lykoi-gato-lobo-portada-668x400x80xX-1.jpg',
          }}
        />
        <Text style={{ marginBottom: 10 }}>
        El Lykoi o gato lobo es una de las razas más curiosas de gato que existen en la actualidad. Su origen está en Estados Unidos y se trata de una raza muy reciente, ya que los primeros ejemplares surgieron en 2010 en los estados de Tennesse y Virginia, fruto de una mutación natural, 
        ¡descubre todas las curiosidades y características del Lykoi!
        </Text>
      </Card>
    </View>
  </ScrollView>
  )
}