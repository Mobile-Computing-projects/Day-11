import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, ScrollView } from "react-native";
import { PaperProvider, Text, Divider, Button,TextInput } from "react-native-paper";
import { useState } from "react";


export default function Home() {
  const [name, setName] = useState();
  const navigation = useNavigation();
  return (
    <PaperProvider>
      <ScrollView>
        <View>
          <View style={styles.header}>
            <Text>Contact Us</Text>
            <Divider />
          </View>
          <View style={styles.body}>
            <Text variant="bodyMedium">
              Video provides a powerful way to help you prove your point. When
              you click Online Video, you can paste in the embed code for the
              video you want to add. You can also type a keyword to search
              online for the video that best fits your document. To make your
              document look professionally produced, Word provides header,
              footer, cover page, and text box designs that complement each
              other. For example, you can add a matching cover page, header, and
              sidebar. Click Insert and then choose the elements you want from
              the different galleries. Themes and styles also help keep your
              document coordinated. When you click Design and choose a new
              Theme, the pictures, charts, and SmartArt graphics change to match
              your new theme. When you apply styles, your headings change to
              match the new theme. Save time in Word with new buttons that show
              up where you need them. To change the way a picture fits in your
              document, click it and a button for layout options appears next to
              it. When you work on a table, click where you want to add a row or
              a column, and then click the plus sign. Reading is easier, too, in
              the new Reading view. You can collapse parts of the document and
              focus on the text you want. If you need to stop reading before you
              reach the end, Word remembers where you left off - even on another
              device.
            </Text>
            <View style={styles.input}>
              <TextInput
                label="Name"
                mode="outlined"
                value={name}
                onChangeText={setName}
              />
            </View>
            <View style={styles.input}>
              <TextInput
                label="Email"
                mode="outlined"
                keyboardType="email-address"
              />
            </View>
            <View style={styles.input}>
              <TextInput
                label="Phone number"
                mode="outlined"
                keyboardType="phone-pad"
              />
            </View>
            <View style={styles.input}>
              <TextInput
                label="Message"
                mode="outlined"
                multiline
                numberOfLines={5}
              />
            </View>
            <Button
              style={styles.input}
              icon="account-group"
              mode="outlined"
              onPress={() => navigation.navigate("about")}
            >
              About Us
            </Button>
            <Text>{name}</Text>
          </View>
          <View style={styles.footer}>
            <Text>MyApp © 2024</Text>
          </View>
        </View>
      </ScrollView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        padding: 10
    },
    header: {
        flex: 3,
        width: "100%",
        alignItems: 'center',
        padding: 10,
        marginBottom: 10
    },
    body: {
        flex: 5,
        width: "100%"
    },
    footer: {
        flex: 2,
        width: "100%",
        alignItems: 'center'
    },
    input: {
        padding: 8,
        marginBottom: 7
    },
    scrollView: {
        flexGrow: 1, // Ensures the ScrollView behaves correctly
    },
    keyboardAvoidingView: {
        flex: 1, // Ensures proper layout with keyboard adjustments
      }
});