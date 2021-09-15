import React from "react";
import { Text, SafeAreaView, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

class Navigation extends React.PureComponent {
  state={}
  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView>
        <TouchableOpacity onPress={() => {navigation.goBack()}}>
          <Icon name={"chevron-back"} size={40} color={"green"} />
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

export default Navigation;
