import { View, Modal, useWindowDimensions } from "react-native";
import React, { useState } from "react";
import { Calendar } from "react-native-calendars";
import { moderateScale } from "react-native-size-matters";

export default function DateModal({
  openModal,
  setOpenModal,
}: {
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
}) {
  const { width } = useWindowDimensions();
  const [selectedDate, setSelectedDate] = useState("");
  const onClickDate = (date: string) => {
    setSelectedDate(date);
    setOpenModal(false);
  };

  return (
    <Modal
      statusBarTranslucent
      visible={openModal}
      transparent
      onRequestClose={() => setOpenModal(false)}
      animationType="fade"
    >
      <View
        style={{
          flex: 1,
          backgroundColor: "#00000066",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Calendar
          style={{
            width: (90 / 100) * width,
            borderRadius: moderateScale(8),
          }}
          onDayPress={(day: any) => {
            onClickDate(day.dateString);
          }}
          theme={{
            backgroundColor: "#ffffff",
            calendarBackground: "#ffffff",
            textSectionTitleColor: "#b6c1cd",
            selectedDayBackgroundColor: "#00adf5",
            selectedDayTextColor: "#ffffff",
            todayTextColor: "#00adf5",
            dayTextColor: "#2d4150",
            textDisabledColor: "#dd99ee",
          }}
          markedDates={{
            [selectedDate]: { selected: true, disableTouchEvent: true, selectedDotColor: "orange" },
            ["2024-10-28"]: { disableTouchEvent: true, disabled: true },
          }}
        />
      </View>
    </Modal>
  );
}
