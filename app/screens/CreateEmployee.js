import React, { useState } from 'react'
import { Modal, StyleSheet, Text, View } from 'react-native'
import { Button, TextInput } from 'react-native-paper';

export default function CreateEmployee() {
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');
	const [salary, setSalary] = useState('');
	const [picture, setPicture] = useState('');
	const [modal, setModal] = useState(false);

	return (
		<View style={styles.root}>
			<TextInput
				style={styles.input}
				theme={theme}
				mode='outlined'
				label="Name"
				value={name}
				onChangeText={text => setName(text)}
			/>

			<TextInput
				style={styles.input}
				theme={theme}
				mode='outlined'
				keyboardType='email-address'
				label="Email"
				value={email}
				onChangeText={text => setEmail(text)}
			/>

			<TextInput
				style={styles.input}
				theme={theme}
				mode='outlined'
				keyboardType='number-pad'
				label="Phone"
				value={phone}
				onChangeText={text => setPhone(text)}
			/>

			<TextInput
				style={styles.input}
				theme={theme}
				mode='outlined'
				label="Salary"
				value={salary}
				onChangeText={text => setSalary(text)}
			/>

			<Button style={{ marginBottom: 10 }} theme={theme} icon="upload" mode="contained" onPress={() => setModal(true)}>
				Upload Image
			</Button>

			<Button theme={theme} icon="content-save" mode="contained" onPress={() => console.log('saved')}>
				Save
			</Button>

			<Modal
				animationType='slide'
				transparent={true}
				visible={modal}
				onRequestClose={() => {
					setModal(false)
				}}
			>
				<View style={styles.modalWrapper}>
					<View style={styles.modalButtonWrapper}>
						<Button theme={theme} icon="camera" mode="contained" onPress={() => console.log('camera')}>
							Camere
						</Button>
						<Button theme={theme} icon="image-area" mode="contained" onPress={() => console.log('gallery')}>
							Gallery
						</Button>
					</View>

					<Button theme={theme} icon="close" onPress={() => setModal(false)}>
						Close
					</Button>
				</View>

			</Modal>
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
		flex: 1,
		margin: 5
	},

	input: {
		marginBottom: 10
	},

	modalWrapper: {
		position: 'absolute',
		bottom: 2,
		width: '100%',
		backgroundColor: '#fff'
	},

	modalButtonWrapper: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		padding: 10
	}
})
