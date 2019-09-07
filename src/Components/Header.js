import React, { Component } from 'react'
import SlidShow from './SlidShow'
import Search from './Search'
import './Header.css'

class Header extends Component {
    render() {
        return (
            <div className="divHeader">
                <div className="SearchBox">
                    <Search />
                </div>
                <div className="SliderBox">
                    <SlidShow />
                </div>
            </div>
        )
    }
}

export default Header
