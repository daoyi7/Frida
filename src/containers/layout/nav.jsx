import React from 'react'
import { Menu, Icon } from 'antd'
import { Link } from 'react-router'
import style from './less/nav.less'

const SubMenu = Menu.SubMenu
const MenuItem = Menu.Item

class Nav extends React.Component {
  render() {
    return (
      <Menu
        className={style.nav}
        // defaultSelectedKeys={['1']}
        mode="inline"
      >
        {/* <SubMenu key="sub1" title={<span><Icon type="line-chart" /><span>Navigation One</span></span>}> */}
        <MenuItem key="1"><Link to="/index"><Icon type="line-chart" />首页</Link></MenuItem>
        <MenuItem key="2"><Link to="/settings"><Icon type="line-chart" />权限管理</Link></MenuItem>
        {/* <MenuItem key="3"><Link to="/page2"><Icon type="line-chart" />Option 1</Link></MenuItem> */}
        {/* <MenuItem key="4"><Link to="/page2"><Icon type="line-chart" />Option 1</Link></MenuItem> */}
        {/* <MenuItem key="5"><Link to="/page2"><Icon type="line-chart" />Option 1</Link></MenuItem> */}
        {/* </SubMenu> */}
      </Menu>
    )
  }
}

export default Nav