import React, { Fragment, useState, useEffect, useRef } from 'react'
import MapView from './components/MapView';
import './App.css';
import BottomNavigation from 'reactjs-bottom-navigation'
import 'reactjs-bottom-navigation/dist/index.css'
import HomeOutlined from '@material-ui/icons/HomeOutlined';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import FavoriteOutlined from '@material-ui/icons/FavoriteOutlined';
import MenuOutlined from '@material-ui/icons/MenuOutlined';



function App() {


  const bottomNavItems = [
    {
      title: 'Home',

      icon: <HomeOutlined style={{ fontSize: '24px', color: '#737373' }} />,

      activeIcon: <HomeOutlined style={{ fontSize: '24px', color: '#3966ae' }} />
    },

    {
      title: 'Search',

      icon: <SearchOutlined style={{ fontSize: '24px', color: '#737373' }} />,

      activeIcon: <SearchOutlined style={{ fontSize: '24px', color: '#3966ae' }} />
    },

    {
      title: 'Notifications',

      icon: <FavoriteOutlined style={{ fontSize: '24px', color: '#737373' }} />,

      activeIcon: <FavoriteOutlined style={{ fontSize: '24px', color: '#3966ae' }} />
    },

    {
      title: 'Menu',

      icon: <MenuOutlined style={{ fontSize: '24px', color: '#737373' }} />,

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
        activeBgColor={'transparent' }
        
      />
    </div>
  );
}

export default App;
