import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet, ScrollView } from "react-native";

const App = () => {
  const [RawMarkup, setRawMarkup] =useState("");
  const [EconomyMarkup, setEconomyMarkup] =useState("");
  const [DeluxeMarkup, setDeluxeMarkup] =useState("");
  const [SDeluxeMarkup, setSDeluxeMarkup] =useState("");
  const [LuxuryMarkup, setLuxuryMarkup] =useState("");
  const [SLuxuryMarkup, setSLuxuryMarkup] =useState("");

  const [sharePerUnit, setSharePerUnit] = useState("");
  const [NoOfFloor, setNoOfFloor] =useState("");

  const [RemotenessFactor, setRemotenessFactor] =useState("");
  const [BaseBuildupRate, setBaseBuildupRate] =useState("");

  const [LandRateattp, setLandRateattp] =useState("");
  const [LandValue, setLandValue] =useState("");
  const [TotalLandArea, setTotalLandArea] =useState("");
  const [landRate, setlandRate] = useState("");
  const [DevelopmentCharge, setDevlopmentCharge] =useState("");
  const [LegalCharge, setLegalCharge] =useState("");
  const [fillingRate, setFillingRate] = useState("");

  const [fillingDepth, setFillingDepth] = useState("");
  const [additonalArea, setAdditionalArea] = useState("");
  
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

  const CalculateBuildingPrice = () => {
    const rm = parseFloat(RawMarkup);
    const em = parseFloat(EconomyMarkup);
    const dm = parseFloat(DeluxeMarkup);
    const sdm = parseFloat(SDeluxeMarkup);
    const lm = parseFloat(LuxuryMarkup);
    const slm = parseFloat(SLuxuryMarkup);
    if (!isNaN(rm) && !isNaN(em) && !isNaN(dm) && !isNaN(sdm) && !isNaN(lm) && !isNaN(slm)){
      const CalculatedBuildingPrice = rm+em+dm+sdm+lm+slm;
      return CalculatedBuildingPrice.toFixed(2);
    }
    return " ";
  }

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

  const CalculateSubTotal = () => {
    const lp = parseFloat(CalculateLandPrice());
    const bp = parseFloat(CalculateBuildingPrice());

    if (!isNaN(lp) && !isNaN(bp) ){
      const CalculatedSubtotal=lp+bp;
      return CalculatedSubtotal.toFixed(2);
    }
    return " ";
  }

  const CalculateRemotenessCharge = () => {
    const st=parseFloat(CalculateSubTotal());
    const rf=parseFloat(RemotenessFactor);
    if (!isNaN(st) && !isNaN(rf)){
      const CalculatedRemotenessCharge = st *rf/100;
      return CalculatedRemotenessCharge.toFixed(2);
    }
    return " ";
  }

  const CalculateGrandTotal = () => {
    const st =parseFloat(CalculateSubTotal());
    const rc =parseFloat(CalculateRemotenessCharge());
    const fp = parseFloat(CalculateFillingPrice())
    if (!isNaN(st) && !isNaN(rc) && !isNaN(fp) ){
      const CalculatedGrandTotal = st+rc+fp;
      return CalculatedGrandTotal.toFixed(2);
    }
    return " ";
  }


  const handleRawMarkupChange = (value: string) => {
    setRawMarkup(value);
  };
  const handleEconomyMarkupChange = (value: string) => {
    setEconomyMarkup(value);
  };
  const handleDeluxeMarkupChange = (value: string) => {
    setDeluxeMarkup(value);
  };
  const handleSDeluxeMarkupChange = (value: string) => {
    setSDeluxeMarkup(value);
  };
  const handleLuxuryMarkupChange = (value: string) => {
    setLuxuryMarkup(value);
  };
  const handleSLuxuryMarkupChange = (value: string) => {
    setSLuxuryMarkup(value);
  };

  const handleSharePerUnitChange = (value: string) => {
    setSharePerUnit(value);
  };
  const handleNoOfFloorChange = (value: string) => {
    setNoOfFloor(value);
  };

  const handleRemotenessFactorChange = (value: string) => {
    setRemotenessFactor(value);
  };
  const handleBaseBuildupRateChange = (value: string) => {
    setBaseBuildupRate(value);
  };

  const handleLandRateattpChange = (value: string) => {
    setLandRateattp(value);
  };const handleLandValueChange = (value: string) => {
    setLandValue(value);
  };const handleChange = (value: string) => {
    setlandRate(value);
  };const handleTotalLandAreaChange = (value: string) => {
    setTotalLandArea(value);
  };const handlelandRateChange = (value: string) => {
    setlandRate(value);
  };
  const handleDevlopmentChargeChange = (value: string) => {
    setDevlopmentCharge(value);
  };
  const handleLegalChargeChange = (value: string) => {
    setLegalCharge(value);
  };
  const handleFillingRateChange = (value: string) => {
    setFillingRate(value);
  };
  
  const handleAdditionalAreaChange = (value: string) => {
    setAdditionalArea(value);
  };
  const handleFillingDepthChange = (value: string) => {
    setFillingDepth(value);
  };


  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Text style={styles.title}>Apartment Price </Text>


      <Text style = {styles.heading}>Company</Text>

      <View style={styles.paramContainer}>
        <Text style={styles.paramLabel}>Raw Markup:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={RawMarkup}
          onChangeText={handleRawMarkupChange}
        />
      </View>
      <View style={styles.paramContainer}>
        <Text style={styles.paramLabel}>Economy Markup :</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={EconomyMarkup}
          onChangeText={handleEconomyMarkupChange}
        />
      </View>
      <View style={styles.paramContainer}>
        <Text style={styles.paramLabel}>Deluxe Markup :</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={DeluxeMarkup}
          onChangeText={handleDeluxeMarkupChange}
        />
      </View>
      <View style={styles.paramContainer}>
        <Text style={styles.paramLabel}>Super Deluxe Markup:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={SDeluxeMarkup}
          onChangeText={handleSDeluxeMarkupChange}
        />
      </View>
      <View style={styles.paramContainer}>
        <Text style={styles.paramLabel}>Luxury Markup :</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={LuxuryMarkup}
          onChangeText={handleLuxuryMarkupChange}
        />
      </View>
      <View style={styles.paramContainer}>
        <Text style={styles.paramLabel}>Super Luxury Markup :</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={SLuxuryMarkup}
          onChangeText={handleSLuxuryMarkupChange}
        />
      </View>



      <Text style={styles.heading}>Model</Text>

      <View style={styles.paramContainer}>
        <Text style={styles.paramLabel}> Land Share per unit : </Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={sharePerUnit}
          onChangeText={handleSharePerUnitChange}
        />
      </View>
      <View style={styles.paramContainer}>
        <Text style={styles.paramLabel}> Nos of Floor : </Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={NoOfFloor}
          onChangeText={handleNoOfFloorChange}
        />
      </View>


      <Text style={styles.heading}>Branch</Text>

      <View style={styles.paramContainer}>
        <Text style={styles.paramLabel}> Remoteness Factor : </Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={RemotenessFactor}
          onChangeText={handleRemotenessFactorChange}
        />
      </View><View style={styles.paramContainer}>
        <Text style={styles.paramLabel}> Base Buildup rate : </Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={BaseBuildupRate}
          onChangeText={handleBaseBuildupRateChange}
        />
      </View>

      <Text style={styles.heading}> Projects </Text>

      <View style={styles.paramContainer}>
        <Text style={styles.paramLabel}>Land Rate at the time of Purchase :</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={LandRateattp}
          onChangeText={handleLandRateattpChange}
        />
      </View>
      <View style={styles.paramContainer}>
        <Text style={styles.paramLabel}>Land Value sell factor :</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={LandValue}
          onChangeText={handleLandValueChange}
        />
      </View>
      <View style={styles.paramContainer}>
        <Text style={styles.paramLabel}>Total Land Area :</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={TotalLandArea}
          onChangeText={handleTotalLandAreaChange}
        />
      </View>
      <View style={styles.paramContainer}>
        <Text style={styles.paramLabel}> Devlopment Charge :</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={DevelopmentCharge}
          onChangeText={handleDevlopmentChargeChange}
        />
      </View>
      <View style={styles.paramContainer}>
        <Text style={styles.paramLabel}>Legal Charge :</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={LegalCharge}
          onChangeText={handleLegalChargeChange}
        />
      </View>
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
        <Text style={styles.paramLabel}>Filling Rate ( in Rupees):</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={fillingRate}
          onChangeText={handleFillingRateChange}
        />
      </View>

      <Text style={styles.heading}>Unit</Text>
       <View style={styles.paramContainer}>
        <Text style={styles.paramLabel}>Filling Depth (in meter) :</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={fillingDepth}
          onChangeText={handleFillingDepthChange}
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

      

      

      <Text style={styles.result}>Land Price : {CalculateLandPrice()}</Text>
      <Text style={styles.result}>Building Price : {CalculateBuildingPrice()}</Text>
      <Text style={styles.result}>Sub Total : {CalculateSubTotal()}</Text>
      <Text style={styles.result}>Filling Charge : {CalculateFillingPrice()} </Text>
      <Text style={styles.result}>Remoteness Charge : {CalculateRemotenessCharge()} </Text>
      <Text style={styles.result}>Grand Total : {CalculateGrandTotal()} </Text>


      <Text style={styles.result}>Filling Price : {CalculateFillingPrice()} </Text>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:40,
    marginBottom:50,
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 5,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 5,
    padding:15,
  },
  heading:{
    fontSize: 18,
    padding:10,
    fontWeight: "bold",
    textAlign: "center",

  },
  paramContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
    marginRight:10,
    marginLeft:10,
  },
  paramLabel: {
    flex:50,
    marginRight: 5,
    textAlign:"left",
    paddingLeft:5
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: 150,
    padding: 5,
    paddingRight:10,

  },
  result: {
    textAlign:"left",
    fontWeight:"bold",
    fontSize: 18,
    marginTop: 20,
  },
});

export default App;

// npx create-expo-app -t expo-template-blank-typescript
