import { View, Text, ImageBackground,Linking } from "react-native";
import React from "react";
import styles from "./styles";
import StyledButton from "../styledButton";

const CarItem = (props) => {

    const {name,tagLine,tagLineCTA,image,coLink,viLink,typ} = props.car;


  return (
    <View style={styles.carcontainer}>
      <ImageBackground
        source={image}
        style={styles.image}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
            {tagLine}
            {' '}
            <Text style={styles.subtitleCTA}>{tagLineCTA}</Text>
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <StyledButton
          type="primary"
          content={typ === "car" ? "Custom Order" : "Order Now"}
          onPress={() => {
            Linking.openURL(coLink)
          }}
        />
        <StyledButton
          type="secondary"
          content={typ === "car" ? "View Inventory" : "Learn More"}
          onPress={() => {
            Linking.openURL(viLink)
          }}
        />
      </View>
    </View>
  );
};

export default CarItem;
