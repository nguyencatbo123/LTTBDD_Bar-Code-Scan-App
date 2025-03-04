import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ScanScreen({ navigation }) {
  return (
    <View style={{ flex: 1, backgroundColor: "#F9E8D9", justifyContent: "center", alignItems: "center" }}>
      {/* Nút quay lại */}
      <TouchableOpacity style={{ position: "absolute", top: 50, left: 20 }} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={30} color="#000" />
      </TouchableOpacity>

      {/* Ảnh chai nước từ thư mục assets */}
      <Image source={require("./assets/th.png")} style={{ width: 200, height: 400, resizeMode: "contain" }} />


      {/* Hộp thông tin sản phẩm */}
      <View style={{
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 15,
        position: "absolute",
        bottom: 50,
        width: "90%",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      }}>
       <Image source={require("./assets/th.png")} style={{ width: 40, height: 40, resizeMode: "contain" }} />

        <View style={{ marginLeft: 15 }}>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>Lauren's</Text>
          <Text style={{ fontSize: 18 }}>Orange Juice</Text>
        </View>
        <TouchableOpacity style={{
          marginLeft: "auto",
          backgroundColor: "#4F46E5",
          padding: 10,
          borderRadius: 10,
        }}>
          <Ionicons name="add" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
