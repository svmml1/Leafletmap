import React, { Fragment, useState, useEffect, useRef } from 'react'
import MapView from './components/MapView';
import './App.css';
import BottomNavigation from 'reactjs-bottom-navigation'
import 'reactjs-bottom-navigation/dist/index.css'
import HomeOutlined from '@material-ui/icons/HomeOutlined';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import FavoriteIcon from '@material-ui/icons/FavoriteIcon';
import MenuOutlined from '@material-ui/icons/MenuOutlined';
import { Canvas, useThree, useFrame } from 'react-three-fiber'


function App() {


  const bottomNavItems = [
    {
      title: 'Home',

      icon: <HomeOutlined style={{ fontSize: '24px', color: '#737373' }} />,

      activeIcon: <HomeOutlined style={{ fontSize: '24px', color: '#3966ae' }} />
    },

    {
      title: 'Search',

      icon: <SearchOutlined style={{ fontSize: '24px' }} />,

      activeIcon: <SearchOutlined style={{ fontSize: '24px', color: '#3966ae' }} />
    },

    {
      title: 'Notifications',

      icon: <FavoriteIcon style={{ fontSize: '24px' }} />,

      activeIcon: <FavoriteIcon style={{ fontSize: '24px', color: '#3966ae' }} />
    },

    {
      title: 'Menu',

      icon: <MenuOutlined style={{ fontSize: '24px' }} />,

      activeIcon: <MenuOutlined style={{ fontSize: '24px', color: '#3966ae' }} />,

      onClick: () => alert('menu clicked')
    }
  ]
  return (
    <div className="App">
      <MapView/>
      <BottomNavigation
        items={bottomNavItems}
        defaultSelected={0}
        onItemClick={(item) => console.log(item)}
        activeTextColor={'#3966ae'}
        z-index={1}
        activeBg
        
      />
    </div>
  );
}

export default App;
