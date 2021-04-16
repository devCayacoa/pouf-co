import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { checkUserIsAdmin } from '../utils';

const mapState = ({ user }) => ({
	currentUser: user.currentUser,
});

export const AdminToolbar = () => {
    const {currentUser} = useSelector(mapState)
    const isAdmin = checkUserIsAdmin(currentUser)
    if(!isAdmin) return null;

	return (
		<div className={'admin-toolbar bg-black text-white flex justify-end'}>
			<ul className={""}>
				<li className={"p-2 transition duration-150 hover:bg-purple-600 text-white"}>
					<Link to='/admin'>My admin</Link>
				</li>
			</ul>
		</div>
	);
};
