import React from 'react';
import { Menu } from 'antd';

import { MenuOutlined, CloseOutlined, UserOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

const menu = [
	{
		title: 'Главная',
		subitems: [],
	},
	{
		title: 'Пользователи',
		subitems: ['Группы пользователей', 'Пользователи', 'Магазины'],
	},
	{
		title: 'Заказы',
		subitems: ['Матрица статусов', 'Заказы', 'Клиенты', 'Корзина'],
	},
	{
		title: 'Товары',
		subitems: ['Категории товаров', 'Накладные', 'Поставщики', 'Товары'],
	},
	{
		title: 'Доставка',
		subitems: ['ТТН НП', 'Реестры НП', 'Контроль отправок'],
	},
	{
		title: 'Звонки',
		subitems: [],
	},
	{
		title: 'SMS',
		subitems: [],
	},
	{
		title: 'Аналитика',
		subitems: [
			'Аналитика',
			'Аналитика менеджера',
			'Аналитика КЦ',
			'Аналитика трафика',
			'Аналитика по дням',
			'Накладные по маркетингу',
			'Баланс',
		],
	},
	{
		title: 'Настройки',
		subitems: ['Настройки', 'История', 'Ставка', 'Постоянные расходны'],
	},
];

export default ((props) => {
	return (
		<Menu mode='inline' style={{ height: '100%', borderRight: 0 }}>
			{menu.map((m, i) => {
				if (!m.subitems.length) {
					return (
						<Menu.Item icon={<UserOutlined />} key={`menu-${i}`}>
							{m.title}
						</Menu.Item>
					);
				}
				return (
					<SubMenu key={`menu-${i}`} icon={<UserOutlined />} title={m.title}>
						{m.subitems.map((subItem, subIndex) => {
							return (
								<Menu.Item key={`menu-${i}:submenu-${subIndex}`}>
									{subItem}
								</Menu.Item>
							);
						})}
					</SubMenu>
				);
			})}
		</Menu>
	);
}) as React.FC;
