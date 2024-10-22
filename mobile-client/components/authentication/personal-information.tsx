import { View, Text, TextInput, ScrollView } from "react-native";
import React from "react";
import { moderateScale } from "react-native-size-matters";

export default function PersonalInformation() {
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
            Personal Information
          </Text>
          <Text
            style={{
              fontFamily: "GGSansMedium",
              fontSize: moderateScale(14),
              opacity: 0.4,
              lineHeight: moderateScale(14),
            }}
          >
            Please fill in your personal details below. Ensure the information is accurate and up to date.
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
              First name
            </Text>
            <TextInput
              cursorColor={"#000"}
              placeholder="Enter your first name"
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
              Middle name (optional)
            </Text>
            <TextInput
              cursorColor={"#000"}
              placeholder="Enter your middle name"
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
              Last name
            </Text>
            <TextInput
              cursorColor={"#000"}
              placeholder="Enter your last name"
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
              Address
            </Text>
            <TextInput
              cursorColor={"#000"}
              placeholder="Enter your address"
              multiline
              scrollEnabled
              style={{
                backgroundColor: "#0000000D",
                padding: moderateScale(10),
                borderRadius: moderateScale(8),
                fontSize: moderateScale(13),
                fontFamily: "GGSansMedium",
                height: moderateScale(100),
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
