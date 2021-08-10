import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import Postlist from '../post-list/post-list';
import PostAddForm from '../post-add-form';
import './app.css'

//Стейт на прямую мы не изменяем !!!!

export default class App extends Component{
	constructor(props){
		super(props);
		this.state={
			data :[
				{label:'Going to learn React', important: true,id:'qwqw'},
				{label:'That is so good', important: false,id:2},
				{label:'I need a break ...', important: false,id:'sda'}
			]
		};
		this.deleteItem = this.deleteItem.bind(this);
	}

	deleteItem(id){
		this.setState(({data})=>{
			const index = data.findIndex(elem=>elem.id === id);

			const before = data.slice(0,index);
			const after = data.slice(index+1);

			const newArr = [...before,...after];

			return{
				data:newArr
			}
		});
	}
	render(){
			return(
						<div className='app'>
							<AppHeader/>
							<div className='search-panel d-flex'>
								<SearchPanel/>
								<PostStatusFilter/>
							</div>
							<Postlist
								posts={this.state.data}
								onDelete={this.deleteItem}/>
							<PostAddForm/>
						</div>
	);
	}



}
