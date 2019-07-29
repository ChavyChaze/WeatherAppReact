const React = require("react");

const WeatherForm = React.createClass({
    render: function () {
        return (
            <div>
                <form>
                    <div>
                        <input type="text" ref="name" placeholder="Enter city name" />
                    </div>
                    <div>
                        <button>Get Weather</button>
                    </div>
                </form>
            </div>
        );
    }
});

module.exports = WeatherForm;