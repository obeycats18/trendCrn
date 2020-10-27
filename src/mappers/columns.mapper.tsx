import React from 'react';

import { getStatusByName, StatusT, getStatuses } from './statuses.mapper';
import { orderKeys } from './order.mappper';
import { hexToRgb } from '../helpers/colors.helpers';
import { Tooltip, Tag } from 'antd';

const getBgColor = (status: StatusT) => {
	const rgb = hexToRgb(status ? status.style : '');

	return {
		props: {
			style: {
				backgroundColor: rgb ? `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.2)` : '',
			},
		},
	};
};

export const getColumns = () => {
	return [
		{
			key: 1,
			title: 'Заказ',
			dataIndex: orderKeys.id,
			width: 100,
			render: (text: string, record: any) => {
				const status = getStatusByName(record.status_name);

				return {
					...getBgColor(status!),
					children: text,
				};
			},
			sorter: (a: any, b: any) => a.id - b.id,
		},
		{
			key: 2,
			title: 'Статус',
			dataIndex: orderKeys.status_name,
			width: 150,
			sorter: (a: any, b: any) => a.status_name.length - b.status_name.length,
			filters: getStatuses().map((status) => ({
				text: status.name,
				value: status.name,
			})),
			onFilter: (value: any, record: any) =>
				record.status_name.indexOf(value) === 0,
			render: (status_name: string) => {
				const status = getStatusByName(status_name);

				return {
					...getBgColor(status!),
					children: (
						<Tag color={status ? status.style : ''}>
							{status ? status.name : ''}
						</Tag>
					),
				};
			},
		},
		{
			key: 3,
			title: 'ФИО клиента',
			dataIndex: orderKeys.client,
			width: 250,
			sorter: (a: any, b: any) => a.client.length - b.client.length,
			render: (text: string, record: any) => {
				const status = getStatusByName(record.status_name);

				return {
					...getBgColor(status!),
					children: text,
				};
			},
		},
		{
			key: 4,
			title: 'Телефон',
			dataIndex: orderKeys.client_phone,
			width: 180,
			sorter: (a: any, b: any) => a.client_phone.length - b.client_phone.length,
			render: (text: string, record: any) => {
				const status = getStatusByName(record.status_name);

				return {
					...getBgColor(status!),
					children: text,
				};
			},
		},
		{
			key: 5,
			title: 'Цена',
			dataIndex: orderKeys.total,
			width: 150,
			sorter: (a: any, b: any) => a.total - b.total,
			render: (text: string, record: any) => {
				const status = getStatusByName(record.status_name);

				return {
					...getBgColor(status!),
					children: text,
				};
			},
		},
		{
			key: 6,
			title: 'Комментарий',
			dataIndex: orderKeys.comment,
			width: 150,
			sorter: (a: any, b: any) => a.comment.length - b.comment.length,
			render: (text: string, record: any) => {
				const status = getStatusByName(record.status_name);

				return {
					...getBgColor(status!),
					children: text,
				};
			},
		},
		{
			key: 7,
			title: 'Себестоимость',
			dataIndex: orderKeys.storage_income_price_sum,
			width: 150,
			sorter: (a: any, b: any) =>
				a.storage_income_price_sum - b.storage_income_price_sum,

			render: (text: string, record: any) => {
				const status = getStatusByName(record.status_name);

				return {
					...getBgColor(status!),
					children: text,
				};
			},
		},
		{
			key: 8,
			title: 'Наименование',
			dataIndex: orderKeys.products_names,
			ellipsis: true,
			width: 150,
			sorter: (a: any, b: any) =>
				a.products_names.length - b.products_names.length,

			render: (text: string, record: any) => {
				const status = getStatusByName(record.status_name);

				return {
					...getBgColor(status!),
					children: (
						<>
							<Tooltip placement='topLeft' title={text}>
								{text}
							</Tooltip>
						</>
					),
				};
			},
		},
		{
			key: 9,
			title: 'Ответственный',
			dataIndex: orderKeys.responsible,
			width: 150,
			sorter: (a: any, b: any) => {
				if (a.responsible && b.responsible) {
					return a.responsible.length - b.responsible.length;
				}

				return 0;
			},

			render: (text: string, record: any) => {
				const status = getStatusByName(record.status_name);

				return {
					...getBgColor(status!),
					children: text,
				};
			},
		},
		{
			key: 10,
			title: 'Контрагент',
			dataIndex: orderKeys.counterparty,
			width: 100,
			sorter: (a: any, b: any) => a.counterparty.length - b.counterparty.length,

			render: (text: string, record: any) => {
				const status = getStatusByName(record.status_name);

				return {
					...getBgColor(status!),
					children: text,
				};
			},
		},
		{
			key: 11,
			title: 'Почта',
			dataIndex: orderKeys.delivery_type,
			width: 100,
			sorter: (a: any, b: any) =>
				a.delivery_type.length - b.delivery_type.length,

			render: (text: string, record: any) => {
				const status = getStatusByName(record.status_name);

				return {
					...getBgColor(status!),
					children: text,
				};
			},
		},
		{
			key: 12,
			title: 'ТТН',
			dataIndex: orderKeys.ttn,
			width: 170,
			sorter: (a: any, b: any) => a.ttn - b.ttn,

			render: (text: string, record: any) => {
				const status = getStatusByName(record.status_name);

				return {
					...getBgColor(status!),
					children: text,
				};
			},
		},
		{
			key: 13,
			title: 'Расчетная стоимость',
			dataIndex: orderKeys.ttn_cost,
			width: 200,
			sorter: (a: any, b: any) => a.ttn_cost - b.ttn_cost,

			render: (text: string, record: any) => {
				const status = getStatusByName(record.status_name);

				return {
					...getBgColor(status!),
					children: text,
				};
			},
		},
		{
			key: 14,
			title: 'Статус доставки',
			dataIndex: orderKeys.ttn_status,
			width: 400,
			sorter: (a: any, b: any) => a.ttn_status.length - b.ttn_status.length,

			render: (text: string, record: any) => {
				const status = getStatusByName(record.status_name);

				return {
					...getBgColor(status!),
					children: text,
				};
			},
		},
		{
			key: 15,
			title: 'Дата добавления',
			dataIndex: orderKeys.datetime,
			width: 180,
			sorter: (a: any, b: any) => a.datetime.length - b.datetime.length,

			render: (text: string, record: any) => {
				const status = getStatusByName(record.status_name);

				return {
					...getBgColor(status!),
					children: text,
				};
			},
		},
		{
			key: 16,
			title: 'Дата изменения',
			dataIndex: orderKeys.update_at,
			width: 180,
			sorter: (a: any, b: any) => a.update_at.length - b.update_at.length,

			render: (text: string, record: any) => {
				const status = getStatusByName(record.status_name);

				return {
					...getBgColor(status!),
					children: text,
				};
			},
		},
		{
			key: 17,
			title: 'Сайт',
			dataIndex: orderKeys.store_url,
			width: 250,
			sorter: (a: any, b: any) => a.store_url.length - b.store_url.length,

			render: (text: string, record: any) => {
				const status = getStatusByName(record.status_name);

				return {
					...getBgColor(status!),
					children: text,
				};
			},
		},
		{
			key: 18,
			title: 'Ответственный за магазин',
			dataIndex: orderKeys.name_store_resp,
			width: 250,
			sorter: (a: any, b: any) =>
				a.name_store_resp.length - b.name_store_resp.length,

			render: (text: string, record: any) => {
				const status = getStatusByName(record.status_name);

				return {
					...getBgColor(status!),
					children: text,
				};
			},
		},
	];
};
