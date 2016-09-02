const React = require('react');
const Sidebar = require('../Sidebar/Sidebar');
const Explorer = require('../Explorer/Explorer');
const ConnectionForm = require('../ConnectionForm/ConnectionForm');
const EntityForm = require('../EntityForm/EntityForm');
const ConfirmRowDelete = require('../ConfirmRowDelete/ConfirmRowDelete');
const EmailIntroContainer = require('../EmailIntro/EmailIntro');

const App = React.createClass({
  getInitialState: function() {
    return this.context.store;
  },
  componentDidMount: function() {
    // this.setupEvents();
    this.resizeTimeoutFunction = () => {
      this.resizeTimeout = setTimeout(() => {
        this.forceUpdate();
      }, 100);
    }
    window.onresize = () => {
      clearTimeout(this.resizeTimeout)
      this.resizeTimeoutFunction();
    }
  },
  componentWillUnmount: function() {
    window.onresize = null;
  },
  setupEvents: function() {

    // Event for toggling connection form
    this.state.on('showConnectionForm', () => {
      this.forceUpdate();
    });
    this.state.on('hideConnectionForm', () => {
      this.forceUpdate();
    });

    this.state.on('toggleEntityForm', () => {
      this.forceUpdate();
    });

    // Event for updating selected favorite
    this.state.on('updateRehinkDbClient', () => {
      this.forceUpdate();
    });
  },
  render: function() {
              // <Sidebar  />
          // <Explorer />
          // <ConnectionForm />
          // <EntityForm />
          // <ConfirmRowDelete />
    return (
        <div className="content-wrapper">
          <EmailIntroContainer />
        </div>
    );
  }
});
App.contextTypes = {
  store: React.PropTypes.object
};

module.exports = App;
