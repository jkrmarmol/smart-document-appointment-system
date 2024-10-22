import { View, Text, TextInput, ScrollView } from "react-native";
import React from "react";
import { moderateScale } from "react-native-size-matters";

export default function AcademicInformation() {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        padding: moderateScale(20),
        borderRadius: moderateScale(12),
        gap: moderateScale(10),
      }}
    >
      <ScrollView>
        <View
          style={{
            marginBottom: moderateScale(20),
          }}
        >
          <Text
            style={{
              fontFamily: "GGSansBold",
              fontSize: moderateScale(20),
              marginBottom: moderateScale(8),
            }}
          >
            Academic Information
          </Text>
          <Text
            style={{
              fontFamily: "GGSansMedium",
              fontSize: moderateScale(14),
              opacity: 0.4,
              lineHeight: moderateScale(14),
            }}
          >
            Please fill in your academic details below. Ensure the information is accurate and up to date.
          </Text>
        </View>

        <View
          style={{
            gap: moderateScale(20),
          }}
        >
          <View>
            <Text
              style={{
                fontSize: moderateScale(13),
                fontFamily: "GGSansSemiBold",
                marginBottom: moderateScale(5),
              }}
            >
              Student No.
            </Text>
            <TextInput
              cursorColor={"#000"}
              placeholder="Enter your student no."
              style={{
                backgroundColor: "#0000000D",
                padding: moderateScale(10),
                borderRadius: moderateScale(8),
                fontSize: moderateScale(13),
                fontFamily: "GGSansMedium",
              }}
            />
          </View>

          <View>
            <Text
              style={{
                fontSize: moderateScale(13),
                fontFamily: "GGSansSemiBold",
                marginBottom: moderateScale(5),
              }}
            >
              Special Order (if graduated)
            </Text>
            <TextInput
              cursorColor={"#000"}
              placeholder="Enter your special order"
              style={{
                backgroundColor: "#0000000D",
                padding: moderateScale(10),
                borderRadius: moderateScale(8),
                fontSize: moderateScale(13),
                fontFamily: "GGSansMedium",
              }}
            />
          </View>

          <View>
            <Text
              style={{
                fontSize: moderateScale(13),
                fontFamily: "GGSansSemiBold",
                marginBottom: moderateScale(5),
              }}
            >
              LRN
            </Text>
            <TextInput
              cursorColor={"#000"}
              placeholder="Enter your LRN"
              style={{
                backgroundColor: "#0000000D",
                padding: moderateScale(10),
                borderRadius: moderateScale(8),
                fontSize: moderateScale(13),
                fontFamily: "GGSansMedium",
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
