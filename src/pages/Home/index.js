import { StyleSheet, Text, View, FlatList } from "react-native"
import Balance from "../../components/Balance"
import Header from "../../components/Header"
import Movements from "../../components/Movements"
import Actions from "../../components/Actions"

const list = [
  {
    id: 1,
    label: "Boleto Conta de Luz",
    value: "390,00",
    date: "15/07/2022",
    type: 0 //despesas
  },
  {
    id: 2,
    label: "Pix cliente X",
    value: "2.090,00",
    date: "20/07/2022",
    type: 1 //receita
  },
  {
    id: 3,
    label: "Pix cliente X",
    value: "7.090,00",
    date: "25/07/2022",
    type: 1 //receita
  }
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Guilherme Felipe" />
      <Balance saldo="9.250,90" gastos="-527,00" />

      <Actions />

      <Text style={styles.title}> Últimas movimentações</Text>

      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={item => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Movements data={item} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa"
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 14
  },
  list: {
    marginStart: 14,
    marginEnd: 14
  }
})
