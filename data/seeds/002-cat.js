exports.seed = function(knex) {
	// Deletes ALL existing entries
	return knex('category')
		.truncate()
		.then(function() {
			// Inserts seed entries
			return knex('category').insert([
				{ id: 1, name: 'Lambda School', user_id: '1' },
				{ id: 2, name: 'Cooking', user_id: '1' },
				{ id: 3, name: 'Run', user_id: '1' },
				{ id: 4, name: 'Work', user_id: '1' },
				{ id: 5, name: 'JS', user_id: '1' }
			]);
		});
};
