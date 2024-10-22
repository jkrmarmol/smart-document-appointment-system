import { View, Text, useWindowDimensions, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import BadgeStatus from "./badge-status";
import { moderateScale } from "react-native-size-matters";

export default function DocumentItem() {
  const { width } = useWindowDimensions();
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#fff",
        padding: moderateScale(12),
        width: (90 / 100) * width,
        borderRadius: moderateScale(10),
        elevation: 1,
        // marginVertical: moderateScale(4),
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Ionicons name="document" size={34} color="black" />
        <View
          style={{
            marginLeft: moderateScale(6),
          }}
        >
          <Text
            style={{
              fontFamily: "GGSansSemiBold",
              fontSize: moderateScale(14),
            }}
          >
            Summary of Grades
          </Text>
          <Text
            style={{
              fontFamily: "GGSansSemiBold",
              fontSize: moderateScale(14),
              opacity: 0.4,
            }}
          >
            ntsxmfza4t1k
          </Text>
        </View>
      </View>
      <BadgeStatus variant="failed" />
    </TouchableOpacity>
  );
}
