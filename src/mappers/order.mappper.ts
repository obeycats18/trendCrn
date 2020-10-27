import orders from '../assets/orders.json';
import { getDataKeys } from '../helpers/mapper.helpers';
import { OrderKeysT } from '../@types';

export type OrderDataT = typeof orders[0];

export const orderKeys = getDataKeys<OrderDataT>(orders[0]);

export const getOrders = (): OrderDataT[] => {
	return orders.map((o, i) => ({
		...o,
		key: `${i}`,
	}));
};
