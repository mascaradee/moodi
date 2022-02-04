import { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import DatePicker from "./DatePicker";
import { Feather, AntDesign } from "@expo/vector-icons";

export default ({ navigation, route }) => {
  const [datePicker, setDatePicker] = useState(false);

  const cancelAlert = () => {
    Alert.alert("", "작성한 내용이 저장되지 않아요. 화면을 닫을까요?", [
      { text: "X" },
      {
        text: "V",
        onPress: () => navigation.navigate("Home"),
      },
    ]);
  };
  const save = () => {
    navigation.navigate("Home");
  };

  const checkSwitch = () => {
    let r = "";
    switch (route.params.mood) {
      case "annoying":
        r = require("./assets/characters/annoying.png");
        break;
      case "flutter":
        r = require("./assets/characters/flutter.png");
        break;
      case "great":
        r = require("./assets/characters/great.png");
        break;
      case "peaceful":
        r = require("./assets/characters/peaceful.png");
        break;
      case "sad":
        r = require("./assets/characters/sad.png");
        break;
      case "soso":
        r = require("./assets/characters/soso.png");
        break;
      case "tired":
        r = require("./assets/characters/tired.png");
        break;
      case "wonderful":
        r = require("./assets/characters/wonderful.png");
        break;
      case "worry":
        r = require("./assets/characters/worry.png");
        break;
    }
    return r;
  };

  const callDatePicker = () => {
    if (datePicker === false) {
      setDatePicker(true);
    } else { 
      setDatePicker(false);
    }
    
  }    
  console.log(datePicker);

  return (
    <View style={styles.container}>
      {route.params.mode === "add" ? (
        <DatePicker />
      ) : (
        <Text>This is {route.params.name}'s profile</Text>
      )}
      <View style={styles.header}>
        <TouchableOpacity onPress={cancelAlert}>
          <Feather name="x" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.monthText}>February 2022</Text>
        <TouchableOpacity onPress={save}>
          <AntDesign name="check" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.contents}>
        <View style={styles.dateDayBox}>
          <TouchableOpacity onPress={callDatePicker}>
            { datePicker  === true ? <DatePicker/ >: console.log(datePicker) }
            <Text style={styles.dateText}>3</Text>
          </TouchableOpacity>
          <Text style={styles.dayText}>THU</Text>
        </View>
        <View style={styles.imageBox}>
          <Image style={styles.buttonImage} source={checkSwitch()} />
          <Text style={styles.moodMent}>짜증나</Text>
          <TextInput
            multiline
            style={styles.mainText}
          >여기다가 일기 씀. 얼마나 길게 쓸지는 아무도 모름. 무슨 말을 쓸지도 아무도 모름</TextInput>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flex: 0.06,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  monthText: {
    fontFamily: "CookieRun",
  },
  contents: {
    flex: 0.85,
    borderWidth: 1,
    // margin: 0
    // flexDirection: "row",
  },
  dateDayBox: {
    flexDirection: "row",
    margin: 20,
  },
  dateText: {
    fontSize: 40,
    fontWeight: "bold",
    marginLeft: 10
  },
  dayText: {
    fontSize: 15,
    marginTop: 25,
    marginLeft: 10,
    fontFamily: "CookieRun",
  },
  imageBox: {
    flex: 1,
    alignItems: "center"
  },
  buttonImage: {
    width: 110,
    height: 110,
  },
  moodMent: {
    margin: 10,
    fontSize: 20,
    fontFamily: "CookieRun",
  },
  mainText: {
    fontSize: 15,
    fontFamily: "CookieRun",
    paddingLeft: 50,
    paddingRight: 50,
    textAlign: "center"

  }
});
