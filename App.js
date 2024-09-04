import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Image
            source={{
              uri: "https://www.themarysue.com/wp-content/uploads/2022/07/LOONA-K-Pop-Girl-Group-Chuu-Flip-That-MV-LOONATHEWORLD-Tour-scaled.jpg?w=1200",
            }}
            style={styles.image}
          />

          <Text style={styles.header}>My Portfolio</Text>
          <View style={styles.profileSection}>
            <Text style={styles.italicText}>
              Passionate DevOps Engineer with a knack for solving unique
              challenges. Integrating paperless-ngx with Docker for SOIS.
            </Text>
            <Text style={styles.contactText}>Iloilo, PH</Text>
            <Text style={styles.contactText}>+639757170951</Text>
            <Text style={styles.contactText}>f04c.dev</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Experience</Text>
            <View style={styles.job}>
              <Text style={styles.jobTitle}>COMPUTER ENGINEERING INTERN</Text>
              <Text style={styles.companyName}>DepEd - Regional Office 6</Text>
              <Text style={styles.jobDescription}>
                • Developed a hidden file viewer/scraper for the Department of
                Education's RSPC (Regional Schools Press Conference).
              </Text>
              <Text style={styles.jobDescription}>
                • Implemented user-centered desktop applications for educational
                purposes.
              </Text>
            </View>

            <View style={styles.job}>
              <Text style={styles.jobTitle}>COMPUTER ENGINEERING INTERN</Text>
              <Text style={styles.companyName}>
                Western Institute of Technology
              </Text>
              <Text style={styles.jobDescription}>
                • Assembled and disassembled PCs, honing technical skills.
              </Text>
              <Text style={styles.jobDescription}>
                • Assisted in the installation of internet connections and
                applied troubleshooting skills.
              </Text>
            </View>
          </View>

          <View style={styles.imageSection}>
            <Image
              source={{
                uri: "https://reallygooddesigns.com/wp-content/uploads/2021/07/Animated-Shopping-Banners-by-Design-Studio.gif",
              }}
              style={styles.image}
            />
            <Image
              source={{
                uri: "https://reallygooddesigns.com/wp-content/uploads/2021/07/Rusbase-Young-Awards-by-Kalugina-Natalia.gif",
              }}
              style={styles.image}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f0f4f8",
  },
  scrollView: {
    paddingHorizontal: 15,
  },
  container: {
    alignItems: "center",
    paddingVertical: 20,
  },
  header: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 20,
    textAlign: "center",
  },
  profileSection: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
    width: "100%",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  italicText: {
    fontStyle: "italic",
    fontSize: 16,
    marginBottom: 10,
    color: "#555",
  },
  contactText: {
    fontSize: 16,
    marginBottom: 5,
    color: "#777",
  },
  section: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
    width: "100%",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
  },
  job: {
    marginBottom: 20,
  },
  jobTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#444",
  },
  companyName: {
    fontSize: 18,
    fontStyle: "italic",
    marginBottom: 8,
    color: "#888",
  },
  jobDescription: {
    fontSize: 16,
    color: "#666",
    lineHeight: 22,
    marginBottom: 5,
  },
  imageSection: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
    width: "100%",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
});
