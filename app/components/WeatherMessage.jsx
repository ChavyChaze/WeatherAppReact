const React = require('react');

const WeatherMessage = (props) => {
    const { temp, location } = props;

    return (
        <h3>It's it {temp} in {location}</h3>
    );
};

module.exports = WeatherMessage;