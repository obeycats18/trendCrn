import React, { useState } from 'react';

import { Layout, Row, Col } from 'antd';
import { MenuOutlined, CloseOutlined, UserOutlined } from '@ant-design/icons';

import { Menu, Table, StatusList } from './components';

import logo from './assets/images/logo.png';

import OrderStore from './store/Orders';

const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
	const [collapsed, setCollapsed] = useState<boolean>(false);

	const toggle = () => setCollapsed(!collapsed);

	return (
		<Layout>
			<Header className='header'>
				<Row align='middle'>
					<Col span={1}>
						{React.createElement(collapsed ? CloseOutlined : MenuOutlined, {
							onClick: toggle,
						})}
					</Col>
					<Col span={4}>
						<img src={logo} alt='TrendCRM' style={{ width: 150 }} />
					</Col>
				</Row>
			</Header>
			<Layout>
				<Sider trigger={null} collapsible collapsed={collapsed} width={260}>
					<Menu />
				</Sider>
				<Layout style={{ padding: '0 24px 24px' }}>
					<Content
						className='site-layout-background'
						style={{
							padding: '120px 0',
							margin: 0,
							minHeight: '100vh',
						}}>
						<div className='orders-table'>
							<StatusList orderStore={OrderStore} />
							<Table orderStore={OrderStore} />
						</div>
					</Content>
				</Layout>
			</Layout>
		</Layout>
	);
};

export default App;
