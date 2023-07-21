// import module package
import { TouchableOpacity, FlatList, Text, View } from "react-native";

// import file
import { SIZES } from "../../../constants";
import styles from "./tabs.style";

const TabButton = ({ name, activeTab, onHandleSearchType }) => {
  return (
    <TouchableOpacity
      style={styles.btn(name, activeTab)}
      onPress={onHandleSearchType}
    >
      <Text style={styles.btnText(name, activeTab)}>{name}</Text>
    </TouchableOpacity>
  );
};

const Tabs = ({
  tabs,
  activeTab,
  setActiveTab
}) => {
  return (
    <View>
      <FlatList 
        data={tabs}
        renderItem={({ item }) => (
          <TabButton 
            name={item}
            activeTab={activeTab}
            onHandleSearchType={() => setActiveTab(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item}
        contentContainerStyle={{ columnGap: SIZES.small / 2 }}
      />
    </View>
  );
};

export default Tabs;
