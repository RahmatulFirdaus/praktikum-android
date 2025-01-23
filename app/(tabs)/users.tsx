// import React, { useState, useEffect } from "react";
// import { FlatList, StyleSheet, View } from "react-native";
// import Card from "@/app-example/components/Card"; 
// import { GetUsers } from "../api/GetUsers"; 

// export default function Users() {
//     const [data, setData] = useState(null);
//     GetUsers.then((result) => {
//         setData(result?.data.data);
//     });

//     return (
//         <View style={styles.container}>
//             <FlatList
//                 data={data}
//                 keyExtractor={(item) => item.id.toString()} 
//                 renderItem={({ item }) => (
//                     <Card
//                         id={item.id}
//                         sumberGambar={item.avatar} 
//                         judul={item.first_name}
//                         keterangan={item.last_name} 
//                     />
//                 )}
//             />
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         padding: 16,
//     },
// });
