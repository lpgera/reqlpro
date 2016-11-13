import React from 'react';
import Favorite from '../Favorite/Favorite';
import AddFavorite from '../AddFavorite/AddFavorite';
import {connect} from 'react-redux';
import {getDbConnection} from '../../core';


const Favorites = ({
  connections,
  selectedConnection,
  onConnectionClick,
  onClickAddConnection
}) => {

  selectedConnection = selectedConnection || {};

  // console.log("selectedConnection", selectedConnection)

  const favoriteNodes = connections.map((connection, i) => {
    return (
      <Favorite
        key={i}
        {...connection}
        active={selectedConnection.index === connection.index}
        onConnectionClick={() => {onConnectionClick(connection)}}
      />
    );
  });

  return (
    <div className="fav-content-col">
      {favoriteNodes}
      <AddFavorite addFavorite={() => onClickAddConnection()} />
    </div>
  );

};

function mapStateToProps (state) {
  // console.log('Favorites state', state.main)
  // console.log("state.main.connections", state.main.connections)
  return {
    connections: state.main.connections || [],
    // connections: state.main.connections ? state.main.connections : [],
    selectedConnection: state.main.selectedConnection || null
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClickAddConnection: (favorite) => {
      dispatch({
        type: "SHOW_CONNECTION_FORM",
        mode: 'NEW'
      });
    },
    // onConnectionClick: (connection) => {
    //   console.log("    $%^&*&^% onConnectionClick connection", connection)
    //   getConnection(dispatch, connection);
    // },
    onConnectionClick: (connection) => {
      dispatch({
        type: "CONNECT_TO_DB",
        connection
      });
    }
  }
};

const FavoritesContainer = connect(mapStateToProps, mapDispatchToProps)(Favorites);

module.exports = FavoritesContainer;
