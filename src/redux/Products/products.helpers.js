import { firestore } from '../../firebase/utils';

export const handleAddProduct = (product) =>
	new Promise((resolve, reject) => {
		firestore
			.collection('products')
			.doc()
			.set({ ...product, rating: 0, numberRatings: 0 })
			.then(() => resolve())
			.catch((err) => reject(err));
	});

export const handleFetchProducts = ({
	filterType = '',
	startAfterDoc,
	persistProducts = [],
}) =>
	new Promise((resolve, reject) => {
		const pageSize = 6;
		let ref = firestore
			.collection('products')
			.orderBy('createdDate')
			.limit(pageSize);

		if (filterType) ref = ref.where('categories', 'array-contains', filterType);
		if (startAfterDoc) ref = ref.startAfter(startAfterDoc);
		ref
			.get()
			.then((snapshot) => {
				const totalCount = snapshot.size;
				const data = [
					...persistProducts,
					...snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
				];
				console.log(`Total count: ${totalCount}`);
				resolve({
					data,
					queryDoc: snapshot.docs[totalCount - 1],
					isLastPage: totalCount < 1 || totalCount < pageSize,
				});
			})
			.catch((err) => {
				console.log(err);
				reject(err);
			});
	});

export const handleDeleteProduct = (uid) =>
	new Promise((resolve, reject) => {
		firestore
			.collection('products')
			.doc(uid)
			.delete()
			.then(() => resolve())
			.catch((err) => reject(err));
	});

export const handleFetchProduct = (id) =>
	new Promise((resolve, reject) => {
		firestore
			.collection('products')
			.doc(id)
			.get()
			.then((snapshot) => {
				if (snapshot.exists) resolve({ id: snapshot.id, ...snapshot.data() });
			})
			.catch((err) => reject(err));
	});

export const handleUpdateProduct = (product) =>
	new Promise((resolve, reject) => {
		console.log('Product from handleUpdateProduct: ', product);
		firestore
			.collection('products')
			.doc(product.id)
			.update(product)
			.then(() => resolve())
			.catch((err) => {
				console.log(err);
				reject(err);
			});
	});
