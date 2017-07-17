import React, {Component} from 'react'
import {ListView, View, AsyncStorage, ActivityIndicator, Text, StyleSheet} from 'react-native'
import Row from './Row'

class ItemsList extends Component {
	constructor(props) {
		super(props)

		this.state = {
			isLoading: true
		}
	}

	componentWillReceiveProps(nextProps) {
		let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
		this.setState({
			isLoading: false,
			dataSource: ds.cloneWithRows(nextProps.items)
		})
	}

	render() {
		if (this.state.isLoading) {
			return (
				<View style={styles.loading}>
					<ActivityIndicator />
				</View>
			)
		}

		return (
			<View style={styles.container}>
				<ListView
					dataSource={this.state.dataSource}
					renderRow={(rowData) => <Row hotel={rowData} onPress={this.props.onPress}/>}
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	loading: {
		flex: 1
	},
	container: {
		flex: 1,
		marginTop: 64
	}
})

export default ItemsList
