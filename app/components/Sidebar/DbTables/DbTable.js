import React from'react';
import { connect } from 'react-redux';
import { queryTable } from '../../../actions';

const DbTable = ({
  dbConnection,
  selectedTable,
  table,
  database,
  onTableClick,
  deleteTable
}) => {
  return (
    <div onClick={() => onTableClick(dbConnection, database.name, table, selectedTable)}
         className={"db-table " + (selectedTable && (selectedTable.name === table) ? 'selected' : '')}>
      <div>
        <i className="fa fa-table"/> {table}
        <div className="delete-table btn-group" role="group">
          <button onClick={(e) => deleteTable(e, database, table)} className="btn btn-default fa fa-trash"/>
          {/*<button onClick={this.editDatabase.bind(this, this.props.database.name)} className="btn btn-default fa fa-pencil"></button>*!/*/}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    dbConnection: state.main.dbConnection,
    selectedTable: state.selectedTable || null
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTableClick: (dbConnection, databaseName, tableName, selectedTable) => {
      dispatch({
        type: "SET_SELECTED_TABLE",
        databaseName,
        tableName
      });
      if (selectedTable && selectedTable.name == tableName) {
        dispatch(queryTable(dbConnection, databaseName, tableName, selectedTable.query));
      } else {
        dispatch(queryTable(dbConnection, databaseName, tableName));
      }
      // dispatch(getTableSize(dbConnection, databaseName, tableName));
    },
    deleteTable: (e, database, table) => {
      e.stopPropagation();
      dispatch({
        type: "TOGGLE_DELETE_TABLE_FORM",
        tableToDelete: table,
        database,
        showDeleteTableForm: true
      });
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(DbTable);
