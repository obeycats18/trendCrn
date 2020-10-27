import React, { useState } from 'react';
import { getStatuses, StatusT } from '../../mappers/statuses.mapper';
import Status from '../Status';

import OrderStore from '../../store/Orders';

import './style.scss';
import { observer } from 'mobx-react';

type PropsT = {
	orderStore: typeof OrderStore;
};

export default observer(({ orderStore }) => {
	const [activeId, setActiveId] = useState(0);

	const handlerStatus = (status: StatusT, index: number) => {
		setActiveId(index);
		orderStore.filterOrders(status.name);
	};

	const statuses = getStatuses();

	return (
		<div className='status__list'>
			{statuses.map((status, index) => (
				<Status
					index={index}
					activeId={activeId}
					statusHandler={handlerStatus}
					status={status}
				/>
			))}
		</div>
	);
}) as React.FC<PropsT>;
