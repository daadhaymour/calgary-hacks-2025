import React from "react";
import { Image, View, StyleSheet } from "react-native";
import FastImage from "react-native-fast-image";

const Plant = ({ stage }) => {
    const plantImages = {
      stage1: require("../assets/images/plant1.png"),
      stage2: require("../assets/images/plant2.png"),
      stage3: require("../assets/images/plant3.png"),
      stage4: require("../assets/images/plant4.png"),
      stage5: require("../assets/images/plant5.png"),
      stage6: require("../assets/images/plant6.png"),

      wilted_stage1: require("../assets/images/wilted1.png"),
      wilted_stage2: require("../assets/images/wilted2.png"),
      wilted_stage3: require("../assets/images/wilted3.png"),
      wilted_stage4: require("../assets/images/wilted4.png"),
      wilted_stage5: require("../assets/images/wilted5.png"),
      wilted_stage6: require("../assets/images/wilted6.png"),

      wilted: require("../assets/images/plant-wilted.png"),
    };

    return (
        <View style={styles.container}>
          <FastImage source={plantImages[stage]} style={styles.plant} />
        </View>
      );
};

const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      justifyContent: "center",
    },
    plant: {
      width: 100,
      height: 100,
    },
  });
  
  export default Plant;
