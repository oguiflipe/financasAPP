import React from "react"
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"
import { MotiView, MotiText } from "moti"

import { useNavigation } from "@react-navigation/native"

export default function Welcome() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <MotiView
        style={styles.containerLogo}
        from={{
          translateY: +150,
          opacity: 0
        }}
        animate={{
          translateY: 0,
          opacity: 1
        }}
        transition={{
          type: "spring",
          duration: 200,
          delay: 300
        }}
      >
        <Image
          source={require("../../assets/calc_1.png")}
          style={styles.image}
          resizeMode="contain"
        />
      </MotiView>
      <MotiView
        style={styles.containerForm}
        from={{
          translateY: +150,
          opacity: 0
        }}
        animate={{
          translateY: 0,
          opacity: 1
        }}
        transition={{
          type: "timing",
          duration: 200,
          delay: 300
        }}
      >
        <Text style={styles.title}>
          Monitore, organiza seus gastos de qualquer lugar!
        </Text>
        <Text style={styles.text}>Faça o login para começar</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.textButton}>Acessar</Text>
        </TouchableOpacity>
      </MotiView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8000fa"
  },
  image: {
    width: "50%"
  },
  containerLogo: {
    flex: 2,
    backgroundColor: "#8000fa",
    justifyContent: "center",
    alignItems: "center"
  },
  containerForm: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 28,
    marginBottom: 12
  },
  text: {
    color: "#a1a1a1"
  },
  button: {
    position: "absolute",
    backgroundColor: "#8000fa",
    borderRadius: 50,
    paddingVertical: 8,
    width: "60%",
    alignSelf: "center",
    bottom: "15%",
    alignItems: "center"
  },
  textButton: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold"
  }
})
