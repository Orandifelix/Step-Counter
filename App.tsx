import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

type ValueProps = {
  label: string;
  value: string;
};

const Value = ({ label, value }: ValueProps) => (
  <View>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello Stepcounter Counters from Orandi</Text>
      <View style={styles.values}>
        <Value label="Steps" value="1234" />
        <Value label="Distance" value="1.234KM" />
        <Value label="Flights Climbed" value="12" />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 20,
    justifyContent: "center",
  },

  value: {
    fontSize: 35,
    color: "#AFB3BE",
    fontWeight: "500",
  },

  label: {
    color: "white",
    fontSize: 20,
  },
 
  values: {
     flexDirection: "row",
     gap: 55,
    flexWrap: "wrap" },
});
