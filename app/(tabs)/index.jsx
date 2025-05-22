import { StyleSheet, Text, View, Platform, TouchableOpacity } from "react-native";
import { Link, useRouter } from "expo-router";

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter as:</Text>
      
      <View style={styles.buttonsContainer}>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => router.push("/section/student")}
        >
          <Text style={styles.buttonText}>Student</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.button}
          onPress={() => router.push("/section/faculty")}
        >
          <Text style={styles.buttonText}>Faculty</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 30,
    textAlign: "center",
  },
  buttonsContainer: {
    width: "80%",
    maxWidth: 300,
    gap: 15,
  },
  button: {
    backgroundColor: "#f8f8f8",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ddd",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#333",
  },
});