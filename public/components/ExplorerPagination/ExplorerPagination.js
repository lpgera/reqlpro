var React = require('react');

// Previous Button
var PrevButton = ({
  prevPage,
  table
}) => {
  var prevButton;
  if(table.query.page === 1) {
    prevButton = (
        <button className="btn" disabled onClick={prevPage}>
          <i className="fa fa-arrow-left"></i>
        </button>
    );
  } else {
    prevButton = (
        <button className="btn" onClick={prevPage}>
          <i className="fa fa-arrow-left"></i>
        </button>
    );
  }
  return prevButton;
}

// Next Button
var NextButton = ({
  nextPage,
  table
}) => {
  var nextButton;
  if(table.query.page === Math.ceil(table.size / table.query.limit)) {
    nextButton = (
      <button className="btn" disabled onClick={nextPage}>
        <i className="fa fa-arrow-right"></i>
      </button>
    );
  } else {
    nextButton = (
      <button className="btn" onClick={nextPage}>
        <i className="fa fa-arrow-right"></i>
      </button>
    );
  }
  return nextButton
};

// Pagination Details
var PageDetails = ({
  table
}) => {
  var minDisplaying = (table.query.page - 1) * table.query.limit || 1;
  var maxDisplaying = (table.query.page * table.query.limit) < table.size ? table.query.page * table.query.limit :  table.size;
  var totalRecords = table.size;
  var currentPage = table.query.page;
  var maxPage = Math.ceil(table.size / table.query.limit);
  return (
    <p className="pagination-details">Displaying records {minDisplaying} - {maxDisplaying} of {totalRecords} (Page {currentPage} of {maxPage})</p>
  );
}

// ExplorerPagination Container
var ExplorerPagination = ({
  prevPage,
  nextPage,
  table
}) => {
    return (
      <div className="pull-left">
        <PrevButton table={table} prevPage={prevPage} />
        <PageDetails table={table} />
        <NextButton table={table} nextPage={nextPage} />
      </div>
    );
};

module.exports = ExplorerPagination;