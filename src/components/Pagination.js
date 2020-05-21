import React, { Component } from 'react';
import _ from 'lodash';

class Pagination extends Component {
	render() {
		const { pageSize, itemCount, currentPage } = this.props;
		const pagesCount = itemCount / pageSize;
		const pages = _.range(1, pagesCount + 1);

		return (
			<nav aria-label="Page navigation example" className="m-4">
				<ul className="pagination">
					{pages.map(page => (
						<li
							className={page === currentPage ? 'page-item active' : 'page-item'}
							key={page}>
							<a class="page-link" onClick={() => this.props.handlePagination(page)}>
								{page}
							</a>
						</li>
					))}
				</ul>
			</nav>
		);
	}
}

export default Pagination;
