import { Text, ScrollView, useWindowDimensions, View, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { moderateScale } from "react-native-size-matters";
import Ionicons from "@expo/vector-icons/Ionicons";
import Button from "@/components/ui/button";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";

export default function Login() {
  const { width } = useWindowDimensions();
  const [showPassword, setShowPassword] = useState<boolean>(true);
  return (
    <LinearGradient
      colors={["#E900C4", "#007AEB"]}
      style={{
        flex: 1,
      }}
      start={{
        x: 1.8,
        y: 0,
      }}
    >
      <ScrollView
        contentContainerStyle={{
          flex: 1,
        }}
      >
        <SafeAreaView
          style={{
            width: (90 / 100) * width,
            alignSelf: "center",
            justifyContent: "space-around",
            flex: 1,
          }}
        >
          <View>
            <Image
              source={require("@/assets/images/logo.png")}
              style={{
                width: 90,
                height: 90,
              }}
              contentFit="contain"
            />
            <Text
              style={{
                fontFamily: "GGSansBold",
                fontSize: moderateScale(30),
                color: "#fff",
              }}
            >
              Hey there 👋
            </Text>
          </View>

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
              Log In
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

              <View
                style={{
                  backgroundColor: "#0000000D",
                  padding: moderateScale(10),
                  borderRadius: moderateScale(8),
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <TextInput
                  cursorColor={"#000"}
                  secureTextEntry={showPassword}
                  placeholder="Enter your password"
                  style={{
                    fontSize: moderateScale(15),
                    fontFamily: "GGSansMedium",
                    flex: 1,
                  }}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                  {showPassword ? (
                    <Ionicons name="eye-off-outline" size={24} color="black" />
                  ) : (
                    <Ionicons name="eye" size={24} color="black" />
                  )}
                </TouchableOpacity>
              </View>

              <TouchableOpacity>
                <Text
                  style={{
                    fontSize: moderateScale(12),
                    fontFamily: "GGSansSemiBold",
                    textAlign: "right",
                  }}
                >
                  Forgot Password?
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                marginTop: moderateScale(60),
              }}
            >
              <Button onPress={() => router.push("/(dashboard-tab)/home")}>Log In</Button>
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
                }}
              >
                Don’t have an account? Register{" "}
              </Text>
              <TouchableOpacity>
                <Text
                  style={{
                    fontSize: moderateScale(12),
                    fontFamily: "GGSansMedium",
                    textDecorationLine: "underline",
                  }}
                >
                  here
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View></View>
          <View></View>
        </SafeAreaView>
      </ScrollView>
    </LinearGradient>
  );
}
