import React, { useEffect } from 'react';
import { Table } from 'antd';
import { getColumns } from '../../mappers/columns.mapper';
import { getOrders } from '../../mappers/order.mappper';
import { getStatusByName } from '../../mappers/statuses.mapper';
import { observer } from 'mobx-react';

import OrderStore from '../../store/Orders';

type PropsT = {
	orderStore: typeof OrderStore;
};

export default observer(({ orderStore }) => {
	useEffect(() => {
		orderStore.setOrders();
	}, []);

	const columns = getColumns();

	return (
		<Table
			scroll={{ x: 1300, y: 500 }}
			columns={columns}
			dataSource={orderStore.filteredOrders}
			size='small'
			pagination={{
				current: 1,
				defaultPageSize: 20,
				showSizeChanger: true,
				pageSizeOptions: ['10', '25', '50', '100', '250', '500'],
			}}
			rowClassName={(record) => {
				const status = getStatusByName(record.status_name);
				return status ? status.style.replace('#', '') : '';
			}}></Table>
	);
}) as React.FC<PropsT>;
