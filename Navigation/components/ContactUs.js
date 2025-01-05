import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, ScrollView } from 'react-native';
import { PaperProvider, Text, Divider, Button } from 'react-native-paper';
import { useState } from 'react';
import { Platform } from 'react-native';

export default function Home() {
    const [name, setName] = useState();
    const navigation = useNavigation();
    return(
        <PaperProvider>
            <ScrollView>
                <View>
                    <Text>Contact Us</Text>
                    <Button icon="camera" mode="outlined" onPress={()=>navigation.navigate('about')}>
                        About Us
                    </Button>
                </View>
            </ScrollView>
        </PaperProvider>
    )
}