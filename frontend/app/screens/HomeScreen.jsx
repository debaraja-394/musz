import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const playlists = [
    { id: '1', title: 'Top Hits' },
    { id: '2', title: 'New Releases' },
    { id: '3', title: 'Classics' },
    { id: '4', title: 'Pop' },
    { id: '5', title: 'Rock' },
];

export default function HomeScreen({ navigation }) {
    const renderPlaylist = ({ item }) => (
        <TouchableOpacity style={styles.playlistItem} onPress={() => navigation.navigate('Playlist', { playlistId: item.id })}>
            <Text style={styles.playlistTitle}>{item.title}</Text>
        </TouchableOpacity>
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