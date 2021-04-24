export const checkUserIsAdmin = (currentUser) => {
	if (!currentUser || !Array.isArray(currentUser.userRoles)) return false;
	const { userRoles } = currentUser;
	if (userRoles.includes('admin')) return true;
	return false;
};

export const numberWithCommas = (x) => x.toLocaleString();
