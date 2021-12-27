import React, { useState } from 'react'
import { Layout, Menu, Dropdown ,Avatar} from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined
  } from '@ant-design/icons';
  import styles from './index.module.scss'
const { Header,Content } = Layout;
export default function TopHeader() {
    const [collapsed,setCollapsed] = useState(false)
    const [drop ,setDrop] = useState( <Menu >
        <Menu.Item key="1">个人中心</Menu.Item>
        <Menu.Item key="2" danger>退&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;出</Menu.Item>
      </Menu>)
      const clickDrop = ()=>{}
    return (
           <Header className={styles["site-layout-background"]}  >
               {
                   (collapsed && <MenuUnfoldOutlined onClick={()=>setCollapsed(!collapsed)}/> )|| <MenuFoldOutlined onClick={()=>setCollapsed(!collapsed)}/>
               }
            <div  className={styles['admin']}>
                <span  className={styles['user']}>
                    欢迎admin回来
                </span>
               <Dropdown overlay={drop}>
                    <Avatar size={45} icon={<UserOutlined />} />
               </Dropdown>
         
            </div>
            </Header>
    )
}
