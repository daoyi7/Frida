import React from 'react'
import { Row, Col, Switch, Icon, Avatar, Table } from 'antd'

import AvatarImg from 'static/images/avatar.png'
import style from './index.less'

const dataSource = [{
  key: '1',
  type: '修改密码',
  description: '用户能否自己修改密码',
  control: (<Switch />)
}, {
  key: '2',
  type: '修改密码',
  description: '用户能否自己修改密码',
  control: (<Switch />)
}, {
  key: '3',
  type: '修改密码',
  description: '用户能否自己修改密码',
  control: (<Switch />)
}]

const columns = [{
  title: '权限类型',
  dataIndex: 'type',
  key: 'type'
}, {
  title: '类型详情',
  dataIndex: 'description',
  key: 'description'
}, {
  title: '操作',
  dataIndex: 'control',
  key: 'control'
}]

class Settings extends React.Component {
  render() {
    return (
      <div className={style.settings}>
        <Row>
          <Col span={12}>
            <div className={style.current}>
              <div className={style.head}>
                <Icon type="user" />
                <span style={{
                  marginLeft: "5px"
                }}>当前用户</span>
              </div>
              <div className={style.info}>
                <Avatar
                  style={{
                    width: '80px',
                    height: 'auto',
                    border: '2px solid #eee',
                    borderRadius: '50%',
                    margin: '20px 0'
                  }}
                  src={AvatarImg} />
                <p style={{
                  padding: '0 0 20px 0'
                }}>当前用户权限：
                  <span
                    style={{
                      color: '#108ee9',
                      fontWeight: '700'
                    }}>超级管理员</span>
                </p>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div className={style.dashboard}>
              <div className={style.head}>
                <Icon type="dashboard" />
                <span style={{
                  marginLeft: "5px"
                }}>控制面板</span>
              </div>
              <div className={style.content}>
                <Table className={style.table} dataSource={dataSource} columns={columns} pagination={false}/>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Settings