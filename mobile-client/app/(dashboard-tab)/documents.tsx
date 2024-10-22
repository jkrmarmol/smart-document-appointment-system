import { ScrollView, TextInput, TouchableOpacity, useWindowDimensions, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { moderateScale } from "react-native-size-matters";
import { AntDesign } from "@expo/vector-icons";
import DocumentItem from "@/components/ui/document-item";
import { router } from "expo-router";

export default function Documents() {
  const { width } = useWindowDimensions();
  return (
    <View
      style={{
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
            onPress={() => router.push("/(dashboard-screen)/request-document")}
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

      <ScrollView
        contentContainerStyle={{
          paddingVertical: moderateScale(20),
          width: width,
          alignItems: "center",
          gap: moderateScale(10),
        }}
      >
        <DocumentItem />
        <DocumentItem />
        <DocumentItem />
        <DocumentItem />
        <DocumentItem />
        <DocumentItem />
        <DocumentItem />
        <DocumentItem />
        <DocumentItem />
        <DocumentItem />
        <DocumentItem />
        <DocumentItem />
        <DocumentItem />
        <DocumentItem />
        <DocumentItem />
        <DocumentItem />
        <DocumentItem />
        <DocumentItem />
        <DocumentItem />
        <DocumentItem />
        <DocumentItem />
        <DocumentItem />
        <DocumentItem />
        <DocumentItem />
        <DocumentItem />
      </ScrollView>
    </View>
  );
}
