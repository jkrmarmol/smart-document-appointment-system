import { View, Text } from "react-native";
import React from "react";
import { moderateScale } from "react-native-size-matters";

export default function BadgeStatus({ variant }: { variant?: "completed" | "pending" | "failed" | "cancelled" }) {
  const { backgroundColor, color, text } = colorVariant(variant);
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: backgroundColor,
        borderRadius: moderateScale(10),
        paddingVertical: moderateScale(2),
        paddingHorizontal: moderateScale(10),
        width: moderateScale(90),
        justifyContent: "center",
        height: moderateScale(25),
      }}
    >
      <Text
        style={{
          fontFamily: "GGSansBold",
          fontSize: moderateScale(12),
          color: color,
        }}
      >
        {text}
      </Text>
    </View>
  );
}

function colorVariant(variant?: "completed" | "pending" | "failed" | "cancelled"): {
  backgroundColor: string;
  color: string;
  text: string;
} {
  if (variant === "completed") {
    return {
      backgroundColor: "#2FE9001A",
      color: "#2FE900",
      text: "Completed",
    };
  }

  if (variant === "pending") {
    return {
      backgroundColor: "#E798001A",
      color: "#E79800",
      text: "Pending",
    };
  }

  if (variant === "failed") {
    return {
      backgroundColor: "#E900021A",
      color: "#E90002",
      text: "Failed",
    };
  }

  if (variant === "cancelled") {
    return {
      backgroundColor: "#0058EA1A",
      color: "#0058EA",
      text: "Cancelled",
    };
  }

  // Default return statement
  return {
    backgroundColor: "#0000001A",
    color: "#000000",
    text: "Unknown",
  };
}
