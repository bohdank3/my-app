import React,{Component} from 'react';
import './post-list-item.css'


export default class PostListItem extends Component{
	render() {
		const{label,onDelete,onToggleLiked,onToggleImpotant,important,like}=this.props;

		let classNames = 'app-list-item d-flex justify-content-between';

		if(important){
			classNames +=' important' ;
		}
		
		if(like){
			classNames +=' like' ;
		}

		return (
			<div className = {classNames}>
				<span onClick={onToggleLiked} className='app-list-item-label'>
					{label}
				</span>
				<div className='d-flex justify-content-center align-items-center'>
					<button
					 type='button' 
					 className='btn-star btn-sm'
					 onClick={onToggleImpotant}>
						<i className="fas fa-star"></i>
					</button>
					<button type='button' 
						className='btn-trash btn-sm'
						onClick = {onDelete}>
						<i className="fas fa-trash"></i>
					</button>				
					<i className="fas fa-heart"></i>
				</div>
			</div>			
		)
	}
}

