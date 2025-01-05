import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, ScrollView } from 'react-native';
import { PaperProvider, Text, Divider, Button } from 'react-native-paper';

export default function Home() {
    const navigation = useNavigation();
    return(
        <PaperProvider>
            <ScrollView>
                <View>
                    <Text>Home Alone</Text>
                </View>
            </ScrollView>
        </PaperProvider>
    )
}