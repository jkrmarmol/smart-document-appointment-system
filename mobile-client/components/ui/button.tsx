import { View, Text, TouchableOpacity, ViewStyle } from "react-native";
import React from "react";
import { moderateScale } from "react-native-size-matters";

export default function Button({
  children,
  onPress,
  style,
  disabled,
}: {
  children?: React.ReactNode;
  onPress?: () => void;
  style?: ViewStyle;
  disabled?: boolean;
}) {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[
        {
          backgroundColor: "#020066",
          paddingVertical: moderateScale(16),
          borderRadius: moderateScale(10),
          opacity: disabled ? 0.5 : 1,
        },
        style,
      ]}
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
