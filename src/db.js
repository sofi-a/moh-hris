import Dexie from 'dexie';

const db = new Dexie('hris');
db.version(1).stores({
  users: 'id, &username',
});

export default db;
