


// components/FeaturedJobCard.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const FeaturedJobCard = ({ job, backgroundColor }) => (
  <View style={[styles.card, { backgroundColor }]}>
    <View style={styles.cardHeader}>
      <View style={styles.titleContainer}>
        <Image source={job.icon} style={styles.categoryIcon} />
        <Text style={styles.jobTitle}>{job.title}</Text>
      </View>
      <Text style={styles.sub}>{job.sub}</Text>
    </View>
    <View style={styles.cardFooter}>
      <Text style={styles.jobSalary}>{job.salary}</Text>
      <Text style={styles.jobLocation}>{job.location}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    padding: 20,
    marginVertical: 10,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    height: 200,
    margin: 10,
    width: 300,
    justifyContent: 'space-between',
  },
  sub: {
    marginTop: 40,
    marginLeft: -150,
    color: '#fff',
  },
  categoryIcon: {
    width: 50,
    height: 50,
    marginRight: 10,
    marginTop: 25,
    marginLeft: 10,
    borderRadius: 10,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    color: '#356899',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  jobSalary: {
    fontSize: 16,
    color: '#fff',
  },
  jobLocation: {
    fontSize: 14,
    color: '#fff',
  },
});

export default FeaturedJobCard;
