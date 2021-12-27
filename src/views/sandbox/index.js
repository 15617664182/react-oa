import { Layout } from 'antd'
import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import SideMenu from '../../components/SideMenu'
import TopHeader from '../../components/TopHeader'

// 二级路由
import Home from './home'
import NoPermission from './NoPermission'
import RightList from './right-manage/RightList'
import RoleList from './right-manage/RoleList'
import userList from './user-manage'
import styles from './index.module.scss'

const {Content} =Layout
export default function index() {
    return (
        <Layout style={{ minHeight: '100vh' }}>
          <SideMenu></SideMenu>
          <Layout className="site-layout">
          <TopHeader></TopHeader>

          <Content
            className= {styles["site-layout-background"]}
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }} >
              <Switch>
                <Route path='/home' component={Home}/>
                <Route path='/right-manage/right/list' component={RightList}/>
                <Route path='/right-manage/role/list' component={RoleList}/>
                <Route path='/user-manage/list' component={userList}/>
                {/* exact 精确匹配 */}
                <Redirect from='/' to='/home' exact/>  
                <Route path='*' component={NoPermission}/>
            </Switch>
          </Content>
         
          </Layout>
     
        </Layout>
    )
}
