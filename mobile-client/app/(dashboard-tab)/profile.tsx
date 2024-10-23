import { Text, TouchableOpacity, useWindowDimensions, View } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { Image } from "expo-image";
import { router, useFocusEffect } from "expo-router";
import { useCallback } from "react";
import { setStatusBarStyle } from "expo-status-bar";
import * as SecureStore from "expo-secure-store";
import { useGetSessionQuery } from "@/redux/auth/authApiSlice";

export default function Profile() {
  const { width } = useWindowDimensions();
  const { refetch: refetchGetSession } = useGetSessionQuery({});

  const onClickLogout = async () => {
    await SecureStore.deleteItemAsync("token");
    await refetchGetSession();
    return router.push("/(authentication-tab)/");
  };

  useFocusEffect(
    useCallback(() => {
      setStatusBarStyle("light", true);

      return () => {
        setStatusBarStyle("dark", true);
      };
    }, [])
  );
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#F5F6FA",
      }}
    >
      <View>
        <View
          style={{
            backgroundColor: "#020066",
            height: moderateScale(260),
          }}
        ></View>
        <View
          style={{
            backgroundColor: "#fff",
            borderRadius: moderateScale(1000),
            justifyContent: "center",
            alignItems: "center",
            width: moderateScale(110),
            height: moderateScale(110),
            position: "absolute",
            bottom: moderateScale(-50),
            left: moderateScale(30),
          }}
        >
          <Image
            source={{
              uri: "https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj",
            }}
            style={{
              width: moderateScale(100),
              height: moderateScale(100),
              borderRadius: moderateScale(1000),
            }}
          />
        </View>
      </View>
      <TouchableOpacity
        onPress={onClickLogout}
        style={{
          backgroundColor: "#0000000D",
          height: moderateScale(50),
          justifyContent: "center",
          alignItems: "center",
          width: (90 / 100) * width,
          alignSelf: "center",
          position: "absolute",
          bottom: moderateScale(10),
          borderRadius: moderateScale(10),
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontFamily: "GGSansBold",
            opacity: 0.6,
            fontSize: moderateScale(13),
          }}
        >
          Log Out
        </Text>
      </TouchableOpacity>
    </View>
  );
}
