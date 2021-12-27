
import styles from './index.module.scss'
import React, { useEffect } from 'react'
import { Layout, Menu, } from 'antd';


import {
    HddFilled,
    DatabaseFilled,
    BankFilled,
    AlignLeftOutlined,
    UserOutlined,
  } from '@ant-design/icons';
import { withRouter } from 'react-router';
import { useState } from 'react/cjs/react.development';
import axios from 'axios';
const {  Sider } = Layout;
const { SubMenu } = Menu;
const API = 'http://localhost:3000'

const iconList = {
    '/home':<BankFilled />,
    '/user-manage/list':<AlignLeftOutlined />,
    '/right-manage/role/list':<DatabaseFilled />,
    '/right-manage/right/list':<HddFilled />,

}
 function SideMenu(props) {
     const selectKey = [props.location.pathname]
     const openKey = ['/'+props.location.pathname.split('/')[1]]
    const [meunList,setMeunList] =useState([])
        useEffect(()=>{
            axios.get(`${API}/rights?_embed=children`).then(res =>{
               setMeunList(res.data)
            })
        },[])

    const checkPermission = (item) =>  item.pagepermisson === 1 
    const renderMenuList = (data) =>{
        return data && data.map(item =>{
                if( item.children && checkPermission(item)){
                    return  <SubMenu key={item.key} icon={<UserOutlined />} title={item.title} icon={iconList[item.key]}> {renderMenuList(item.children)  }  </SubMenu>
                }else{
                    return checkPermission(item) && <Menu.Item key={item.key} icon={iconList[item.key]} onClick={()=>{props.history.push(item.key)}} > {item.title} </Menu.Item>
                }
            })
    }
    return (
        <Sider collapsible collapsed={false} >
          <div className={styles["logo"]} >全球新闻发布系统</div>
          <Menu theme="dark" selectedKeys={selectKey} defaultOpenKeys={openKey} mode="inline">
              {
                  renderMenuList(meunList)
              }
          </Menu>
        </Sider>
    )
}
export default withRouter(SideMenu)