import {View, Text, Button, Alert, StyleSheet, StatusBar} from 'react-native';

//user can add to cart here
const Product = ({navigation}) => {
  return (
    <View style={styles.item}>
      <View>
        <Text style={styles.title}>This is products detail page</Text>
      </View>
      <Button
        style={styles.cartButton}
        title="Add to Cart"
        onPress={() => {
          Alert.alert('Item added to cart successfully');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  item: {
    backgroundColor: 'green',
    height: 900,
    justifyContent: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 20,
  },
  title: {
    fontSize: 32,
  },
  cartButton: {
    position: 'relative',
    alignItems: 'flex-end',
  },
});

export default Product;
