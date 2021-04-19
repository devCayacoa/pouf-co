import { firestore } from '../../firebase/utils';

export const handleAddProduct = (product) =>
	new Promise((resolve, reject) => {
		console.log('Sending it to the firestore...');
		firestore
			.collection('products')
			.doc()
			.set(product)
			.then(() => resolve())
			.catch((err) => reject(err));
	});

export const handleFetchProducts = () =>
	new Promise((resolve, reject) => {
		firestore
			.collection('products')
			.get()
			.then((snapshot) =>
				resolve(snapshot.docs.map((doc) => ({ ...doc.data(), uid: doc.id })))
			)
			.catch((err) => reject(err));
	});

export const handleDeleteProduct = (uid) => {
	return new Promise((resolve, reject) => {
		firestore
			.collection('products')
			.doc(uid)
			.delete()
			.then(() => resolve())
			.catch((err) => reject(err));
	});
};
