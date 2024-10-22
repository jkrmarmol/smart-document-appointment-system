import React, { useCallback } from "react";
import { Stack, useFocusEffect } from "expo-router";
import { setStatusBarStyle } from "expo-status-bar";

export default function DashboardScreenLayout() {
  useFocusEffect(
    useCallback(() => {
      setStatusBarStyle("dark", true);

      return () => {
        setStatusBarStyle("auto", true);
      };
    }, [])
  );
  return (
    <Stack>
      <Stack.Screen
        name="request-document"
        options={{
          title: "REQUEST DOCUMENT",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontFamily: "GGSansBold",
            color: "#007AEB",
          },
        }}
      />
    </Stack>
  );
}
