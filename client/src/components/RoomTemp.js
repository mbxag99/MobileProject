import React from "react";
import {
  Dimensions,
  ImageBackground,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-elements";
import Room from "../screens/Room";

const { width: WINDOW_WIDTH, height: WINDOW_HEIGHT } = Dimensions.get("window");
const statusBarHeight = StatusBar.currentHeight || 0;
export default function RoomTemp({
  navigation,
  id,
  caption,
  numParticipants,
  tags,
  image,
}) {
  return (
    <View
      style={{
        height: WINDOW_HEIGHT - 100,
        width: WINDOW_WIDTH,
      }}
    >
      <ImageBackground
        resizeMode="cover"
        source={{ uri: image }}
        blurRadius={8}
        style={{
          width: "100%",
          height: "100%",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity style={{ flex: 0.1, justifyContent: "center" }}>
          <Icon
            name="volume-mute-outline"
            type="ionicon"
            size={40}
            color="#517fa4"
          />
        </TouchableOpacity>
        <View style={{ flex: 0.9, justifyContent: "center" }}>
          <Text style={{ backgroundColor: "red" }}>{caption}</Text>
          <Text style={{ backgroundColor: "red" }}>{numParticipants}</Text>
          <Text style={{ backgroundColor: "red" }}>{tags}</Text>
        </View>
        <TouchableOpacity
          style={{ backgroundColor: "rgba(52, 52, 52, 0.8)" }}
          onPress={() => navigation.navigate("Room", { id: id })}
        >
          <Icon size={100} name="pointer" type="evilicon" color="#517fa4" />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}