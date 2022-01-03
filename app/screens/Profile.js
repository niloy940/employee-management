import { LinearGradient } from 'expo-linear-gradient'
import { MaterialIcons, Entypo } from '@expo/vector-icons';
import React from 'react'
import { Image, Linking, Platform, StyleSheet, Text, View } from 'react-native'
import { Button, Card, Title } from 'react-native-paper'

export default function Profile() {
	const openDial = () => {
		Platform.OS === 'android' ? Linking.openURL('tel:01676944727') : Linking.openURL('telprompt:01676944727')
	}


	return (
		<View style={styles.root}>
			<LinearGradient
				colors={['#0033ff', '#6bc1ff']}
				style={{ height: '20%' }}
			/>

			<View style={styles.imageWrapper}>
				<Image style={styles.image} source={{ uri: 'https://scontent.fdac96-1.fna.fbcdn.net/v/t39.30808-1/c57.17.196.197a/p320x320/239097942_4249362145139338_4463500570228030610_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeFl1C_1DNhgBZ7fcz3FIWwgB3wWn7KwJrkHfBafsrAmudSBbU3xTWnw7zU2iM38Mrw16lPfVnfCOeSABK6itn7N&_nc_ohc=NgmDCYPd7boAX_nlvw5&_nc_oc=AQnpFQyoFBUVvYK4C8qurFEt3uSu6rncnv3lj58a90n9SwMK_VdeafI2zQeJU2gBPOg&_nc_ht=scontent.fdac96-1.fna&oh=00_AT_nrlw9agvqyKkXewp4fzEYbPe_2ig5nBeJWA-G2ThZpA&oe=61D713B3' }} />
			</View>

			<View style={{ alignItems: 'center', margin: 15 }}>
				<Title>Niloy</Title>
				<Text style={{ fontSize: 18 }}>Software Developer</Text>
			</View>

			<Card style={styles.mycard} onPress={() => {
				Linking.openURL('mailto:niloy940@gmail.com')
			}}>
				<View style={styles.cardContent}>
					<MaterialIcons name="email" size={32} color="#006aff" />
					<Text style={styles.text}>niloy940@gmail.com</Text>
				</View>
			</Card>

			<Card style={styles.mycard} onPress={() => openDial()}>
				<View style={styles.cardContent}>
					<Entypo name="phone" size={32} color="#006aff" />
					<Text style={styles.text}>01676944727</Text>
				</View>
			</Card>

			<Card style={styles.mycard}>
				<View style={styles.cardContent}>
					<MaterialIcons name="attach-money" size={32} color="#006aff" />
					<Text style={styles.text}>$50000</Text>
				</View>
			</Card>

			<View style={styles.buttonWrapper}>
				<Button theme={theme} icon="account-edit" mode="contained" onPress={() => console.log('edit')}>
					Edit
				</Button>

				<Button theme={theme} icon="delete" mode="contained" onPress={() => console.log('delete')}>
					Fire Employee
				</Button>
			</View>
		</View>
	)
}

const theme = {
	colors: {
		primary: '#006aff'
	}
}

const styles = StyleSheet.create({
	root: {
		flex: 1
	},

	text: {
		fontSize: 18,
		marginTop: 3,
		marginLeft: 5
	},

	imageWrapper: {
		alignItems: 'center'
	},

	image: {
		width: 140,
		height: 140,
		borderRadius: 140 / 2,
		marginTop: -50
	},

	mycard: {
		margin: 3
	},

	cardContent: {
		flexDirection: 'row',
		padding: 8
	},

	buttonWrapper: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		padding: 10
	}
})
