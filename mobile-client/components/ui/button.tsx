import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { moderateScale } from "react-native-size-matters";

export default function Button({ children, onPress }: { children?: React.ReactNode; onPress?: () => void }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: "#020066",
        paddingVertical: moderateScale(16),
        borderRadius: moderateScale(10),
      }}
    >
      <Text
        style={{
          textAlign: "center",
          color: "#fff",
          fontFamily: "GGSansBold",
          fontSize: moderateScale(14),
        }}
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
}
