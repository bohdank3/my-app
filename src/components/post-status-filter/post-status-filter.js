import React from 'react';
import Button from 'react-bootstrap/Button';
import './post-status-filter.css'

const PostStatusFilter = ()=>{
	return(
		<div className="btn-group">
			<Button variant='info'>Все</Button>
			<Button variant='outline-secondary'>Понравилось</Button>
		</div>
	)
}
export default PostStatusFilter;