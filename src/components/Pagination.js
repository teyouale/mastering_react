import React, { Component } from 'react';

class Pagination extends Component {
  render() {
    return (
      <nav aria-label='Page navigation example' classNameName='m-4'>
        <ul className='pagination'>
          <li className='page-item'>
            <a
              className='page-link'
              onClick={() => this.props.handlePagination(1)}
            >
              1
            </a>
          </li>
          <li className='page-item'>
            <a
              className='page-link'
              onClick={() => this.props.handlePagination(2)}
            >
              2
            </a>
          </li>
          <li className='page-item'>
            <a
              className='page-link'
              onClick={() => this.props.handlePagination(3)}
            >
              3
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Pagination;
