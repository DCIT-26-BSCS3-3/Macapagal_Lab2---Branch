import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';

import sanmin from './sanmin.jpg';

export default function App() {
  return (
    <ScrollView style={styles.container}>
    <Text style={styles.header}>STUDENT PROFILE</Text>

      {/* Profile Section */}
      <View style={styles.profileContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.name}>Erving Macapagal</Text>
        <Text style={styles.infoText}>Age: 20</Text>
        <Text style={styles.infoText}>Course and Section: BSCS 3-3</Text>
      </View>

        <Image source={sanmin} style={styles.profileImage} />
      </View>
      <View style={styles.separator} />

      {/* About Me */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>ABOUT ME:</Text>
        <Text style={styles.sectionContent}>
          I’m a tall, dark, and handsome 3rd year Computer Science student with a laid-back, nonchalant vibe. I enjoy solving problems, building cool tech, and keeping things smooth and effortless both in code and in life. Whether it’s debugging a complex project or chilling with friends, I bring calm energy and quiet confidence to everything I do.
        </Text>
      </View>

      {/* Achievements */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>ACHIEVEMENTS:</Text>
        <Text style={styles.sectionContent}>Dean's Lister (2023-2024) </Text>
        <Text style={styles.sectionContent}>Dean's Lister (2024-2025)</Text>
        <Text style={styles.sectionContent}>CEIT TAGISAN BASKETBALL 1st Runner Up</Text>
        <Text style={styles.sectionContent}>CEIT TAGISAN CODM 2nd Runner Up</Text>
      </View>

      {/* Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>SKILLS:</Text>
        <View style={styles.skillsContainer}>
          {['ANYTHING'].map((skill, index) => (
            <View key={index} style={styles.skillBadge}>
              <Text style={styles.skillText}>{skill}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#697773',
  },

  header: {
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 80,
    marginBottom: 10,
    color: '#ffffff', // deep olive brown for contrast
  },

  /* ✅ Profile Section Layout */
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  textContainer: {
    flex: 1,
  },

  name: {
    marginLeft: 15,
    marginBottom: 10,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ffffff', // dark olive green
  },

  infoText: {
    marginLeft: 15,
    fontSize: 16,
    color: '#ffffff', // neutral earthy gray
    marginTop: 5,
  },

  profileImage: {
    width: 120,
    height: 150,
    borderRadius: 10,
    borderWidth: 2,
    marginLeft: 30,
  },

  separator: {
    borderBottomColor: '#ffffff', 
    borderBottomWidth: 5,
    marginVertical: 15,
  },

  section: {
    marginTop: 15,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff',
    marginBottom: 5,
  },

  sectionContent: {
    fontSize: 15,
    textAlign: 'center',
    color: '#ffffff',
    lineHeight: 22,
  },

  skillBadge: {
    backgroundColor: '#adbab1', // muted olive green
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    margin: 5,
  },

  skillText: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 14,
  },
});
