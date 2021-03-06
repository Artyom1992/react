import React, {Component} from 'react';

class Article extends Component {
	constructor(props) {
		super(props);

		this.state = {
		}
	}

	componentWillMount() {
		console.log('--- WillMount');
	}

	// componentWillReceiveProps(nextProps) {
	// 	if (nextProps.defaultOpen !== this.props.defaultOpen) {
	// 		this.setState({
	// 			isOpen: nextProps.defaultOpen
	// 		})
	// 	}
	// }

	componentWillUpdate() {
		console.log('--- wiilUpdate');
	}

	render() {
		const {article, isOpen, onButtonClick} = this.props;
		const body = isOpen && <section className="card-text">{article.text}</section> ;

		return (
			<div className="card" style={{width: '70%'}}>
				<div className="card-header">
					<h2>
						{article.title}
						<button className="btn btn-primary btn-lg float-right" onClick={onButtonClick}>
							{isOpen ? 'Close' : 'Open'}
						</button>
					</h2>
				</div>
				<div className="card-body">
					<h6 className="card-subtitle text-muted">
						Creation date: { (new Date(article.date)).toDateString() }
					</h6>
					{body}
				</div>
			</div>
		)
	}
}

export default Article;