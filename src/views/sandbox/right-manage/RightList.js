import React, { useEffect,useState } from 'react'
import {Button, Table, Tag,Modal} from 'antd'
import {  } from 'react/cjs/react.development'
import {
    DeleteOutlined,
    EditOutlined,
    ExclamationCircleOutlined
  } from '@ant-design/icons';
import axios from 'axios'
const {confirm} = Modal


export default function RightList() {
    const [listSource,setListSource] = useState([])
   
    useEffect(()=>{
        axios.get('http://localhost:3000/rights?_embed=children').then( ({data}) =>{
            const list = data.map(el =>{
                if(el.children.length === 0){
                    el.children = ''
                }
                return el
            })
            setListSource(list)
            
         })
    },[])

    const columns=[
        {
        title: 'ID',
        dataIndex: 'id',
        key: 'key'
        },
        {
        title: '权限名称',
        dataIndex: 'title',
        key: 'key',
        },
        {
        title: '权限路径',
        dataIndex: 'key',
        key: 'key',
        render:key=><Tag color='orange'>{key}</Tag>
        },
        {
            title: '操作',
            render:(val)=>{
                return <>
                        <Button shape="circle" onClick={ ()=>confirmMethods(val) } type='danger' icon={<DeleteOutlined />}/>
                        <Button type='primary' shape="circle" icon={<EditOutlined />}/>
                        </>
            }
        }
    ]

    const confirmMethods = val=>{
        console.log(listSource)
    confirm({
        title:'你确定要删除么',
        icon:<ExclamationCircleOutlined/>,
        okText: '确定',
        okType: 'danger',
        cancelText: '取消',
      
        onOk(){
            deleteMethod(val)
        }, 
        onCancel(){}
    })
   }
    const deleteMethod = (val) =>{

     
    //   setListSource(listSource.filter(el => el.id !==val.id))
    }
    return (
        <Table pagination={{ pageSize:5}} dataSource={listSource} columns={columns} />
       )
}
