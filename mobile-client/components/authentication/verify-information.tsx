import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { moderateScale } from "react-native-size-matters";

export default function VerifyInformation() {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        padding: moderateScale(20),
        borderRadius: moderateScale(12),
        gap: moderateScale(20),
      }}
    >
      <View style={style.informationItemViewStyle}>
        <Text style={style.labelTextStyle}>First name</Text>
        <Text style={style.inputTextStyle}>John Kurt Russelle</Text>
      </View>

      <View style={style.informationItemViewStyle}>
        <Text style={style.labelTextStyle}>Middle name</Text>
        <Text style={style.inputTextStyle}>N/A</Text>
      </View>

      <View style={style.informationItemViewStyle}>
        <Text style={style.labelTextStyle}>Last name</Text>
        <Text style={style.inputTextStyle}>Marmol</Text>
      </View>

      <View style={style.informationItemViewStyle}>
        <Text style={style.labelTextStyle}>Address</Text>
        <Text style={style.inputTextStyle}>Marikina City</Text>
      </View>

      <View style={style.informationItemViewStyle}>
        <Text style={style.labelTextStyle}>Student No</Text>
        <Text style={style.inputTextStyle}>CA202107835</Text>
      </View>

      <View style={style.informationItemViewStyle}>
        <Text style={style.labelTextStyle}>Special Order</Text>
        <Text style={style.inputTextStyle}>N/A</Text>
      </View>

      <View style={style.informationItemViewStyle}>
        <Text style={style.labelTextStyle}>LRN</Text>
        <Text style={style.inputTextStyle}>IYSEDF782SD</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  informationItemViewStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  labelTextStyle: {
    fontFamily: "GGSansBold",
    fontSize: moderateScale(14),
  },
  inputTextStyle: {
    fontFamily: "GGSansSemiBold",
    fontSize: moderateScale(14),
  },
});
