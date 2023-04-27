import React, {useEffect, useState, useContext} from 'react';
import FavTiles from './FavTiles';
import { collection, doc, getDocs } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { db } from '../../firebase-config';
import { AuthContext } from '../../../../../context/AuthContext';

const FavNav = () => {

    const[tileData, setTileData] = useState([]);

    const { user } = useContext(AuthContext);

    const email = user?.user?.email;    

    useEffect(() => {
        getWebsite()
    }, [])

    useEffect(() => {
        console.log(tileData);
    }), [tileData]

    // function getWebsite() {

    //     const webData = collection(db, 'favourites', 'userEmails', email);

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
    
    function getWebsite() {

      const webData = collection(db, 'favourites', 'userEmails', email);
  
      getDocs(webData)
          .then((querySnapshot) => {
              console.log(`Number of documents: ${querySnapshot.size}`);
  
              const tiles = querySnapshot.docs.map((doc) => {
                  const data = doc.data();
                  const id = doc.id;
                  const imageUrl = data.image;
                  return {
                      data: { ...data, image: null },
                      id: id,
                      imageUrl: imageUrl,
                  };
              });
              Promise.all(
                  tiles.map((tile) =>
                      getDownloadURL(ref(getStorage(), tile.imageUrl))
                      .then((url) => ({ ...tile, data: { ...tile.data, image: url } }))
                      .catch((error) => console.log(error.message))
                  )
              ).then((results) => {
                  setTileData(results);
              });
          })
          .catch((error) => console.log(error.message));
  }
  

    return (
      <div className="navdash">

        <FavTiles title= "Favourites" data={tileData}/>

      </div>
    )
}

export default FavNav;