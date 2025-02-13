import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function SuperPromo() {
  const product = {
    title: 'Nike Air Force 1',
    image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/97bda33a-b474-408d-bd48-28c220462cab/AIR+FORCE+1+LE+%28GS%29.png',
    originalPrice: '149,99 €',
    discountedPrice: '99,99 €',
  };

  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>Super promo du moment</Text>
      <View style={styles.promoCard}>
        <Text style={styles.title}>{product.title}</Text>
        <Image source={{ uri: product.image }} style={styles.image} />
        <View style={styles.priceContainer}>
          <Text style={styles.priceLabel}>Prix :</Text>
          <Text style={styles.originalPrice}>{product.originalPrice}</Text>
          <Text style={styles.discountedPrice}>{product.discountedPrice}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(177, 115, 8, 0.27)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  promoCard: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceLabel: {
    fontSize: 20,
    color: '#333',
    marginRight: 5,
  },
  originalPrice: {
    fontSize: 20,
    color: '#a9a9a9',
    textDecorationLine: 'line-through',
    marginRight: 10,
  },
  discountedPrice: {
    fontSize: 20,
    color: '#ff4500',
    fontWeight: 'bold',
  },
});
