import React from "react";
import { View, Text, Image, SafeAreaView, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff", paddingTop: 40 }}>
      <ScrollView>
        {/* Header */}
        <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 20, alignItems: "center" }}>
          <Text style={{ fontSize: 26, fontWeight: "bold" }}>
            Hello 👋{"\n"}
            <Text style={{ fontSize: 18, color: "gray" }}>Christie Doe</Text>
          </Text>
          <Image source={{ uri: "https://i.pravatar.cc/100" }} style={{ width: 50, height: 50, borderRadius: 25 }} />
        </View>

       {/* Your Insights */}
<Text style={{ fontSize: 18, fontWeight: "bold", marginHorizontal: 20, marginTop: 20 }}>Your Insights</Text>
<View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "center", marginTop: 10 }}>
  {[
    { title: "Scan new", count: "Scanned 483", icon: "scan-outline", navigate: "Scan", color: "#4F46E5" },  // Màu xanh dương
    { title: "Counterfeits", count: "Counterfeited 32", icon: "alert-circle-outline", color: "#EF4444" },  // Màu đỏ
    { title: "Success", count: "Checkouts 8", icon: "checkmark-circle-outline", color: "#10B981" },  // Màu xanh lá
    { title: "Directory", count: "History 26", icon: "calendar-outline", color: "#F59E0B" },  // Màu cam
  ].map((item, index) => (
    <TouchableOpacity 
      key={index} 
      onPress={() => item.navigate && navigation.navigate(item.navigate)}
      style={{
        width: "40%", backgroundColor: "#f9f9f9", margin: 10, padding: 20, borderRadius: 10,
        alignItems: "center", justifyContent: "center"
      }}>
      <Ionicons name={item.icon} size={40} color={item.color} />  
      <Text style={{ fontWeight: "bold", fontSize: 16, marginTop: 10 }}>{item.title}</Text>
      <Text style={{ color: "gray", marginTop: 5 }}>{item.count}</Text>
    </TouchableOpacity>
  ))}
</View>


        {/* Explore More */}
        <Text style={{ fontSize: 18, fontWeight: "bold", marginHorizontal: 20, marginTop: 20 }}>Explore More</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginVertical: 10, paddingLeft: 20 }}>
          {[1, 2, 3].map((item) => (
            <View key={item} style={{
              width: 120, height: 150, backgroundColor: "#e5e7eb", marginRight: 10, borderRadius: 10
            }} />
          ))}
        </ScrollView>
      </ScrollView>

      {/* Bottom Navigation */}
     <View style={{ flexDirection: "row", justifyContent: "space-around", paddingVertical: 15, backgroundColor: "#fff", borderTopWidth: 1, borderColor: "#e5e7eb" }}>
  {[
    { icon: "home", bgColor: "#D0EDFBCC", showBadge: false },  
    { icon: "notifications", bgColor: "transparent", showBadge: true },  // Hiển thị badge cho thông báo
    { icon: "scan", bgColor: "transparent", showBadge: false },
    { icon: "time-outline", bgColor: "transparent", showBadge: false }, 
    { icon: "cart", bgColor: "transparent", showBadge: false },
  ].map((item, index) => (
    <TouchableOpacity key={index} style={{
      padding: 10,
      borderRadius: 10,
      backgroundColor: item.bgColor, 
      position: "relative"  // Để định vị dấu chấm đỏ
    }}>
      <Ionicons name={item.icon} size={28} color="gray" />
      
      {/* Dấu chấm đỏ */}
      {item.showBadge && (
        <View style={{
          position: "absolute",
          top: 5,
          right: 5,
          width: 10,
          height: 10,
          borderRadius: 5,
          backgroundColor: "red",
        }} />
      )}
    </TouchableOpacity>
  ))}
</View>


    </SafeAreaView>
  );
}
