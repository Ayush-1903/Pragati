import React, {useContext, useEffect, useState} from 'react';
import Tiles from '../WebTiles/Tiles';
import { collection, getDocs } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { db } from '../../firebase-config';

const FavTile = () => {

    const[tileData, setTileData] = useState([]);

    // useEffect(() => {
    //     getWebsite()
    // }, [userEmail])

    // useEffect(() => {
    //     console.log(tileData);
    // }), [tileData]

    // function getWebsite() {

    //     const webData = collection(db, 'favourites', 'userEmails', userEmail);

    //     getDocs(webData)
    //       .then((res) => {
    //         const tiles = res.docs.map((doc) => {
    //           const data = doc.data();
    //           const id = doc.id;
    //           const imageUrl = data.image;
    //           return {
    //             data: { ...data, image: null },
    //             id: id,
    //             imageUrl: imageUrl,
    //           };
    //         });
    //         Promise.all(
    //           tiles.map((tile) =>
    //             getDownloadURL(ref(getStorage(), tile.imageUrl))
    //               .then((url) => ({ ...tile, data: { ...tile.data, image: url } }))
    //               .catch((error) => console.log(error.message))
    //           )
    //         ).then((results) => {
    //           setTileData(results);
    //         });
    //       })
    //       .catch((error) => console.log(error.message));
    // }   

    return (
        <div className="navdash">

            <Tiles title= "Favourites" data={tileData}/>

        </div>
    )
}

export default FavTile;