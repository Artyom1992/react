import React, {Component} from 'react'
import Article from '../Article'
import './style.css'

class ArticleList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			openArticleId: null
		}

		this.handleClick = (openArticleId) => {
			this.setState({
				openArticleId: this.state.openArticleId === openArticleId ? null : openArticleId
			})
		}
	}

	render() {
		const articleElements = this.props.articles.map((article, index) =>
			<li className="ArticleList__item" key = {article.id}>
				<Article article = {article}
							isOpen = {this.state.openArticleId === article.id}
							onButtonClick = {this.handleClick.bind(this, article.id)}
				/>
			</li>
		)

		return (
			<ul className="ArticleList">
				{articleElements}
			</ul>
		)
	}
}

export default ArticleList;