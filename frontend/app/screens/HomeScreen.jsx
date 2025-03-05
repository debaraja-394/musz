import React, { useRef } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Animated } from 'react-native';

const playlists = [
    { id: '1', title: 'Top Hits' },
    { id: '2', title: 'New Releases' },
    { id: '3', title: 'Classics' },
    { id: '4', title: 'Pop' },
    { id: '5', title: 'Rock' },
];

export default function HomeScreen({ navigation }) {
    const animation = useRef(new Animated.Value(1)).current;

    const handlePressIn = () => {
        Animated.spring(animation, {
            toValue: 0.95,
            useNativeDriver: true,
        }).start();
    };

    const handlePressOut = () => {
        Animated.spring(animation, {
            toValue: 1,
            useNativeDriver: true,
        }).start();
    };

    const renderPlaylist = ({ item }) => (
        <Animated.View style={{ transform: [{ scale: animation }] }}>
            <TouchableOpacity
                style={styles.playlistItem}
                onPressIn={handlePressIn}
                onPressOut={handlePressOut}
                onPress={() => navigation.navigate('Playlist', { playlistId: item.id })}
            >
                <Text style={styles.playlistTitle}>{item.title}</Text>
            </TouchableOpacity>
        </Animated.View>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>Welcome to Musz!</Text>
            <FlatList
                data={playlists}
                renderItem={renderPlaylist}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.playlistContainer}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    welcome: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    playlistContainer: {
        width: '100%',
        paddingHorizontal: 20,
    },
    playlistItem: {
        padding: 20,
        marginVertical: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    playlistTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
    },
});