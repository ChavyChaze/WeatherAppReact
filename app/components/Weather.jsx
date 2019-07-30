const React = require('react');

const WeatherForm = require('WeatherForm')
const WeatherMessage = require('WeatherMessage');
const openWeatherMap = require('openWeatherMap');

const Weather = React.createClass({
    getInitialState: function () {
        return {
            location: 'Miami',
            temp: 33
        }
    },
    handleSearch: function (location) {
        var that = this;

        openWeatherMap.getTemp(location)
            .then(function (temp) {
                that.setState({
                    location,
                    temp
                });
            }, function(errorMessage) {
                alert(errorMessage);
            })
            .catch(err => {
                throw err;
            });
    },
    render: function () {
        const { temp, location } = this.state;

        return (
            <div>
                <h3>Weather component</h3>
                <WeatherForm onSearch={this.handleSearch} />
                <WeatherMessage temp={temp} location={location} />
            </div>
        );
    }
});

module.exports = Weather;