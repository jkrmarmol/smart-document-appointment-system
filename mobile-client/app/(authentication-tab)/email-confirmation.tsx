import { Text, ScrollView, useWindowDimensions, View, TextInput, TouchableOpacity } from "react-native";
import React, { useRef, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { OtpInput, OtpInputRef } from "react-native-otp-entry";
import { moderateScale } from "react-native-size-matters";
import Ionicons from "@expo/vector-icons/Ionicons";
import Button from "@/components/ui/button";
import { LinearGradient } from "expo-linear-gradient";

export default function EmailConfirmation() {
  const { width } = useWindowDimensions();
  const otpRef = useRef<OtpInputRef>(null);
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
            justifyContent: "center",
            flex: 1,
          }}
        >
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
              Email Verification
            </Text>

            <OtpInput
              ref={otpRef}
              numberOfDigits={4}
              focusColor="#007AEB"
              type="numeric"
              autoFocus={false}
              focusStickBlinkingDuration={500}
              // onFilled={onClickVerify}
              textInputProps={{
                accessibilityLabel: "One-Time Password",
              }}
              theme={{
                containerStyle: {
                  marginVertical: moderateScale(20),
                  // opacity: loading ? 0.5 : 1,
                },
                pinCodeContainerStyle: {
                  width: "24%",
                  borderRadius: moderateScale(20),
                },
                pinCodeTextStyle: { color: "#fff" },
                filledPinCodeContainerStyle: { backgroundColor: "#007AEB" },
              }}
            />

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginVertical: moderateScale(20),
              }}
            >
              <Text
                style={{
                  fontFamily: "GGSansSemiBold",
                  fontSize: moderateScale(14),
                  opacity: 0.4,
                }}
              >
                Din't you received the OTP?{" "}
              </Text>
              <TouchableOpacity>
                <Text
                  style={{
                    fontFamily: "GGSansSemiBold",
                    fontSize: moderateScale(14),
                    color: "#007AEB",
                  }}
                >
                  RESEND OTP
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                marginTop: moderateScale(60),
              }}
            >
              <Button>Verify</Button>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </LinearGradient>
  );
}
