import react from "react";
import { View, Text,StyleSheet } from "react-native";

const DonorForms = () => {
    return(
        <View  style={styles.container}>
            <Text>Donor Form</Text>
        </View>
    )
}
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#fff',
      },
    })

export default DonorForms;