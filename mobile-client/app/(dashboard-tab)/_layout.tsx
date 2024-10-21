import { useCallback } from "react";
import DocumentActive from "@/components/svg/document-active";
import DocumentInActive from "@/components/svg/document-inactive";
import HomeActive from "@/components/svg/home-active";
import HomeInactive from "@/components/svg/home-inactive";
import ProfileActive from "@/components/svg/profile-active";
import ProfileInActive from "@/components/svg/profile-inactive";
import TransactionActive from "@/components/svg/transaction-active";
import TransactionInActive from "@/components/svg/transaction-inactive";
import { Tabs, useFocusEffect } from "expo-router";
import { setStatusBarStyle } from "expo-status-bar";
import { moderateScale } from "react-native-size-matters";

export default function DashboardTab() {
  useFocusEffect(
    useCallback(() => {
      setStatusBarStyle("dark", true);

      return () => {
        setStatusBarStyle("auto", true);
      };
    }, [])
  );
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          height: moderateScale(55),
          backgroundColor: "#fff",
          elevation: 0,
          shadowOpacity: 0,
        },
        tabBarHideOnKeyboard: true,
        tabBarIcon: ({ focused }) => {
          if (route.name === "home")
            return focused ? (
              <HomeActive height={36} width={36} />
            ) : (
              <HomeInactive height={36} width={36} opacity={0.4} />
            );
          if (route.name === "documents")
            return focused ? (
              <DocumentActive height={36} width={36} />
            ) : (
              <DocumentInActive height={36} width={36} opacity={0.4} />
            );
          if (route.name === "transaction")
            return focused ? (
              <TransactionActive height={36} width={36} />
            ) : (
              <TransactionInActive height={36} width={36} opacity={0.4} />
            );
          if (route.name === "profile")
            return focused ? (
              <ProfileActive height={36} width={36} />
            ) : (
              <ProfileInActive height={36} width={36} opacity={0.4} />
            );
        },
        tabBarLabel: ({ focused }) => {
          return null;
        },
      })}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerShown: true,
          headerTitle: "KUMADOCS",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: "GGSansBold",
            color: "#007AEB",
          },
        }}
      />
      <Tabs.Screen
        name="documents"
        options={{
          headerShown: true,
          headerTitle: "DOCUMENTS",
          headerTitleStyle: {
            fontFamily: "GGSansBold",
            color: "#007AEB",
          },
          headerStyle: {
            backgroundColor: "transparent",
            elevation: 0,
            shadowOpacity: 0,
          },
        }}
      />
      <Tabs.Screen name="transaction" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
}
