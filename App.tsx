import React, { FC ,ReactElement} from 'react';
 import {HomeScreen} from "src/screens/HomeScreen"
 import {BookmarksScreen} from "src/screens/BookmarksScreen"


const App :FC= ():ReactElement=> {
  return (
    <>
     <HomeScreen/>
     <BookmarksScreen/>
    </>
  );
};

export default App;
