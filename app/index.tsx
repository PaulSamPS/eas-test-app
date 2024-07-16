import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';

export default function HomeScreen() {
  return (
    <ThemedText type="title">This is not Update!</ThemedText>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
