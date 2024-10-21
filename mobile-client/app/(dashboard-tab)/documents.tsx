import { ScrollView, TextInput, TouchableOpacity, useWindowDimensions, View, Text } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { moderateScale } from "react-native-size-matters";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import Badge from "@/components/ui/badge-status";
import BadgeStatus from "@/components/ui/badge-status";
import DocumentItem from "@/components/ui/document-item";

export default function Documents() {
  const { width } = useWindowDimensions();
  return (
    <ScrollView
      contentContainerStyle={{
        backgroundColor: "#F5F6FA",
        alignItems: "center",
        flex: 1,
      }}
    >
      <View
        style={{
          width: (90 / 100) * width,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: moderateScale(10),
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#fff",
              height: moderateScale(48),
              paddingHorizontal: moderateScale(14),
              borderRadius: moderateScale(10),
              elevation: 1,
              flex: 1,
            }}
          >
            <FontAwesome name="search" size={22} color="black" />
            <TextInput
              cursorColor={"#000"}
              placeholder="Search"
              style={{
                fontFamily: "GGSansSemiBold",
                fontSize: moderateScale(13),
                marginLeft: moderateScale(6),
              }}
            />
          </View>

          <TouchableOpacity
            style={{
              backgroundColor: "#fff",
              borderRadius: moderateScale(10),
              height: moderateScale(48),
              elevation: 1,
              justifyContent: "center",
              alignItems: "center",
              width: moderateScale(80),
            }}
          >
            <AntDesign name="addfile" size={24} color="#007AEB" />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          gap: moderateScale(10),
          marginTop: moderateScale(20),
        }}
      >
        <DocumentItem />
        <DocumentItem />
        <DocumentItem />
        <DocumentItem />
      </View>
    </ScrollView>
  );
}
