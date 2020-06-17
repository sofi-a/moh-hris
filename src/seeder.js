import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';
import db from './db';

const salt = bcrypt.genSaltSync(10); 

const isInitialized = JSON.parse(localStorage.getItem('isInitialized'));

const user = {
	id: uuidv4(),
	username: 'admin',
	password: bcrypt.hashSync('password', salt),
}

export const seedUsers = () => {
	db.table('users')
	  .add(user)
	  .then(id => console.log(`New user added with id: ${id}`));
}

export const seedItems = () => {
	if(!isInitialized) {
		seedUsers();
	}
	localStorage.setItem('isInitialized', JSON.stringify(true));
}
