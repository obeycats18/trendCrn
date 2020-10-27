import axios from 'axios';
import { OrderKeysT } from '../@types';

const fetch = axios.create({
	baseURL: 'http://localhost/api',
	withCredentials: true,
	headers: {
		'Access-Control-Allow-Origin': '*',
		Accept: 'application/json, text/javascript, */*; q=0.01',
		'Set-Cookie':
			'user.id=17; user.hashKey=67f01079bc379b45277615bc41b152f521f33c7b; user.login=optega; user.role=administrator; user.name=%D0%94%D0%B8%D0%BC%D0%B0; user.sip_login=905; user.call_from_system=1; user.menu_list_access=%7B%22nav_user_groups%22%3A%221%22%2C%22nav_users%22%3A%221%22%2C%22nav_stores%22%3A%221%22%2C%22nav_status_matrix%22%3A%221%22%2C%22nav_orders%22%3A%221%22%2C%22nav_clients%22%3A%221%22%2C%22nav_basket%22%3A%221%22%2C%22nav_products_categories%22%3A%221%22%2C%22nav_products%22%3A%221%22%2C%22nav_suppliers%22%3A%221%22%2C%22nav_consignments%22%3A%221%22%2C%22nav_novaposhta_ttn%22%3A%221%22%2C%22nav_novaposhta_scansheet%22%3A%221%22%2C%22nav_storage%22%3A%221%22%2C%22nav_calls%22%3A%221%22%2C%22nav_sms%22%3A%221%22%2C%22nav_analytics%22%3A%221%22%2C%22analytics_traffic%22%3A%221%22%2C%22nav_analytics_manager%22%3A%221%22%2C%22nav_analytics_call_center%22%3A%221%22%2C%22nav_settings%22%3A%221%22%2C%22nav_daily_monitoring%22%3A%221%22%2C%22nav_invoices_marketing%22%3A%221%22%2C%22nav_rates%22%3A%221%22%2C%22nav_fixed_expenses%22%3A%221%22%2C%22nav_control_shipments%22%3A%221%22%2C%22nav_balance%22%3A%221%22%7D; user.order_statuses_access=%7B%224%22%3A%221%22%2C%225%22%3A%221%22%2C%2278%22%3A%221%22%2C%2243%22%3A%221%22%2C%2218%22%3A%221%22%2C%2219%22%3A%221%22%2C%229%22%3A%221%22%2C%2220%22%3A%221%22%2C%2281%22%3A%220%22%2C%2280%22%3A%221%22%2C%2221%22%3A%221%22%2C%2246%22%3A%221%22%2C%226%22%3A%221%22%2C%2222%22%3A%221%22%2C%2262%22%3A%221%22%2C%2263%22%3A%221%22%2C%2264%22%3A%221%22%2C%2265%22%3A%221%22%2C%2266%22%3A%221%22%2C%2267%22%3A%221%22%2C%2223%22%3A%221%22%2C%2224%22%3A%221%22%2C%2247%22%3A%221%22%2C%2282%22%3A%220%22%2C%227%22%3A%221%22%2C%228%22%3A%221%22%2C%2225%22%3A%221%22%2C%2226%22%3A%221%22%2C%2227%22%3A%221%22%2C%2228%22%3A%221%22%2C%2229%22%3A%221%22%2C%2230%22%3A%221%22%2C%2231%22%3A%221%22%2C%2232%22%3A%221%22%7D; user.payment_received=1; user.order_return=1; user.admin=true; user.marketer=false; user.show_phone_number=1',
	},
});

export const API = {
	getOrders: async () => {
		return await fetch
			.post<OrderKeysT[]>('orders', null, {
				proxy: { host: 'http://localhost', port: 80 },
			})
			.then((res) => res.data);
	},
};
