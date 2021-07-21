// Write your code here
import {Component} from 'react'
import './index.css'

class NavBar extends Component {
  navItemList = () => {
    const {navBarItems, activeNavBarItem, changeActiveNavBarItem} = this.props

    return navBarItems.map(navItem => {
      const onClickNavBarItem = () => changeActiveNavBarItem(navItem.name)
      const buttonClassName =
        activeNavBarItem === navItem.name ? 'active-item' : ''
      return (
        <li
          className={`nav-item ${buttonClassName}`}
          key={navItem.id}
          onClick={onClickNavBarItem}
        >
          <img src={navItem.iconUrl} alt={navItem.name} />
          <p className="item-name">{navItem.name}</p>
        </li>
      )
    })
  }

  render() {
    return (
      <nav className="nav-bar">
        <img
          alt="profile"
          img="https://assets.ccbp.in/frontend/react-js/portfolio-profile-img.png"
          className="profile-img"
        />
        <ul className="nav-item-list">{this.navItemList()}</ul>
      </nav>
    )
  }
}
export default NavBar
