import React from "react";
import { View, Text, FlatList, StyleSheet, Dimensions } from "react-native";

class List extends React.PureComponent {
  render() {
    const { title, content } = this.props;
    return (
      <View>
        <View>
          <Text>{title}</Text>
        </View>
        <View>
          <FlatList
            data={content}
            horizontal={true}
            renderItem={({ item }) => <Text>{item.title}</Text>}
          ></FlatList>
        </View>
      </View>
    );
  }
}

export default List;
