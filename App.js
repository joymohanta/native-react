import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <View style={styles.container}>
      <Text>Joy roy! and this is my first react react native app</Text>
      <Button title="Click me"></Button>
      <Text style={styles.text_title}>
        This is to inform you that I am going to open a new application that is
        going to support React Native. So dear friends, please welcome me.
      </Text>
      <Image
        style={styles.image_logo}
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmY8C9ZD2zzXt4sGEJ7agWswyUvjBbbfFQoHRFUiMw4quEFJ4j8bsoBtVGeqn0RhFNCwo&usqp=CAU",
        }}
      ></Image>
      <StatusBar style="auto" />
      <Text style={styles.text_title}>Data: {data.length} </Text>
      {data.map((datum) => (
        <Text key={datum.id} style={styles.text_title}>
          {datum.name}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text_title: {
    fontWeight: "bold",
  },
  image_logo: {
    width: 200,
    height: 200,
  },
});
