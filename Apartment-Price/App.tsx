import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

const App = () => {
  const [landRate, setlandRate] = useState("");
  const [sharePerUnit, setSharePerUnit] = useState("");
  const [additonalArea, setAdditionalArea] = useState("");
  const [fillingRate, setFillingRate] = useState("");
  const [fillingDepth, setFillingDepth] = useState("");

  const CalculateLandPrice = () => {
    const lr = parseFloat(landRate);
    const spu = parseFloat(sharePerUnit);
    const a = parseFloat(additonalArea);
    if (!isNaN(lr) && !isNaN(spu) && !isNaN(a)) {
      const calculatedInterest = lr * (spu + a);
      return calculatedInterest.toFixed(2);
    }

    return "";
  };

  const CalculateFillingPrice = () => {
    const s = parseFloat(sharePerUnit);
    const r = parseFloat(fillingRate);
    const d = parseFloat(fillingDepth);
    if (!isNaN(s) && !isNaN(r) && !isNaN(d)) {
      const calculatedFillingCharge = s * (r * d);
      return calculatedFillingCharge.toFixed(2);
    }
    return "";
  };

  const handlelandRateChange = (value: string) => {
    setlandRate(value);
  };

  const handleSharePerUnitChange = (value: string) => {
    setSharePerUnit(value);
  };

  const handleAdditionalAreaChange = (value: string) => {
    setAdditionalArea(value);
  };

  const handleFillingRateChange = (value: string) => {
    setFillingRate(value);
  };

  const handleFillingDepthChange = (value: string) => {
    setFillingDepth(value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Apartment Price Calculator</Text>
      <View style={styles.paramContainer}>
        <Text style={styles.paramLabel}>Net Selling Land Rate :</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={landRate}
          onChangeText={handlelandRateChange}
        />
      </View>

      <View style={styles.paramContainer}>
        <Text style={styles.paramLabel}> Land Share per unit :</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={sharePerUnit}
          onChangeText={handleSharePerUnitChange}
        />
      </View>

      <View style={styles.paramContainer}>
        <Text style={styles.paramLabel}> Additional Land Area :</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={additonalArea}
          onChangeText={handleAdditionalAreaChange}
        />
      </View>

      <View style={styles.paramContainer}>
        <Text style={styles.paramLabel}>Filling Rate ( in Rupees):</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={fillingRate}
          onChangeText={handleFillingRateChange}
        />
      </View>

      <View style={styles.paramContainer}>
        <Text style={styles.paramLabel}>Filling Depth (in meter) :</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={fillingDepth}
          onChangeText={handleFillingDepthChange}
        />
      </View>

      <Text style={styles.result}>Land Price : {CalculateLandPrice()}</Text>

      <Text style={styles.result}>
        Filling Price : {CalculateFillingPrice()}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  paramContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  paramLabel: {
    marginRight: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: 150,
    padding: 5,
  },
  result: {
    fontSize: 18,
    marginTop: 20,
  },
});

export default App;

// npx create-expo-app -t expo-template-blank-typescript
