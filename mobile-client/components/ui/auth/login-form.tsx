import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useCallback, useState } from "react";
import { moderateScale } from "react-native-size-matters";
import Button from "../button";
import { Ionicons } from "@expo/vector-icons";
import { router, useFocusEffect } from "expo-router";
import { useAppDispatch, useAppSelector } from "@/hooks/useTypedSelector";
import { cleanUpLoginInput, setLoginEmailInput, setLoginPasswordInput } from "@/redux/auth/loginSlice";
import { toast } from "sonner-native";
import { usePostLogInMutation } from "@/redux/auth/authApiSlice";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const dispatch = useAppDispatch();
  const selectLoginInput = useAppSelector((state) => state.loginReducer.input);
  const [postLogin] = usePostLogInMutation();

  const onClickLogin = async () => {
    try {
      if (!selectLoginInput.email || !selectLoginInput.password) {
        return toast.error("Email & Password Required", {
          description: "Please enter your email and password to login",
        });
      }
      const { data, status } = await postLogin(selectLoginInput).unwrap();
      if (status === 404 && data.message === "User Not Found") {
        return toast.error("User Not Found", {
          description: "User not found, please check your email and password",
        });
      }
      if (status === 400) {
        if (Array.isArray(data.message)) {
          data.message.forEach((msg) => {
            return toast.error("Validation Error", {
              description: msg,
            });
          });
        } else {
          return toast.error("Validation Error", {
            description: data.message,
          });
        }
      }
      if (status === 201 && data.accessToken && data.emailVerified) {
        toast.success("Login Success", {
          description: "You have successfully logged in",
        });
        return router.push("/(dashboard-tab)/home");
      }
      if (status === 401 && data.message === "Email Not Verified") {
        toast.error("Email Not Verified", {
          description: "Please verify your email to login",
        });
        return router.push({
          pathname: "/(authentication-tab)/email-confirmation",
          params: {
            email: selectLoginInput.email,
          },
        });
      }
      return toast.error("An Error Occurred", {
        description: "An error occurred while trying to login",
      });
    } catch (err) {
      if (err instanceof Error) {
        return toast.error("Error", {
          description: err.message,
        });
      }
    }
  };

  useFocusEffect(
    useCallback(() => {
      return () => {
        dispatch(cleanUpLoginInput());
      };
    }, [])
  );

  return (
    <View
      style={{
        backgroundColor: "#fff",
        padding: moderateScale(20),
        borderRadius: moderateScale(20),
      }}
    >
      <Text
        style={{
          fontFamily: "GGSansBold",
          fontSize: moderateScale(20),
          textAlign: "center",
        }}
      >
        Log In
      </Text>

      <View
        style={{
          gap: moderateScale(10),
          marginVertical: moderateScale(30),
        }}
      >
        <TextInput
          cursorColor={"#000"}
          placeholder="Enter your email address"
          onChangeText={(text) => dispatch(setLoginEmailInput(text))}
          style={{
            backgroundColor: "#0000000D",
            padding: moderateScale(10),
            borderRadius: moderateScale(8),
            fontSize: moderateScale(13),
            fontFamily: "GGSansMedium",
          }}
        />

        <View
          style={{
            backgroundColor: "#0000000D",
            padding: moderateScale(10),
            borderRadius: moderateScale(8),
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TextInput
            cursorColor={"#000"}
            secureTextEntry={showPassword}
            placeholder="Enter your password"
            onChangeText={(text) => dispatch(setLoginPasswordInput(text))}
            style={{
              fontSize: moderateScale(13),
              fontFamily: "GGSansMedium",
              flex: 1,
            }}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <Ionicons name="eye-off-outline" size={24} color="black" />
            ) : (
              <Ionicons name="eye" size={24} color="black" />
            )}
          </TouchableOpacity>
        </View>

        <TouchableOpacity>
          <Text
            style={{
              fontSize: moderateScale(12),
              fontFamily: "GGSansSemiBold",
              textAlign: "right",
            }}
          >
            Forgot Password?
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          marginTop: moderateScale(60),
        }}
      >
        <Button onPress={onClickLogin}>Log In</Button>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          alignSelf: "center",
          marginTop: moderateScale(20),
        }}
      >
        <Text
          style={{
            fontSize: moderateScale(12),
            fontFamily: "GGSansSemiBold",
          }}
        >
          Don’t have an account? Register{" "}
        </Text>
        <TouchableOpacity>
          <Text
            style={{
              fontSize: moderateScale(12),
              fontFamily: "GGSansMedium",
              textDecorationLine: "underline",
            }}
          >
            here
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
