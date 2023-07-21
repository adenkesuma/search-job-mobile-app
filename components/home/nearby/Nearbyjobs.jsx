// import module package
import { useRouter } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";

// import file
import NearbyJobCard from "../../common/cards/nearby/NearbyJobCard";
import { COLORS } from "../../../constants";
import styles from "./nearbyjobs.style";
import useFetch from "../../../hook/useFetch";

const Nearbyjobs = () => {
  const router = useRouter();

  const { data, isLoading, error } = useFetch(
    'search',
    {
      query: 'React Developer',
      num_pages: 1
    }
  );

  return (
    <View style={styles.container}>
      {/* text and navigate */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color={COLORS.primary} />
        ) : error ? (
          <Text style={styles.error}>Something went wrong</Text>
        ) : (
          data.map((job) => (
            <NearbyJobCard 
              job={job}
              key={`nearby-job-${job?.job_id}`}
              handleNavigate={() => router.push(`/job-details/${job?.job_id}`)}
            />
          )) 
        )}
      </View>
    </View>
  );
};

export default Nearbyjobs;
