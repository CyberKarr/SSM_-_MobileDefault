import * as Font from "expo-font";

export const useFonts = async () =>
    await Font.loadAsync({
        'LeagueSpartan': require('../assets/fonts/LeagueSpartan.ttf'),
    });

