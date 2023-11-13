import React from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  ScrollView,
  TextInput, 
  StyleSheet,
} from 'react-native';
import { ImageBackground } from 'react-native';
import { ImageHeader } from '../../assets';
import { GetStarted } from '../../components';
import { SearchNormal1 } from 'iconsax-react-native';

const Home = () => {
  return (
    <ScrollView style={styles.page}>
      <View>
        <ImageBackground source={ImageHeader} style={styles.header}></ImageBackground>
      </View>
      <GetStarted />
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.slider}>
        <Image
          style={slider.image}
          source={{
            uri:
              'https://assets.vogue.in/photos/5f5f0cf1c2bf5bc3a185c294/2:3/w_1920,c_limit/how-to-start-a-fitness-routine.jpg',
          }}
        ></Image>
        <Image
          style={slider.image}
          source={{
            uri:
              'https://fitnessvolt.com/wp-content/uploads/2023/05/Fat-Loss-Workout-Plan-750x468.jpg',
          }}
        ></Image>
        <Image
          style={slider.image}
          source={{
            uri:
              'https://fitnessvolt.com/wp-content/uploads/2023/05/Weight-Loss-concept-1024x710.jpg',
          }}
        ></Image>
        <Image
          style={slider.image}
          source={{
            uri:
              'https://fitnessvolt.com/wp-content/uploads/2023/05/woman-posing-1024x710.jpg',
          }}
        ></Image>
      </ScrollView>
      <View style={styles.text}>
        <Text style={styles.welcome}>Explore</Text>
      </View>

      <View style={styles.infoRow}>
        <Image
          style={styles.infoImage}
          source={{
            uri:
              'https://fitnessvolt.com/wp-content/uploads/2023/05/yoga-stretching-1024x710.jpg',
          }}
        ></Image>
        <View style={styles.infoText}>
          <Text style={styles.infoTitle}>Too Many Myths</Text>
          <Text>
            “Don’t lift,” “Don’t eat too much protein,” and “Avoid supplements”
            are a few of the bad advice that is consistently thrown at women.
          </Text>
        </View>
      </View>
      <View style={styles.infoRow}>
        <Image
          style={styles.infoImage}
          source={{
            uri:
              'https://fitnessvolt.com/wp-content/uploads/2023/05/woman-recovering-in-gym-1024x710.jpg',
          }}
        ></Image>
        <View style={styles.infoText}>
          <Text style={styles.infoTitle}>Higher Body Fat Percentage</Text>
          <Text>
            Women usually have a higher body fat percentage than men. It is
            primarily because of the differences in the hormonal structure. The
            ladies store more fat in their hips, thighs, and breasts, which can
            be more resistant to fat loss.
          </Text>
        </View>
      </View>
      <View style={styles.infoRow}>
        <Image
          style={styles.infoImage}
          source={{
            uri:
              'https://fitnessvolt.com/wp-content/uploads/2023/05/woman-at-gym-for-cardio-training-1024x710.jpg',
          }}
        ></Image>
        <View style={styles.infoText}>
          <Text style={styles.infoTitle}>
            Too Much Cardio and Avoiding Weight Training
          </Text>
          <Text>
            It is not a coincidence that the cardio section in gyms around the
            world is flooded by women.
          </Text>
        </View>
      </View>

      <View style={styles.infoRow}>
        <Image
          style={styles.infoImage}
          source={{
            uri:
              'https://fitnessvolt.com/wp-content/uploads/2023/05/Woman-resting-in-gym-1024x710.jpg',
          }}
        ></Image>
        <View style={styles.infoText}>
          <Text style={styles.infoTitle}>You Must Rest</Text>
          <Text>
            In contrast to what pop culture has been feeding us, rest is not for
            the weak. Even the strongest of the strong ensure they get a good
            night’s sleep each day.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFFFFF', 
  },
  header: {
    width: windowWidth * 1,
    height: windowHeight * 0.30,
    paddingHorizontal: 2,
    paddingTop: 18,
  },
  welcome: {
    fontFamily: 'SquadaOne-Regular',
    fontSize: 24,
  },
  text: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginLeft: 32,
    marginBottom: 4,
  },
  slider: {
    marginTop: 24,
    marginBottom: 24,
  },
  infoRow: {
    flexDirection: 'row',
    marginHorizontal: 30,
    paddingRight: 100,
    marginTop: 10,
  },
  infoImage: {
    width: 100,
    height: 100,
  },
  infoText: {
    marginLeft: 10,
  },
  infoTitle: {
    fontWeight: 'bold',
    color: 'black',
  },
});

const slider = StyleSheet.create({
  image: {
    width: 280,
    height: 170,
    marginHorizontal: 8,
    borderRadius: 20,
    resizeMode: 'contain',
  },
});

const searchbar = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    flexDirection: 'row', // Untuk menata ikon dan input secara horizontal
    alignItems: 'center', // Untuk menengahkan ikon dan input secara vertikal
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  input: {
    flex: 1, // Mengisi sisa ruang yang tersedia
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 30,
    padding: 10,
    backgroundColor: '#efefef',
  },
  iconContainer: {
    padding: 2,
    backgroundColor: 'white',
    borderRadius: 50,
    marginLeft: 10,
  },
});

export default Home;
