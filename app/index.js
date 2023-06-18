import { useState } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { useRouter, Stack } from 'expo-router';

import { COLORS, icons, images, SIZES } from '../constants';
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components';

const Home = () => {
    const router = useRouter();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen options={{
                headerStyle: { backgroundColor: COLORS.lightWhite },
                headerShadowVisible: false,
                headerLeft: () => (
                    <ScreenHeaderBtn iconUrl={icons.menu} dimension='50%'></ScreenHeaderBtn>
                ),
                headerRight: () => (
                    <ScreenHeaderBtn iconUrl={images.profile} dimension='100%'></ScreenHeaderBtn>
                ),
                headerTitle: ""
            }} />

            <ScrollView>
                <View style={{ flex: 1, padding: SIZES.medium }}>
                    <Welcome />
                    <Popularjobs />
                    <Nearbyjobs />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;