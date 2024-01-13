import React from "react";
import { View, Text, StyleSheet,ScrollView } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { TextInput as PaperTextInput, Button } from "react-native-paper";


import tw from 'twrnc';


const schema = z.object({
  RawMarkup: z.number().nonnegative(),
  EconomyMarkup: z.number().nonnegative(),
  DeluxeMarkup: z.number().nonnegative(),
  SDeluxeMarkup: z.number().nonnegative(),
  LuxuryMarkup: z.number().nonnegative(),
  SLuxuryMarkup: z.number().nonnegative(),

  sharePerUnit: z.number().nonnegative(),
  NoOfFloor: z.number().nonnegative(),

  RemotenessFactor: z.number().nonnegative(),
  BaseBuildupRate: z.number().nonnegative(),

  LandRateattp: z.number().nonnegative(),
  LandValue: z.number().nonnegative(),
  TotalLandArea: z.number().nonnegative(),
  landRate: z.number().nonnegative(),
  DevelopmentCharge: z.number().nonnegative(),
  LegalCharge: z.number().nonnegative(),
  fillingRate: z.number().nonnegative(),

  fillingDepth: z.number().nonnegative(),
  additonalArea: z.number().nonnegative(),
 
});

type apartdata = z.infer<typeof schema>;

const App = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: apartdata) => {
    console.log("Form Data:", (data));

  };

