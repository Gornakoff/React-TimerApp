let React = require('react');
let Navigation = require('Navigation');

let Main = React.createClass({
  render: function () {
    return (
      <div>
        <Navigation/>
        <div className="row">
          <div className="column small-centered medium-6 large-4">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Main;
