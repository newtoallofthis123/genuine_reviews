import {Image, StyleSheet, Platform, TextInput} from 'react-native';

import {HelloWave} from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import {ThemedText} from '@/components/ThemedText';
import {ThemedView} from '@/components/ThemedView';
import {useColorScheme} from "@/hooks/useColorScheme";
import Clipboard from '@react-native-clipboard/clipboard';
import React, {useState} from "react";

export default function HomeScreen() {
    const colorScheme = useColorScheme();
    const [clipboardContent, setClipboardContent] = useState('');

    const readClipboard = async () => {
        const content = await Clipboard.getString();
        setClipboardContent(content);
    };

    return (
        <ParallaxScrollView
            headerBackgroundColor={{light: '#f8d021', dark: '#2e3137'}}
        >
            <ThemedView style={colorScheme === 'light' ? styles.container : styles.container_dark}>
                <ThemedText type="title" style={styles.title}>
                    Genuine Reviews
                </ThemedText>
                <ThemedText type="default" style={styles.subt}>
                    Filter out the noise and get the best reviews for products
                </ThemedText>
            </ThemedView>
            <ThemedView>
                <TextInput textContentType="URL" keyboardType='url' autoCapitalize='none' autoFocus={true}
                           value={clipboardContent}
                           onFocus={readClipboard}
                           onChangeText={setClipboardContent}
                           placeholder={'Paste URL here'}
                           placeholderTextColor={colorScheme === 'light' ? '#000' : '#fff'}
                           style={colorScheme === 'light' ? styles.input : styles.input_dark}/>
            </ThemedView>
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 38,
        fontWeight: 'bold',
        paddingTop: 20,
    },
    subt: {
        textAlign: 'center',
        fontSize: 14,
        marginTop: 10
    },
    container: {
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: '#000',
        paddingBottom: 10,
    },
    container_dark: {
        paddingBottom: 10,
    },
    input: {
        padding: 10,
        margin: 10,
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#000',
    },
    input_dark: {
        backgroundColor: '#2e3137',
        color: '#fff',
        padding: 10,
        margin: 10,
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#fff'
    }
});
