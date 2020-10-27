import { getOrders, OrderDataT } from './../mappers/order.mappper';
import { API } from './../api/index';
import { runInAction, makeAutoObservable, makeObservable } from 'mobx';
import { OrderKeysT } from '../@types';

const STATUS_PENDING = 'pending';
const STATUS_DONE = 'done';
const STATUS_ERROR = 'error';

class Orders {
	private _orders: OrderDataT[] = [];
	private _filteredOrders: OrderDataT[] = [];
	private _status = STATUS_PENDING;
	constructor() {
		makeAutoObservable(this);
	}

	public async setOrders() {
		this._orders = [];
		this._filteredOrders = [];
		this._status = STATUS_PENDING;

		try {
			runInAction(async () => {
				this._orders = getOrders();
				this._filteredOrders = [...this._orders];
				this._status = STATUS_DONE;
			});
		} catch (error) {
			runInAction(async () => {
				this._orders = [];
				this._status = STATUS_ERROR;
			});
		}
	}

	public async filterOrders(status: string) {
		if (status === 'Все') {
			this._filteredOrders = [...this._orders];
		} else {
			this._filteredOrders = this._orders.filter(
				(order) => order.status_name === status,
			);
		}
	}

	get filteredOrders() {
		return this._filteredOrders;
	}

	get orders() {
		return this._orders;
	}

	get status() {
		return this._status;
	}
}

export default new Orders();
