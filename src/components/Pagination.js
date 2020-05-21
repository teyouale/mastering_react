/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import _ from 'lodash';

class Pagination extends Component {
	render() {
		const { pageSize, itemCount, currentPage } = this.props;
		const pagesCount = Math.ceil(itemCount / pageSize);
		const pages = _.range(1, pagesCount + 1);
		if (pagesCount === 1) return null;

		return (
			<nav aria-label="Page navigation example" className="m-4">
				<ul className="pagination">
					{pages.map(page => (
						<li
							className={page === currentPage ? 'page-item active' : 'page-item'}
							key={page}>
							<a className="page-link" onClick={() => this.props.handlePagination(page)}>
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
