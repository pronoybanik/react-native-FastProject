import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'

import styles from './welcome.style'
import { SIZES, icons } from '../../../constants'
import { useRouter } from 'expo-router';

const product = ["Rice", "Potato", "Mango"];

const Welcome = () => {
  const route = useRouter();
  const [activeJobType, setActiveJobType] = useState("Rice")
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello pronoy </Text>
        <Text style={styles.welcomeMessage}>Find your perfect Product </Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput style={styles.searchInput}
            value=''
            onChange={() => { }}
            placeholder='search your product'
          />
        </View>

        <TouchableOpacity style={styles.searchBtn}>
          <Image
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>


      <View>
        <FlatList
          data={product}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item)
                route.push(`/search/${item}`)
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>
                {item}</Text>

            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  )
}

export default Welcome