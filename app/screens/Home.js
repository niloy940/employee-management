import React from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import { Card, FAB } from 'react-native-paper'

export default function Home() {
	const data = [
		{ id: 1, name: 'Niloy', position: 'Software Developer' },
		{ id: 2, name: 'John', position: 'Web Developer' },
		{ id: 3, name: 'Smith', position: 'Android Developer' },
		{ id: 4, name: 'Jack', position: 'IOS Developer' },
		{ id: 5, name: 'Aron', position: 'IOS Developer' },
		{ id: 6, name: 'David', position: 'IOS Developer' },
		{ id: 7, name: 'Jack', position: 'IOS Developer' },
		{ id: 8, name: 'Smith', position: 'IOS Developer' },
		{ id: 9, name: 'John', position: 'IOS Developer' },
		{ id: 10, name: 'Quazi', position: 'IOS Developer' },
	];

	const renderList = (item) => {
		return (
			<Card style={styles.myCard} key={item.id}>
				<View style={styles.cardView}>
					<Image style={styles.image} source={{ uri: 'https://scontent.fdac96-1.fna.fbcdn.net/v/t39.30808-1/c57.17.196.197a/p320x320/239097942_4249362145139338_4463500570228030610_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeFl1C_1DNhgBZ7fcz3FIWwgB3wWn7KwJrkHfBafsrAmudSBbU3xTWnw7zU2iM38Mrw16lPfVnfCOeSABK6itn7N&_nc_ohc=NgmDCYPd7boAX_nlvw5&_nc_oc=AQnpFQyoFBUVvYK4C8qurFEt3uSu6rncnv3lj58a90n9SwMK_VdeafI2zQeJU2gBPOg&_nc_ht=scontent.fdac96-1.fna&oh=00_AT_nrlw9agvqyKkXewp4fzEYbPe_2ig5nBeJWA-G2ThZpA&oe=61D713B3' }} />

					<View style={styles.textWrapper}>
						<Text style={styles.text}>{item.name}</Text>
						<Text>{item.position}</Text>
					</View>
				</View>
			</Card>
		);
	};

	return (
		<View>
			<FlatList
				data={data}
				renderItem={({ item }) => {
					return renderList(item);
				}}
			/>

			<FAB
				style={styles.fab}
				theme={{ colors: { accent: '#006aff' } }}
				icon="plus"
				onPress={() => console.log('Pressed')}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	myCard: {
		margin: 5,
	},

	cardView: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 6
	},

	textWrapper: {
		marginLeft: 10
	},

	text: {
		fontSize: 20
	},

	image: {
		width: 60,
		height: 60,
		borderRadius: 60 / 2
	},

	fab: {
		position: 'absolute',
		margin: 16,
		right: 0,
		bottom: 0,
	},
})

