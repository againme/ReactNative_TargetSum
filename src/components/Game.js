import React from 'react';
// import PropType from 'prop-types';

import { StyleSheet, Text, View } from 'react-native';

export default class Game extends React.Component {

    // static propType = {
    //     randomNumberCount: PropTypes.string.isRequired
    // };
    
    target = 10 + Math.floor(40 * Math.random());
    randomNumbers = Array.from({ length: this.props.randomNumberCount })
                    .map( () => {
                        10 + Math.floor(10 * Math.random());
                    } );

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.target}>{this.target}</Text>
                <Text>{this.props.randomNumberCount}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ddd',
        paddingTop: 50
    },
    target: {
        fontSize: 40,
        backgroundColor: '#aaa',
        marginHorizontal: 50,
        textAlign: 'center'
    },
});
