import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { moderateScale } from "react-native-size-matters";
import DateModal from "./date-modal";

export default function ScheduleAppointment() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <View>
      <DateModal openModal={openModal} setOpenModal={setOpenModal} />
      <Text
        style={{
          fontFamily: "GGSansBold",
          fontSize: moderateScale(14),
          marginBottom: moderateScale(4),
        }}
      >
        Schedule Options
      </Text>

      <TouchableOpacity
        onPress={() => setOpenModal(!openModal)}
        style={{
          backgroundColor: "#00000008",
          padding: moderateScale(20),
          borderRadius: moderateScale(8),
        }}
      >
        <Text
          style={{
            fontFamily: "GGSansSemiBold",
            opacity: 0.4,
          }}
        >
          Select schedule date...
        </Text>
      </TouchableOpacity>
    </View>
  );
}
