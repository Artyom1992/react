import React from 'react'
import Article from '../Article'
import './style.css'

function ArticleList({articles}) {
	const articleElements = articles.map((article, index) =>
		<li className="ArticleList__item" key = {article.id}>
			<Article article = {article} defaultOpen = {index === 0} />
		</li>
	)

	return (
		<ul className="ArticleList">
			{articleElements}
		</ul>
	)
}

export default ArticleList;