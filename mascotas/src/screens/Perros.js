import { View, Image, StyleSheet, ScrollView} from 'react-native'
import React from 'react'
import { Text, Card, Button, Icon } from '@rneui/themed';

export default function Perros() {
  return (
    <ScrollView>
      <View>
      <Card>
          <Card.Title>El Pastor de Bérgamo, un perro con rastas</Card.Title>
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri:
                'https://www.hogarmania.com/archivos/202009/el-pastor-de-bergamo2-668x400x80xX-1.jpg',
            }}
          />
          <Text style={{ marginBottom: 10 }}>
          El Pastor de Bérgamo o bergamasco es un perro que se caracteriza por su denso pelaje (¡como rastas!). 
          Criado en los Alpes italianos, es una raza sumamente inteligente y paciente, por lo que es muy recomendable como primer perro para los niños.
          </Text>
        </Card>

        <Card>
          <Card.Title>Schnoodle, una raza mestiza entre el schnauzer y el caniche</Card.Title>
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri:
                'https://www.hogarmania.com/archivos/202005/schnoodle-668x400x80xX-1.jpg',
            }}
          />
          <Text style={{ marginBottom: 10 }}>
          Una raza híbrida enérgica, amistosa y juguetona ideal para convivir con los más pequeños de la casa. ¡Conoce más sobre esta raza!
          </Text>
        </Card>

        <Card>
          <Card.Title>El Galdo</Card.Title>
          <Card.Image
            style={{ padding: 100 }}
            source={{
              uri:
                'https://www.hogarmania.com/archivos/202101/galgo-tipos-portada-668x400x80xX-1.jpg',
            }}
          />
          <Text style={{ marginBottom: 10 }}>
          El galgo es una raza muy curiosa, con un carácter sensible. Te mostramos las diferentes variedades de esta tradicional y curiosa raza que destaca por su cuerpo delgado, 
          su hocico afilado y la rapidez en carrera. ¡Descubre las subespecies más destacadas del galgo!
          </Text>
        </Card>

        <Card>
          <Card.Title>Retriever</Card.Title>
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri:
                'https://www.hogarmania.com/archivos/201901/tipos-de-retriever-668x400x80xX.jpg',
            }}
          />
          <Text style={{ marginBottom: 10 }}>
          Seguro que conoces a los retriever. Son de los perros más comunes y conocidos por lo sencillo que resulta educarlos y lo bien que se portan con los niños. 
          Aunque el Golden es el más conocido, también posee otros parientes con los que comparte características y curiosidades, ¡descubre los tipos de retriever que existen!
          </Text>
        </Card>

        <Card>
          <Card.Title>Elkhound: Una raza antigua y emblemática</Card.Title>
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri:
                'https://www.hogarmania.com/archivos/201810/cazador-de-alces-noruego-668x400x80xX.jpg',
            }}
          />
          <Text style={{ marginBottom: 10 }}>
          El Elkhound o cazador de alces noruego es una de las razas de tipo Spitz más antiguas del mundo. De origen noruego, está incluido dentro de la categoría de perros de nieve, 
          ya que aguanta algunas de las temperaturas más frías en climas nórdicos.
          </Text>
        </Card>
      </View>
    </ScrollView>
  )
}