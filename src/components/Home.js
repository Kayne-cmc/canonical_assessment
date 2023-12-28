import axios from 'axios';
import { useState, useEffect } from 'react';
import Card from './Card';
import '../styles/homeStyle.css';

function Home() {
	const [posts, setPosts] = useState()

	useEffect(() => {
		axios
			.get('https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json')
			.then((res) => {
				setPosts(res.data)
			})
			.catch((err) => {
				console.error(err)
			});
	}, [])

	return (
		<div className="posts-container">
			{ posts && posts.map((post) => {
					const postDetails = {
						id: post.id,
						title: post.title.rendered,
						titleLink: post.link,
						image: post.featured_media,
						date: new Date(post.date),
						author: post._embedded.author[0]
					}
					return (<Card data={postDetails} key={postDetails.id} />)
				})
			}
		</div>
	);
}

export default Home;