type apartdata = z.infer<typeof schema>


  return (
    <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.container}>
      <Text style={styles.title}>Apartment Price Calculator</Text>

      <Text style={styles.heading}>Company</Text>

      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <View style={styles.paramContainer}>
            <Text style={styles.paramLabel}>Raw Markup:</Text>
            <PaperTextInput
              style={styles.input}
              keyboardType="numeric"
              value={value}
              onChangeText={onChange}
            />
            {errors.RawMarkup && <Text style={styles.required}>*required</Text>}
          </View>
        )}
        name="RawMarkup"
        defaultValue=""
      />

      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <View style={styles.paramContainer}>
            <Text style={styles.paramLabel}>Economy Markup:</Text>
            <PaperTextInput
              style={styles.input}
              keyboardType="numeric"
              value={value}
              onChangeText={onChange}
            />
            {errors.EconomyMarkup && <Text style={styles.required}>*required</Text>}
          </View>
        )}
        name="EconomyMarkup"
        defaultValue=""
      />

      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <View style={styles.paramContainer}>
            <Text style={styles.paramLabel}>Deluxe Markup:</Text>
            <PaperTextInput
              style={styles.input}
              keyboardType="numeric"
              value={value}
              onChangeText={onChange}
            />
            {errors.DeluxeMarkup && <Text style={styles.required}>*required</Text>}
          </View>
        )}
        name="DeluxeMarkup"
        defaultValue=""
      />


      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <View style={styles.paramContainer}>
            <Text style={styles.paramLabel}>Super Deluxe Markup:</Text>
            <PaperTextInput
              style={styles.input}
              keyboardType="numeric"
              value={value}
              onChangeText={onChange}
            />
            {errors.SDeluxeMarkup && <Text style={styles.required}>*required</Text>}
          </View>
        )}
        name="SDeluxeMarkup"
        defaultValue=""
      />
            
            
      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <View style={styles.paramContainer}>
            <Text style={styles.paramLabel}>Luxury Markup:</Text>
            <PaperTextInput
              style={styles.input}
              keyboardType="numeric"
              value={value}
              onChangeText={onChange}
            />
            {errors.LuxuryMarkup && <Text style={styles.required}>*required</Text>}
          </View>
        )}
        name="LuxuryMarkup"
        defaultValue=""
      />

      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <View style={styles.paramContainer}>
            <Text style={styles.paramLabel}>Super Luxury Markup:</Text>
            <PaperTextInput
              style={styles.input}
              keyboardType="numeric"
              value={value}
              onChangeText={onChange}
            />
            {errors.SLuxuryMarkup && <Text style={styles.required}>*required</Text>}
          </View>
        )}
        name="SLuxuryMarkup"
        defaultValue=""
      />

    <Text style={styles.heading}>Model</Text>
    <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <View style={styles.paramContainer}>
            <Text style={styles.paramLabel}>Land Share per unit:</Text>
            <PaperTextInput
              style={styles.input}
              keyboardType="numeric"
              value={value}
              onChangeText={onChange}
            />
            {errors.LandSharePerUnit && <Text style={styles.required}>*required</Text>}
          </View>
        )}
        name="LandSharePerUnit"
        defaultValue=""
      />
    <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <View style={styles.paramContainer}>
            <Text style={styles.paramLabel}>Nos of Floors :</Text>
            <PaperTextInput
              style={styles.input}
              keyboardType="numeric"
              value={value}
              onChangeText={onChange}
            />
            {errors.NoOfFloor && <Text style={styles.required}>*required</Text>}
          </View>
        )}
        name="NoOfFloor"
        defaultValue=""
      />  

    <Text style={styles.heading}>Branch</Text>

    <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <View style={styles.paramContainer}>
            <Text style={styles.paramLabel}>Remoteness Factor :</Text>
            <PaperTextInput
              style={styles.input}
              keyboardType="numeric"
              value={value}
              onChangeText={onChange}
            />
            {errors.RemotenessFactor && <Text style={styles.required}>*required</Text>}
          </View>
        )}
        name="RemotenessFactor"
        defaultValue=""
      />  

      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <View style={styles.paramContainer}>
            <Text style={styles.paramLabel}>Base Builup Rate :</Text>
            <PaperTextInput
              style={styles.input}
              keyboardType="numeric"
              value={value}
              onChangeText={onChange}
            />
            {errors.BaseBuildupRate && <Text style={styles.required}>*required</Text>}
          </View>
        )}
        name="BaseBuildupRate"
        defaultValue=""
      />  

      <Text style={styles.heading}> Projects </Text>     

      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <View style={styles.paramContainer}>
            <Text style={styles.paramLabel}>Land Rate at the time of Purchase :</Text>
            <PaperTextInput
              style={styles.input}
              keyboardType="numeric"
              value={value}
              onChangeText={onChange}
            />
            {errors.LandRateattp && <Text style={styles.required}>*required</Text>}
          </View>
        )}
        name="LandRateattp"
        defaultValue=""
      />  
      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <View style={styles.paramContainer}>
            <Text style={styles.paramLabel}>Land Value :</Text>
            <PaperTextInput
              style={styles.input}
              keyboardType="numeric"
              value={value}
              onChangeText={onChange}
            />
            {errors.LandValue && <Text style={styles.required}>*required</Text>}
          </View>
        )}
        name="LandValue"
        defaultValue=""
      /> 
      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <View style={styles.paramContainer}>
            <Text style={styles.paramLabel}>Total Land Area :</Text>
            <PaperTextInput
              style={styles.input}
              keyboardType="numeric"
              value={value}
              onChangeText={onChange}
            />
            {errors.TotalLandArea && <Text style={styles.required}>*required</Text>}
          </View>
        )}
        name="TotalLandArea"
        defaultValue=""
      />

      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <View style={styles.paramContainer}>
            <Text style={styles.paramLabel}>Devlopment Charge :</Text>
            <PaperTextInput
              style={styles.input}
              keyboardType="numeric"
              value={value}
              onChangeText={onChange}
            />
            {errors.DevelopmentCharge && <Text style={styles.required}>*required</Text>}
          </View>
        )}
        name="DevelopmentCharge"
        defaultValue=""
      />  
      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <View style={styles.paramContainer}>
            <Text style={styles.paramLabel}>Legal Charge :</Text>
            <PaperTextInput
              style={styles.input}
              keyboardType="numeric"
              value={value}
              onChangeText={onChange}
            />
            {errors.LegalCharge && <Text style={styles.required}>*required</Text>}
          </View>
        )}
        name="LegalCharge"
        defaultValue=""
      /> 
      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <View style={styles.paramContainer}>
            <Text style={styles.paramLabel}>Net Selling Land Rate  :</Text>
            <PaperTextInput
              style={styles.input}
              keyboardType="numeric"
              value={value}
              onChangeText={onChange}
            />
            {errors.landRate && <Text style={styles.required}>*required</Text>}
          </View>
        )}
        name="landRate"
        defaultValue=""
      /> 
      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <View style={styles.paramContainer}>
            <Text style={styles.paramLabel}>Filling Rate ( in Rupees) :</Text>
            <PaperTextInput
              style={styles.input}
              keyboardType="numeric"
              value={value}
              onChangeText={onChange}
            />
            {errors.fillingRate && <Text style={styles.required}>*required</Text>}
          </View>
        )}
        name="fillingRate"
        defaultValue=""
      /> 

      <Text style={styles.heading}>Unit</Text>

      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <View style={styles.paramContainer}>
            <Text style={styles.paramLabel}>Filling Depth :</Text>
            <PaperTextInput
              style={styles.input}
              keyboardType="numeric"
              value={value}
              onChangeText={onChange}
            />
            {errors.fillingDepth && <Text style={styles.required}>*required</Text>}
          </View>
        )}
        name="fillingDepth"
        defaultValue=""
      /> 
      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <View style={styles.paramContainer}>
            <Text style={styles.paramLabel}>Additional Land Area :</Text>
            <PaperTextInput
              style={styles.input}
              keyboardType="numeric"
              value={value}
              onChangeText={onChange}
            />
            {errors.additonalArea && <Text style={styles.required}>*required</Text>}
          </View>
        )}
        name="additonalArea"
        defaultValue=""
      /> 
      


      {/* Repeat the above Controller code for the remaining inputs */}

      <Button onPress={handleSubmit(onSubmit)}>Calculate</Button>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 5,
    marginBottom:50,
    marginTop:30,
  },
  subContainer:{
    borderWidth:3,
    width:390,
  },

  title: {

    fontSize: 25,
    fontWeight: "bold",
    marginBottom:0,
    padding:20,
  },
  paramContainer: {
    borderWidth:1,
    borderRadius:5,
    paddingLeft:5,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
    marginRight:5,
    marginLeft:5,
  },
  paramLabel: {
    flex:50,

    marginRight: 5,
  },
  input: {
    textAlign:'center',
    borderWidth: 1,
    borderColor: "#fff",
    width: 150,
    height: 40,
    padding: 1,
    paddingRight:10,
  },
  heading:{
    fontSize: 18,
    paddingTop:30,
    paddingBottom:10,
    fontWeight: "bold",
    textAlign: "center",

  },
  required:{
    color:"red",
    fontSize:10

  },
  result: {
    fontSize: 18,
    marginTop: 20,
  },
});

export default App;