import React, {Component} from 'react';


class Article extends Component {
	constructor(props) {
		super(props);

		var self = this;

		this.state = {
			isOpen: props.defaultOpen
		}

		this.handleClick = function() {
			self.setState({
				isOpen: !self.state.isOpen
			})
		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.defaultOpen !== this.props.defaultOpen) {
			this.setState({
				isOpen: nextProps.defaultOpen
			})
		}
	}

	componentWillUpdate() {
		console.log('wiilUpdate');
	}

	render() {
		const {article} = this.props;
		const body = this.state.isOpen && <section className="card-text">{article.text}</section> ;

		return (
			<div className="card" style={{width: '70%'}}>
				<div className="card-header">
					<h2>
						{article.title}
						<button className="btn btn-primary btn-lg float-right" onClick={this.handleClick}>
							{this.state.isOpen ? 'Close' : 'Open'}
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