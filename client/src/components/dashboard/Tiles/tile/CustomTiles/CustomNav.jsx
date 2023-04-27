import React, {useEffect, useState, useContext} from 'react';
import CustomTiles from './CustomTiles';
import { collection, doc, query, where, getDocs } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { db } from '../../firebase-config';
import { AuthContext } from '../../../../../context/AuthContext';

const CustomNav = () => {

    const[tileData, setTileData] = useState([]);

    const { user } = useContext(AuthContext);

    const email = user?.user?.email;    

    useEffect(() => {
        getWebsite()
    }, [])

    useEffect(() => {
        console.log(tileData);
    }), [tileData]

    function getWebsite() {

      const webData = collection(db, 'customLink');

      getDocs(webData)
        .then((res) => {
          const tiles = res.docs.map((doc) => {
            const data = doc.data();
            const id = doc.id;
            return {
              data: data,
              id: id,
            };
          });
          Promise.all(
            tiles.map((tile) =>
              Promise.resolve({ ...tile, data: { ...tile.data} })
            )
          ).then((results) => {
            setTileData(results);
          });
        })
        .catch((error) => console.log(error.message));
  }   

    return (
        <div className="navdash">

            <CustomTiles title= "Custom Tiles" data={tileData}/>

        </div>
    )
}

export default CustomNav;