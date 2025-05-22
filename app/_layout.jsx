import { Stack, useRouter } from "expo-router";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function RootLayout() {
  const router = useRouter();

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "White", title: "Class Section",
        },
        headerTintColor: "#0B0B0B",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => router.back()}
            style={styles.backButton}
          >
            <Ionicons name="chevron-back" size={24} color="#0B0B0B" />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <View style={styles.headerRight}>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons
                name="notifications-outline"
                size={24}
                color="#0B0B0B"
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Ionicons name="menu-outline" size={24} color="#0B0B0B" />
            </TouchableOpacity>
          </View>
        ),
      }}
    >
    </Stack>
  );
}

const styles = StyleSheet.create({
  backButton: {
    paddingLeft: 16,
  },
  headerRight: {
    flexDirection: "row",
    paddingRight: 16,
  },
  iconButton: {
    marginLeft: 20,
  },
});
