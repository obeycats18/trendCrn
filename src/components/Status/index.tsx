import React, { useState } from 'react';

import { Tag } from 'antd';
import { StatusT } from '../../mappers/statuses.mapper';

import classNames from 'classnames';

import './style.scss';

type PropsT = {
	status: StatusT | undefined;
	statusHandler: (status: StatusT, index: number) => void;
	activeId: number;
	index: number;
};

export default (({ status, statusHandler, activeId, index }) => {
	return (
		status && (
			<div
				onClick={() => statusHandler(status, index)}
				className={classNames('status', { active: activeId === index })}
				style={{ borderTop: `5px solid ${status.style}` }}>
				{status.name}
			</div>
		)
	);
}) as React.FC<PropsT>;
