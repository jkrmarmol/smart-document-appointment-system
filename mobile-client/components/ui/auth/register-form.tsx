import { View, Text, TextInput } from "react-native";
import React from "react";
import Button from "../button";
import { moderateScale } from "react-native-size-matters";
import { router } from "expo-router";

export default function RegisterForm() {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        padding: moderateScale(20),
        borderRadius: moderateScale(20),
      }}
    >
      <Text
        style={{
          fontFamily: "GGSansBold",
          fontSize: moderateScale(20),
          textAlign: "center",
        }}
      >
        Register
      </Text>

      <View
        style={{
          gap: moderateScale(10),
          marginVertical: moderateScale(30),
        }}
      >
        <TextInput
          cursorColor={"#000"}
          placeholder="Enter your email address"
          style={{
            backgroundColor: "#0000000D",
            padding: moderateScale(10),
            borderRadius: moderateScale(8),
            fontSize: moderateScale(15),
            fontFamily: "GGSansMedium",
          }}
        />

        <TextInput
          cursorColor={"#000"}
          placeholder="Enter your password"
          secureTextEntry
          style={{
            backgroundColor: "#0000000D",
            padding: moderateScale(10),
            borderRadius: moderateScale(8),
            fontSize: moderateScale(15),
            fontFamily: "GGSansMedium",
          }}
        />

        <TextInput
          cursorColor={"#000"}
          placeholder="Confirm your password"
          secureTextEntry
          style={{
            backgroundColor: "#0000000D",
            padding: moderateScale(10),
            borderRadius: moderateScale(8),
            fontSize: moderateScale(15),
            fontFamily: "GGSansMedium",
          }}
        />
      </View>

      <View
        style={{
          marginTop: moderateScale(60),
        }}
      >
        <Button onPress={() => router.push("/(authentication-tab)/email-confirmation")}>Register</Button>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          alignSelf: "center",
          marginTop: moderateScale(20),
        }}
      >
        <Text
          style={{
            fontSize: moderateScale(12),
            fontFamily: "GGSansSemiBold",
            textAlign: "center",
            width: "65%",
          }}
        >
          By signing up, You agree to our Terms of User and Privacy Policy
        </Text>
      </View>
    </View>
  );
}
