import { Text, ScrollView, useWindowDimensions, View, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { moderateScale } from "react-native-size-matters";
import Button from "@/components/ui/button";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";

export default function Register() {
  const { width } = useWindowDimensions();
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

          <View></View>
          <View></View>
        </SafeAreaView>
      </ScrollView>
    </LinearGradient>
  );
}
