import { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Image,
  TextInput,
  Modal,
  Pressable,
} from "react-native";
import DatePicker from "./DatePicker";
import { Feather, AntDesign, Entypo } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import EmojiBoard from "react-native-emoji-board";

export default ({ navigation, route }) => {
  const [datePicker, setDatePicker] = useState(false);
  const [text, setChangeText] = useState("");
  const [alignStatus, setAlignStatus] = useState(0);
  const [image, setImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  // const [alignText, setAlignText] = useState("center");
  const [showEmoji, setShowEmoji] = useState(false);

  const onClickEmoji = emoji => {
    console.log(emoji);
};

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
  };
  const showTime = () => {
    const d = new Date();
    const c = `${d.getHours() - 12}:${d.getMinutes()} ${
      d.getHours() < 12 ? "AM" : "PM"
    }`;
    const beforeText = text;
    setChangeText(beforeText + c);
  };
  const beAlign = () => {
    // const center = 0; default = center
    // const left = 1;
    // const right = 2;
    switch (alignStatus) {
      case 0:
        setAlignStatus(1);
        break;
      case 1:
        setAlignStatus(2);
        break;
      default:
        setAlignStatus(0);
        break;
    }
    // changeTextAlign();
  };

  const pickImage = async () => {
    if (image) {
      setModalVisible(true);
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  // const changeTextAlign = () => {
  //   switch (alignStatus) {
  //     case 0:
  //       setAlignText("center");
  //       break;
  //     case 1:
  //       setAlignText("left");
  //       break;
  //     default:
  //       setAlignText("right");
  //       break;
  //   }
  //   console.log("alignText: " + alignText);
  // };

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
            {datePicker === true ? <DatePicker /> : null}
            <Text style={styles.dateText}>3</Text>
          </TouchableOpacity>
          <Text style={styles.dayText}>THU</Text>
        </View>
        <View style={styles.textBox}>
          <Image style={styles.buttonImage} source={checkSwitch()} />
          <Text style={styles.moodMent}>짜증나</Text>
          <View>
            <TextInput
              multiline
              style={styles.mainText}
              value={text}
              onChangeText={setChangeText}
              textAlign="center"
            />
            {image && (
              <Image
                source={{ uri: image }}
                style={{ width: 200, height: 200 }}
              />
            )}
          </View>
        </View>
      </View>
      <View style={styles.buttonBox}>
        <View style={styles.leftButtons}>
          <TouchableOpacity onPress={pickImage}>
            <AntDesign
              name="picture"
              size={24}
              color="black"
              style={styles.button}
            />
          </TouchableOpacity>
          <Modal
            animationType="slide"
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>
                  사진은 한 장만 저장할 수 있어요.
                </Text>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Entypo name="check" size={24} color="black" />
                </Pressable>
              </View>
            </View>
          </Modal>
          <TouchableOpacity onPress={beAlign}>
            {alignStatus === 0 ? (
              <Feather
                name="align-center"
                size={24}
                color="black"
                style={styles.button}
              />
            ) : alignStatus === 1 ? (
              <Feather
                name="align-left"
                size={24}
                color="black"
                style={styles.button}
              />
            ) : (
              <Feather
                name="align-right"
                size={24}
                color="black"
                style={styles.button}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setShowEmoji(!showEmoji)}>
            <Feather
              name="smile"
              size={24}
              color="black"
              style={styles.button}
            />
          </TouchableOpacity>
          
        </View>
        <View style={styles.rigthButton}>
          <TouchableOpacity onPress={showTime}>
            <Feather name="clock" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.emojiBox}>

      <EmojiBoard showBoard={showEmoji} onClick={onClickEmoji}  />
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
    marginLeft: 10,
  },
  dayText: {
    fontSize: 15,
    marginTop: 25,
    marginLeft: 10,
    fontFamily: "CookieRun",
  },
  textBox: {
    // flex: 1,
    alignItems: "center",
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
    textAlign: "center",
  },
  buttonBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  leftButtons: {
    flexDirection: "row",
  },
  button: {
    paddingRight: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 5,
    padding: 35,
    alignItems: "flex-end",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  emojiBox: {
    margin: 0,
    padding: 0
  }
});
