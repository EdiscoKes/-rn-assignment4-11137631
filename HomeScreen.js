



// screens/HomeScreen.js
import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, FlatList, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import FeaturedJobCard from './FeaturedJobCard';
import PopularJobCard from './PopularJobCard';

const HomeScreen = ({ route }) => {
  const { name, email } = route.params;

  const featuredJobs = [
    { id: 1, icon: require('./assets/fb.png'), title: 'Software Engineer', sub: "Facebook", salary: '$120,000', location: 'San Francisco, CA', backgroundColor: 'royalblue' },
    { id: 2, icon: require('./assets/google.png'), title: 'Product Manager', salary: '$110,000', location: 'New York, NY', backgroundColor: 'navy' },
    { id: 3, icon: require('./assets/amazon.png'), title: 'UX Designer', salary: '$90,000', location: 'Austin, TX', backgroundColor: 'indigo' },
    { id: 4, icon: require('./assets/com.jpeg'), title: 'Data Scientist', salary: '$130,000', location: 'Boston, MA', backgroundColor: '#9C27B0' },
    { id: 5, icon: require('./assets/com.jpeg'), title: 'DevOps Engineer', salary: '$115,000', location: 'Seattle, WA', backgroundColor: '#00BCD4' },
    { id: 6, icon: require('./assets/com.jpeg'), title: 'Backend Developer', salary: '$105,000', location: 'Chicago, IL', backgroundColor: '#8BC34A' },
    { id: 7, icon: require('./assets/com.jpeg'), title: 'Frontend Developer', salary: '$100,000', location: 'Los Angeles, CA', backgroundColor: '#FFC107' },
    { id: 8, icon: require('./assets/com.jpeg'), title: 'Mobile Developer', salary: '$95,000', location: 'Denver, CO', backgroundColor: '#FF9800' },
  ];

  const popularJobs = [
    { id: 9,icon: require('./assets/burger.jpg'),  title: 'Marketing Specialist', salary: '$85,000', location: 'Miami, FL' },
    { id: 10,icon: require('./assets/blogo.png'), title: 'Sales Manager', salary: '$95,000', location: 'Dallas, TX' },
    { id: 11,icon: require('./assets/fb.png'), title: 'HR Coordinator', salary: '$70,000', location: 'Atlanta, GA' },
    { id: 12,icon: require('./assets/com.jpeg'), title: 'Business Analyst', salary: '$90,000', location: 'San Diego, CA' },
    { id: 13, title: 'Graphic Designer', salary: '$80,000', location: 'Portland, OR' },
    { id: 14, title: 'IT Support Specialist', salary: '$75,000', location: 'Las Vegas, NV' },
    { id: 15, title: 'Recruiter', salary: '$65,000', location: 'Phoenix, AZ' },
    { id: 16, title: 'Office Manager', salary: '$60,000', location: 'Philadelphia, PA' },
  ];

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <View>
            <Text style={styles.userName}>{name}</Text>
            <Text style={styles.userEmail}>{email}</Text>
          </View>
          <Image source={require('./assets/Ediprofile.png')} style={styles.profilePicture} />
        </View>
        <View style={styles.searchContainer}>
          <TextInput style={styles.searchInput} placeholder="Search" />
            <Image source={require('./assets/search.png')} style={styles.searchIcon} />
          <TouchableOpacity>
            <Image source={require('./assets/but.PNG')} style={styles.listIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Featured Jobs</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          horizontal
          data={featuredJobs}
          renderItem={({ item }) => <FeaturedJobCard job={item} backgroundColor={item.backgroundColor} />}
          keyExtractor={(item) => item.id.toString()}
          style={styles.horizontalList}
          showsHorizontalScrollIndicator={false}
        />
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Popular Jobs</Text>
        </View>
        <FlatList
          data={popularJobs}
          renderItem={({ item }) => <PopularJobCard job={item} />}
          keyExtractor={(item) => item.id.toString()}
          style={styles.verticalList}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
    marginTop: 50,
  },
  searchIcon: {
   position: 'absolute',
    left: 20,
    marginRight:"",
    width: 20,
    height: 20,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  userEmail: {
    fontSize: 16,
    color: 'gray',
  },
  profilePicture: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    
  },
  searchInput: {
    flex: 1,
    height: 50,
    borderColor: 'gray',
    borderWidth: 0,
    paddingHorizontal: 10,
    borderRadius:10,
    backgroundColor:"#F2F2F3",
    marginLeft:0,
    width:90,
    paddingLeft:50,

  },
  listIcon: {
    width: 60,
    height: 60,
    marginLeft: 10,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  seeAll: {
    color: 'gray',
  },
  horizontalList: {
    marginBottom: 20,
  },
  verticalList: {
    flex: 1,
  },
});

export default HomeScreen;

