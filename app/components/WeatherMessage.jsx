const React = require('react');

const WeatherMessage = React.createClass({
    render: function () {
        const { temp, location } = this.props;

        return (
            <h3>It's it {temp} in {location}</h3>
        );
    }
});

module.exports = WeatherMessage;