import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">About and Usuage</ThemedText>
      </ThemedView>
      <ThemedText>
        Genuine Reviews is a relatively easy app to use. All you need do is either
        use the url bar to paste in the product url or directly share it using the product listing's
        share button.
      </ThemedText>
      <Collapsible title="Amnesic Servers">
        <ThemedText>
          The app uses amnesic servers to store the product data. This means that the data is
          automatically deleted after a set period of time.
        </ThemedText>
        <ExternalLink href="https://docs.expo.dev/router/introduction">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Android, iOS, and web support">
        <ThemedText>
          You can use Genuine reviews on Android, iOS, and the web. The app is built using React
          Native which allows for cross-platform support.
        </ThemedText>
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
