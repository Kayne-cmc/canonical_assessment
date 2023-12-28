import React from 'react';
import '../styles/cardStyle.css';

export default function Card(props) {

	const post = props.data

	return (
		<div className={`p-card post-${post.id}`}>
			<p className='p-heading--5 u-no-padding' style={{'fontWeight': 400}}>CLOUD AND SERVER</p>
			<hr className="dotted"></hr>
			<img className="p-card__image" src={post.image} />
			<div className="p-card__inner u-no-padding">
				<h4><a href={post.titleLink}>{post.title}</a></h4>
				<p className='p-heading--6'>By <a href={post.author.url}>{post.author.name}</a> on {post.date.getDate()} {post.date.toLocaleDateString('en-US', { month: 'long'})} {post.date.getFullYear()}</p>
			</div>
			<hr className="dotted"></hr>
			<div className="p-card__inner u-no-padding--left u-no-padding--bottom">
				<p style={{'font-weight': 300}}>Article</p>
			</div>
		</div>
	)
}
