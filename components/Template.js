import Head from 'next/head'
import { Layout, Menu, Dropdown } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined, DownOutlined,
} from '@ant-design/icons';;
import { useState } from 'react';
import Link from 'next/link';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;



export default function Template({ children }) {
  const [collapsed, setCollapsed] = useState(false)
  const [selectedKey, setSelectedKey] = useState(1)
  const onCollapse = collapsed => {
    console.log(collapsed);
    setCollapsed(collapsed);
  };
  const onClick = ({ key }) => {
    console.log(key, "asdas")
    setSelectedKey(key)
  }

  const menu = (
    <Menu>
      <Menu.Item key="0">
        Account
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="1">
        Logout
      </Menu.Item>
    </Menu>
  );
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={[selectedKey.toString()]} mode="inline">
          <Menu.Item key="1" onClick={onClick} icon={<PieChartOutlined />}>
            <Link href="/dashboard"><a>Dashboard</a></Link>
          </Menu.Item>
          <Menu.Item key="2" onClick={onClick} icon={<UserOutlined />}>
            <Link href="/users"><a>Users</a></Link>
          </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="User">
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9" icon={<FileOutlined />}>
            Files
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background py-2">
          <div className="text-right text-white">
            <Dropdown overlay={menu} trigger={['click']}>
                <span className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                  Click me <DownOutlined />
                </span>
            </Dropdown>
          </div>
        </Header>
        <Content style={{ margin: '0 16px' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2022 </Footer>
      </Layout>
    </Layout>
  )
}