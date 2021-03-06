import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import DetailCard from "./DetailCard";

export default class ShowsList extends React.Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <ScrollView style={styles.mainContainer}>
        {this.props.shows.map((show, index) => (
          <DetailCard show={show} key={index} navigation={navigation} user={this.props.user}/>
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 15,
    marginBottom:30,
  }
});
