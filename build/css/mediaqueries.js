var MediaQuery = require('react-responsive');

var A = React.createClass({
  render: function(){
    return (
      <div>
        <div>Device Test!</div>
        <MediaQuery query='(min-device-width: 1224px)'>
          <MediaQuery query='(min-device-width: 1824px)'>
          </MediaQuery>
          <MediaQuery query='(max-width: 1224px)'>
          </MediaQuery>
        </MediaQuery>
        <MediaQuery query='(max-device-width: 1224px)'>
        </MediaQuery>
        <MediaQuery query='(orientation: portrait)'>
        </MediaQuery>
        <MediaQuery query='(orientation: landscape)'>
        </MediaQuery>
        <MediaQuery query='(min-resolution: 2dppx)'>
        </MediaQuery>
      </div>
    );
  }
});