import { useWindowDimensions, View, Text } from "react-native";
import { Image } from "expo-image";
import { moderateScale } from "react-native-size-matters";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import Button from "@/components/ui/button";

export default function HomeScreen() {
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
      <View
        style={{
          width: (90 / 100) * width,
          alignSelf: "center",
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <View
          style={{
            alignItems: "center",
            height: "50%",
          }}
        >
          <Image
            source={require("../../assets/images/logo.png")}
            style={{
              width: moderateScale(100),
              height: moderateScale(100),
            }}
            contentFit="contain"
          />
          <View
            style={{
              width: "80%",
              marginVertical: moderateScale(10),
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontFamily: "GGSansExtraBold",
                fontSize: moderateScale(48),
                textTransform: "uppercase",
                letterSpacing: -2,
                paddingTop: moderateScale(16),
                lineHeight: moderateScale(38),
                color: "#fff",
              }}
            >
              Welcome to KumaDocs
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontFamily: "GGSansMedium",
                fontSize: moderateScale(14),
                lineHeight: moderateScale(20),
                letterSpacing: 2,
                color: "#fff",
              }}
            >
              Pellentesque aliquam nisl at nibh pretium, ac laoreet orci.
            </Text>
          </View>
        </View>

        <View
          style={{
            width: (90 / 100) * width,
            gap: 10,
            bottom: 20,
            position: "absolute",
          }}
        >
          <Button onPress={() => router.push("/(authentication-tab)/register")}>Register</Button>
          <Button onPress={() => router.push("/(authentication-tab)/login")}>Log In</Button>

          <Text
            style={{
              textAlign: "center",
              fontFamily: "GGSansMedium",
              fontSize: moderateScale(8),
              lineHeight: moderateScale(20),
              letterSpacing: 2,
              color: "#fff",
            }}
          >
            Design & Developed by Kurt Russelle Marmol
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
}
