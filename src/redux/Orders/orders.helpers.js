import { firestore } from '../../firebase/utils';

export const handleSaveOrder = (order) =>
	new Promise((resolve, reject) => {
		firestore
			.collection('orders')
			.doc()
			.set(order)
			.then(() => {
				resolve();
			})
			.catch((err) => reject(err));
	});

export const handleGetUserOrderHistory = (uid) =>
	new Promise((resolve, reject) => {
		let ref = firestore.collection('orders').orderBy('orderCreatedDate');
		ref = ref.where('orderUserId', '==', uid);
		ref
			.get()
			.then((snapshot) => {
				const data = [
					...snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
				];
				return { data };
			})
			.then((history) => resolve(history))
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
