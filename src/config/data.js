module.exports = {
	data: {
		todos: [
			{
				id: 1,
				title: 'Learn React',
				detail: 'Learn separately from Server',
				complete: false
			},
			{
				id: 2,
				title: 'Learn GraphQL',
				detail: 'Learn server and apollo client',
				complete: false
			},
			{
				id: 3,
				title: 'Learn State Management',
				detail: `Learn it first without Redux and then you'll need and love it`,
				complete: false
			},
			{
				id: 4,
				title: 'Learn Semantic UI',
				detail: 'So everything you do looks good',
				complete: true
			},
			{
				id: 5,
				title: 'Learn Jest!',
				detail: `So you don't mess up`,
				complete: false
			}
		],
		filters: [
			{ 
				key: 'all', 
				text: 'All', 
				value: 'all' 
			},
		    { 
		    	key: 'complete', 
		    	text: 'Complete', 
		    	value: 'complete' 
		    },
		    { 
		    	key: 'pending', 
		    	text: 'Pending', 
		    	value: 'pending' 
		    },
		]
	} 
}