import React, { useState, useEffect } from "react";
import { Camera } from "expo-camera";

import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  Ionicons,
  FontAwesome,
  TouchableHighlight,
  MaterialCommunityIcons,
  View,
} from "react-native";

const ModalImage = ({ setModalVisible, modalVisibility }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type}>
        <View
          style={{
            flex: 1,
            backgroundColor: "transparent",
            flexDirection: "row",
          }}
        >
          <TouchableOpacity
            style={{
              flex: 0.1,
              alignSelf: "flex-end",
              alignItems: "center",
            }}
            onPress={() => {
              setModalVisible(false);
            }}
          >
            <Text style={{ fontSize: 18, marginBottom: 10, color: "white" }}>
              {" "}
              Snap{" "}
            </Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
};
export default ModalImage;
