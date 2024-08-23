import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'
const profile = () => {
  return (
    <View style={styles.container}>
      <Text>profile</Text>
      <Link href="/" style={{color:'blue'}} >Back to Home</Link>
    </View>
  )
}

export default profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})