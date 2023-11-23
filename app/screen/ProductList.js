import { Link } from "@react-navigation/native";
import { Text, View, SafeAreaView, VirtualizedList, StyleSheet, StatusBar } from "react-native";

// this is used for showing the recommended products as well as the search results
// it is going to recieve the llist of products in the props.
// + navigate to the detailed product page 
const getItemCount = (_data) => 50;

const getItem = (index) => ({
    id: Math.random().toString(12).substring(0),
    title: `Item ${index + 1}`,
  });

const ProductCard = ({title}) => {
    return (<View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        <Link to={'/Product'}>view more detail</Link>
      </View>);
}

const ProductList = ({navigation}) => {
    return (
      <View>
        <SafeAreaView >          
        <VirtualizedList
          initialNumToRender={4}
          renderItem={({item}) => <ProductCard title={"dummy product"} />}
          keyExtractor={item => item.id}
          getItemCount={getItemCount}
          getItem={getItem}
        />
      </SafeAreaView>
      </View>);
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight,
    },
    item: {
      backgroundColor: '#f9c2ff',
      height: 150,
      justifyContent: 'center',
      marginVertical: 8,
      marginHorizontal: 16,
      padding: 20,
    },
    title: {
      fontSize: 32,
    },
  });

export default ProductList;