import React from 'react';
import PostListItem  from '../post-list-item';

import'./post-list.css'

const Postlist =({posts, onDelete, onToggleImpotant, onToggleLiked})=>{

	const elements = posts.map((item)=>{
		const{id,...itemProps}=item;
		return (
			<li key={id} className='list-group-item'>
				<PostListItem 
						{...itemProps}
						onDelete={()=> onDelete(id)}
						onToggleImpotant = {()=>onToggleImpotant(id)}
						onToggleLiked = {()=>onToggleLiked(id)}/>
			</li>
		)
	})

	return(
		<ul className="app-list">
			{/* <PostListItem label ={posts[0].label} important={posts[0].important}/> */}
			{elements}
		</ul>
	)
}

export default Postlist;