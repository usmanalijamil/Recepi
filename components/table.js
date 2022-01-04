import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";

const Table = ({ field }) => {
  return (
    <View style={styles.body}>
      <View style={styles.listWrapper}>
        <Text style={styles.row}>Id</Text>
        <Text style={styles.row}>Ingredients Details</Text>
      </View>
      {field.map((item, index) => (
        <View style={styles.listWrapper} key={`${item}-${index}`}>
          <Text style={styles.row}>{index + 1}</Text>
          <Text style={styles.row}>{item.value}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    marginTop: 100,
  },
  listWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    borderBottomWidth: 0.5,
  },
  row: {
    fontSize: 16,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default Table;

// import React from "react";
// import {Text, View, StyleSheet} from "react-native";

// export function Row({column}) {
// 	return (
// 		<View style={styles.rowStyle}>
// 			{column.map((data) => (
// 				<Cell data={data} />
// 			))}
// 		</View>
// 	);
// }

// export function Cell({data}) {
// 	return (
// 		<View style={styles.cellStyle}>
// 			<Text>{data}</Text>
// 		</View>
// 	);
// }
// const Table = () => {
// 	const data = [
// 		[15, 14, 13, 12],
// 		[11, 10, 9, 8],
// 		[7, 6, 5, 4],
// 		[0, 1, 2, 3],
// 	];
// 	return (
// 		<View style={styles.gridContainer}>
// 			{data.map((column) => (
// 				<Row key={column.toString()} column={column}>
// 					{" "}
// 				</Row>
// 			))}
// 		</View>
// 	);
// };

// const styles = StyleSheet.create({
// 	gridContainer: {
// 		width: 220,
// 	},
// 	rowStyle: {
// 		flexDirection: "row",
// 		alignItems: "center",
// 		justifyContent: "space-around",
// 	},
// 	cellStyle: {
// 		flex: 1,
// 		margin: 10,
// 	},
// });

// export default Table;
