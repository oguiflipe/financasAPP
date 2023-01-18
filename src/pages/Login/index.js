import React, { useState } from "react"
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  TextInput
} from "react-native"
import { useNavigation } from "@react-navigation/native"

const statusBarPai = StatusBar.currentHeight ? StatusBar.currentHeight + 1 : 64

export default function Login() {
  const navigation = useNavigation()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleSingIn() {
    if (email === "" || password === "") {
      alert("Preencha os campos")
      return
    }

    const data = {
      email,
      password
    }
    console.log(data)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.loginTitle}>Entrar</Text>

      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="E-mail"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Senha"
        secureTextEntry={true}
      />

      <TouchableOpacity
        style={styles.buttonLogin}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonCreate}>
        <Text style={styles.buttontextCreate}>
          Não possúi login? Cadastre-se
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 18
  },
  loginTitle: {
    fontSize: 34,
    marginBottom: 34,
    fontWeight: "bold",
    color: "#8000fa"
  },
  input: {
    width: "100%",
    height: 50,
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: "#FAFAFA",
    marginBottom: 20,
    borderRadius: 50,
    paddingLeft: 20
  },
  buttonLogin: {
    width: "50%",
    height: 50,
    backgroundColor: "#8000fa",
    marginTop: 30,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#FFF",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonCreate: {
    width: "100%",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  buttontextCreate: {
    fontSize: 14,
    color: "#000"
  }
})
