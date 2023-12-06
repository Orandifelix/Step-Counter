import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

type ValueProps ={
 label: string;
 value: string;
}

const Value = ({ label, value }:ValueProps) => (
  <View style={styles.valueContainer}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello Stepcounter Counters from Orandi</Text>
      <View style={{ flexDirection: "row" }}>
        <Value label="Steps" value="1234" />
        <Value label="Distance" value="1.234KM" />
      </View>
      <Value label="Flights Climbed" value="12" />
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
    color: '#AFB3BE',
    fontWeight:  '500',


  },

  label: {
    color: 'white',
    fontSize: 20,

  },
  valueContainer:{
    marginRight: 50,
    marginVertical: 10,

  }
});
