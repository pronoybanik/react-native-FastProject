import React from 'react'
import { View, Text } from 'react-native'

import styles from './popularjobs.style'
import {COLORS, SIZES} from '../../../constants';
import PopularJobCard from '../../common/cards/popular/PopularJobCard';
import { useRouter } from 'expo-router';

const Popularjobs = () => {
  const router = useRouter();
  return (
    <View>
      <Text>Popularjobs</Text>
    </View>
  )
}

export default Popularjobs