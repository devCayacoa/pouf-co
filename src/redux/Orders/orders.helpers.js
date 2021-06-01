import { firestore } from '../../firebase/utils';

export const handleSaveOrder = (order) =>
	new Promise((resolve, reject) => {
		firestore
			.collection('orders')
			.doc()
			.set({ status: 'processing', ...order })
			.then(() => {
				resolve();
			})
			.catch((err) => reject(err));
	});

export const handleGetUserOrderHistory = ({
	uid,
	status = '',
	startAfterDoc,
	persistOrders = [],
}) =>
	new Promise((resolve, reject) => {
		const pageSize = 6;
		let ref = firestore
			.collection('orders')
			.orderBy('orderCreatedDate')
			.limit(pageSize);
		ref = ref.where('orderUserId', '==', uid);

		if (status !== 'all') ref = ref.where('status', '==', status);

		if (startAfterDoc) {
			console.log('Starting after doc: ', startAfterDoc);
			ref = ref.startAfter(startAfterDoc);
		}
		ref
			.get()
			.then((snapshot) => {
				console.log('Snapshot: ', snapshot);
				const totalCount = snapshot.size;

				const data = [
					...persistOrders,
					...snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
				];

				resolve({
					data,
					queryDoc: snapshot.docs[totalCount - 1],
					isLastPage: totalCount < 1 || totalCount < pageSize,
				});
			})
			.catch((err) => reject(err));
	});

export const handleGetOrder = (orderId) =>
	new Promise((resolve, reject) => {
		firestore
			.collection('orders')
			.doc(orderId)
			.get()
			.then((snapshot) => {
				if (snapshot.exists) resolve({ ...snapshot.data(), id: orderId });
			})
			.catch((err) => reject(err));
	});
