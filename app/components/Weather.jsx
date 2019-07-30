const React = require('react');

const WeatherForm = require('WeatherForm')
const WeatherMessage = require('WeatherMessage');
const openWeatherMap = require('openWeatherMap');

const Weather = React.createClass({
    getInitialState: function () {
        return {
            isLoading: false
        }
    },
    handleSearch: function (location) {
        var that = this;

        this.setState({ isLoading: true });

        openWeatherMap.getTemp(location)
            .then(temp => {
                that.setState({
                    location,
                    temp,
                    isLoading: false
                });
            }, errorMessage => {
                that.setState({ isLoading: false });
                alert(errorMessage);
            })
            .catch(err => {
                throw err;
            });
    },
    render: function () {
        const { isLoading, temp, location } = this.state;

        function renderMessage() {
            if (isLoading) {
                return <h3>Fetching weather...</h3>
            } else if (temp && location) {
                return <WeatherMessage temp={temp} location={location} />;
            }
        }

        return (
            <div>
                <h3>Weather component</h3>
                <WeatherForm onSearch={this.handleSearch} />
                {renderMessage()}
            </div>
        );
    }
});

module.exports = Weather;