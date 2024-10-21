import { ScrollView, Text, useWindowDimensions, View, StyleSheet } from "react-native";
import React from "react";
import Profile from "./profile";
import ProfileActive from "@/components/svg/profile-active";
import { moderateScale } from "react-native-size-matters";
import { AntDesign, FontAwesome, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";

export default function Home() {
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
          flex: 1,
          marginTop: moderateScale(10),
          gap: moderateScale(10),
        }}
      >
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            backgroundColor: "#fff",
            padding: moderateScale(16),
            borderRadius: moderateScale(10),
          }}
        >
          <ProfileActive
            height={40}
            width={40}
            style={{
              backgroundColor: "#292D3233",
              borderRadius: moderateScale(6),
            }}
          />
          <View
            style={{
              marginLeft: moderateScale(10),
            }}
          >
            <Text
              style={{
                fontFamily: "GGSansMedium",
                fontSize: moderateScale(14),
              }}
            >
              Good Morning!,
            </Text>
            <Text
              style={{
                fontFamily: "GGSansSemiBold",
                fontSize: moderateScale(16),
                marginTop: moderateScale(-5),
              }}
            >
              Kurt Russelle Marmol👋
            </Text>
          </View>
        </View>

        {/* <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            backgroundColor: "#fff",
            padding: moderateScale(16),
            borderRadius: moderateScale(10),
          }}
        >

        </View> */}
        <View style={styles.card}>
          <View style={styles.row}>
            <StatusItem icon={<FontAwesome name="check" size={24} color="green" />} label="Completed" count={24} />
            <StatusItem
              icon={<MaterialCommunityIcons name="file-cancel-outline" size={24} color="blue" />}
              label="Cancelled"
              count={12}
            />
          </View>
          <View style={styles.row}>
            <StatusItem icon={<FontAwesome name="close" size={24} color="red" />} label="Failed" count={45} />
            <StatusItem
              icon={<MaterialIcons name="pending-actions" size={24} color="orange" />}
              label="Pending"
              count={32}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

function StatusItem({ icon, label, count }: { icon: JSX.Element; label: string; count: number }) {
  return (
    <View style={styles.item}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {icon}
        <Text style={styles.count}>{count}</Text>
      </View>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: moderateScale(16),
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  item: {
    alignItems: "center",
    flex: 1,
  },
  count: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 8,
    fontFamily: "GGSansBold",
  },
  label: {
    fontSize: 14,
    color: "#757575",
    fontFamily: "GGSansSemiBold",
  },
});
