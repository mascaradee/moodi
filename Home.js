import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  LogBox,
  Image,
} from "react-native";
import { useFonts } from "expo-font";
import ActionButton from "react-native-circular-action-menu";

export default ({ navigation }) => {
  useEffect(() => {
    LogBox.ignoreLogs(["Animated: `useNativeDriver`"]);
  }, []);

  const [loaded] = useFonts({
    CookieRun: require("./assets/fonts/CookieRun-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView style={styles.scrollView}>
        <View style={styles.headerYear}>
          <Text style={styles.mYearText}>2022</Text>
        </View>
        <View style={styles.headerMonth}>
          <Text style={styles.mMonthText}>JANUARY</Text>
        </View>
        <View style={styles.dailyMoodi}>
          <Image
            style={styles.dailyMoodiImage}
            source={require("./assets/characters/flutter.png")}
          />
          <Image
            style={styles.dailyMoodiImage}
            source={require("./assets/characters/flutter.png")}
          />
          <Image
            style={styles.dailyMoodiImage}
            source={require("./assets/characters/flutter.png")}
          />
          <Image
            style={styles.dailyMoodiImage}
            source={require("./assets/characters/flutter.png")}
          />
          <Image
            style={styles.dailyMoodiImage}
            source={require("./assets/characters/flutter.png")}
          />
          <Image
            style={styles.dailyMoodiImage}
            source={require("./assets/characters/flutter.png")}
          />
        </View>
      </ScrollView>

      <ActionButton buttonColor="black">
        <ActionButton.Item
          title="New Task"
          onPress={() =>
            navigation.navigate("Edit", { mood: "annoying", mode: "add" })
          }
        >
          <Image
            style={styles.buttonImage}
            source={require("./assets/characters/annoying.png")}
          />
        </ActionButton.Item>
        <ActionButton.Item
          title="Notifications"
          onPress={() =>
            navigation.navigate("Edit", { mood: "flutter", mode: "add" })
          }
        >
          <Image
            style={styles.buttonImage}
            source={require("./assets/characters/flutter.png")}
          />
        </ActionButton.Item>
        <ActionButton.Item
          title="All Tasks"
          onPress={() =>
            navigation.navigate("Edit", { mood: "great", mode: "add" })
          }
        >
          <Image
            style={styles.buttonImage}
            source={require("./assets/characters/great.png")}
          />
        </ActionButton.Item>
        <ActionButton.Item
          title="New Task"
          onPress={() =>
            navigation.navigate("Edit", { mood: "peaceful", mode: "add" })
          }
        >
          <Image
            style={styles.buttonImage}
            source={require("./assets/characters/peaceful.png")}
          />
        </ActionButton.Item>
        <ActionButton.Item
          title="Notifications"
          onPress={() =>
            navigation.navigate("Edit", { mood: "sad", mode: "add" })
          }
        >
          <Image
            style={styles.buttonImage}
            source={require("./assets/characters/sad.png")}
          />
        </ActionButton.Item>
        <ActionButton.Item
          title="All Tasks"
          onPress={() =>
            navigation.navigate("Edit", { mood: "soso", mode: "add" })
          }
        >
          <Image
            style={styles.buttonImage}
            source={require("./assets/characters/soso.png")}
          />
        </ActionButton.Item>
        <ActionButton.Item
          title="New Task"
          onPress={() =>
            navigation.navigate("Edit", { mood: "tired", mode: "add" })
          }
        >
          <Image
            style={styles.buttonImage}
            source={require("./assets/characters/tired.png")}
          />
        </ActionButton.Item>
        <ActionButton.Item
          title="Notifications"
          onPress={() =>
            navigation.navigate("Edit", { mood: "wonderful", mode: "add" })
          }
        >
          <Image
            style={styles.buttonImage}
            source={require("./assets/characters/wonderful.png")}
          />
        </ActionButton.Item>
        <ActionButton.Item
          title="All Tasks"
          onPress={() =>
            navigation.navigate("Edit", { mood: "worry", mode: "add" })
          }
        >
          <Image
            style={styles.buttonImage}
            source={require("./assets/characters/worry.png")}
          />
        </ActionButton.Item>
      </ActionButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "red",
    // alignItems: "center",
    // borderColor: "red",
    // borderStyle: "solid",
    justifyContent: "center",
    // margin: 10,
    padding: 10,
  },
  scrollView: {
    // flex: 1,
  },
  headerYear: {
    alignItems: "center",
    paddingBottom: 0,
    padding: 20,
    margin: 0,
  },
  headerMonth: {
    alignItems: "center",
    paddingTop: 0,
    marginTop: 0,
  },
  mYearText: {
    // paddingTop: 30,
    fontSize: 15,
    fontFamily: "CookieRun",
  },
  mMonthText: {
    fontSize: 30,
    fontFamily: "CookieRun",
  },
  dailyMoodi: {
    flexDirection: "row",
    paddingTop: 20,
    flexWrap: "wrap",
    justifyContent: "space-between",
    // alignItems: "baseline",
  },
  dailyMoodiImage: {
    // flex: 1,
    // backgroundColor: "yellow",
    width: 70,
    height: 70,
  },
  buttonImage: {
    width: 35,
    height: 35,
  },
});
