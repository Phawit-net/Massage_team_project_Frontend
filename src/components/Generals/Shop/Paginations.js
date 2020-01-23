import React from 'react';
import { Row} from 'antd';
import styles from "./Paginations.module.css";

class Paginations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pager: {}
    };
  }

  componentWillMount() {
    if (this.props.items && this.props.items.length) {
      this.setPage(this.props.initialPage);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.items !== prevProps.items) {
      this.setPage(this.props.initialPage);
    }
  }

  setPage(page) {
    var { items, pageSize } = this.props;
    var pager = this.state.pager;

    if (page < 1 || page > pager.totalPages) {
      return;
    }

    pager = this.getPager(items.length, page, pageSize);

    var pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);

    this.setState({
      pager: pager
    });

    this.props.onChangePage(pageOfItems);
  }

  getPager(totalItems, currentPage, pageSize) {
    currentPage = currentPage || 1;

    pageSize = pageSize;

    var totalPages = Math.ceil(totalItems / pageSize);

    var startPage, endPage;
    if (totalPages <= 5) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= 3) {
        startPage = 1;
        endPage = 5;
      } else if (currentPage + 4 >= totalPages) {
        startPage = totalPages - 4;
        endPage = totalPages;
      } else {
        startPage = currentPage - 2;
        endPage = currentPage + 2;
      }
    }
    var startIndex = (currentPage - 1) * pageSize;
    var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
    var pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i);

    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
    };
  }

  render() {
    var pager = this.state.pager;

    if (!pager.pages || pager.pages.length < 1) {
      return null;
    }

    return (
      <Row type='flex' justify="center" align='middle'>
        <div >
          <a className={styles.font} onClick={() => this.setPage(1)}>First</a>
        </div>
        {/* <li className={pager.currentPage === 1 ? 'disabled' : ''}> */}
        <div style={{ width: '60px', height: '60px', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <a className ={styles.page} onClick={() => this.setPage(pager.currentPage - 1)}>
            <img src='previous.png' style={{ width: '30px', height: '40px' }} />
          </a>
        </div>
        {/* </li> */}
        {pager.pages.map((page, index) =>
          <div style={{ width: '60px', height: '60px', position: 'relative', margin: '0px 5px' }}>
            <a onClick={() => this.setPage(page)}>
              <img src='page.png' style={{ width: '60px', height: '60px' }} />
              {/* <li key={index} className={pager.currentPage === page ? 'active' : ''}>                      */}
              <div style={{ width: '60px', height: '60px', position: 'absolute', top: '0px', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className={styles.numFont}>{page}</div>
              {/* </li> */}
            </a>
          </div>

        )}
        {/* <li className={pager.currentPage === pager.totalPages ? 'disabled' : ''}> */}
        <div style={{ width: '60px', height: '60px', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <a className ={styles.page} onClick={() => this.setPage(pager.currentPage + 1)}>
            <img src='next.png' style={{ width: '30px', height: '40px' }} />
          </a>
        </div>
        {/* </li> */}
        <div>
          <a className={styles.font} onClick={() => this.setPage(pager.totalPages)}>Last</a>
        </div>
      </Row>
    );
  }
}

// Pagination.propTypes = propTypes;
// Pagination.defaultProps = defaultProps;
export default Paginations;
