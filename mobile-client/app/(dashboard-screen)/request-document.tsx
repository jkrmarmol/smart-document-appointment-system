import { View, Text, ScrollView, useWindowDimensions, TouchableOpacity, Modal } from "react-native";
import React, { useState } from "react";
import { moderateScale } from "react-native-size-matters";
import { DropdownSelect } from "react-native-input-select";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import ScheduleAppointment from "@/components/ui/appointment-date/schedule-appointment";
import Button from "@/components/ui/button";

export default function RequestDocument() {
  const { width } = useWindowDimensions();
  const [selectedDocument, setSelectedDocument] = useState<Array<string>>([]);
  const [selectedDeliveryOptions, setSelectedDeliveryOptions] = useState<Array<string>>([]);
  const [selectedPaymentOptions, setSelectedPaymentOptions] = useState<Array<string>>([]);

  return (
    <ScrollView
      contentContainerStyle={{
        backgroundColor: "#F5F6FA",
        flex: 1,
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: (90 / 100) * width,
        }}
      >
        <Text
          style={{
            fontFamily: "GGSansBold",
            fontSize: moderateScale(28),
            marginVertical: moderateScale(20),
          }}
        >
          Request a document you needed!
        </Text>

        <View
          style={{
            backgroundColor: "#FFF",
            padding: moderateScale(20),
            borderRadius: moderateScale(8),
          }}
        >
          <View>
            <Text
              style={{
                fontFamily: "GGSansBold",
                fontSize: moderateScale(14),
                marginBottom: moderateScale(4),
              }}
            >
              Document
            </Text>
            <DropdownSelect
              placeholder="Select documents..."
              options={[
                { label: "Pizza", value: "A" },
                { label: "Burger", value: "B" },
                { label: "Risotto", value: "C" },
              ]}
              labelStyle={{
                fontFamily: "GGSansBold",
              }}
              placeholderStyle={{
                fontFamily: "GGSansSemiBold",
                opacity: 0.4,
              }}
              multipleSelectedItemStyle={{
                fontFamily: "GGSansBold",
              }}
              dropdownStyle={{
                borderWidth: 0,
                backgroundColor: "#00000008",
              }}
              selectedValue={selectedDocument}
              onValueChange={(itemValue: any) => setSelectedDocument(itemValue)}
              isMultiple
              isSearchable
              primaryColor={"#007AEB"}
              listComponentStyles={{
                sectionHeaderStyle: {
                  backgroundColor: "#007AEB",
                  borderRadius: moderateScale(4),
                  color: "white",
                  fontFamily: "GGSansBold",
                },
              }}
            />
          </View>

          <View>
            <Text
              style={{
                fontFamily: "GGSansBold",
                fontSize: moderateScale(14),
                marginBottom: moderateScale(4),
              }}
            >
              Delivery Options
            </Text>
            <DropdownSelect
              placeholder="Select delivery options..."
              options={[
                { label: "Pizza", value: "A" },
                { label: "Burger", value: "B" },
                { label: "Risotto", value: "C" },
              ]}
              labelStyle={{
                fontFamily: "GGSansBold",
              }}
              placeholderStyle={{
                fontFamily: "GGSansSemiBold",
                opacity: 0.4,
              }}
              multipleSelectedItemStyle={{
                fontFamily: "GGSansBold",
              }}
              dropdownStyle={{
                borderWidth: 0,
                backgroundColor: "#00000008",
              }}
              selectedValue={selectedDeliveryOptions}
              onValueChange={(itemValue: any) => setSelectedDeliveryOptions(itemValue)}
              primaryColor={"#007AEB"}
              listComponentStyles={{
                sectionHeaderStyle: {
                  padding: 10,
                  backgroundColor: "#007AEB",
                  borderRadius: moderateScale(4),
                  color: "white",
                  fontFamily: "GGSansBold",
                },
              }}
            />
          </View>

          <ScheduleAppointment />

          <View
            style={{
              marginTop: moderateScale(14),
            }}
          >
            <Text
              style={{
                fontFamily: "GGSansBold",
                fontSize: moderateScale(14),
                marginBottom: moderateScale(4),
              }}
            >
              Payment Options
            </Text>
            <DropdownSelect
              placeholder="Select payment options..."
              options={[
                { label: "GCash", value: "GCash" },
                { label: "PayMaya", value: "PayMaya" },
                { label: "Credit Card", value: "Credit Card" },
              ]}
              labelStyle={{
                fontFamily: "GGSansBold",
              }}
              placeholderStyle={{
                fontFamily: "GGSansSemiBold",
                opacity: 0.4,
              }}
              multipleSelectedItemStyle={{
                fontFamily: "GGSansBold",
              }}
              dropdownStyle={{
                borderWidth: 0,
                backgroundColor: "#00000008",
              }}
              selectedValue={selectedPaymentOptions}
              onValueChange={(itemValue: any) => setSelectedPaymentOptions(itemValue)}
              primaryColor={"#007AEB"}
              listComponentStyles={{
                sectionHeaderStyle: {
                  padding: 10,
                  backgroundColor: "#007AEB",
                  borderRadius: moderateScale(4),
                  color: "white",
                  fontFamily: "GGSansBold",
                },
              }}
            />
          </View>
        </View>

        <View
          style={{
            marginTop: moderateScale(20),
          }}
        >
          <Button>Submit</Button>
        </View>
      </View>
    </ScrollView>
  );
}
