var Deputados = React.createClass({
    getInitialState: function() {
        return {secondsElapsed: 0};
    },

    loadFromServer: function()
    {
        if (this.state.selected.id)
        {
            jQuery.ajax(
                {
                    url: this.props.url + this.state.selected.id,

                    dataType: 'json',

                    success: function(data) {
                        this.setState({data: data.tests});
                    }.bind(this),

                    error: function(xhr, status, err) {
                        console.error(this.props.url, status, err.toString());
                    }.bind(this)
                });
        }
    },

    render: function() {
        return (
            <div>Seconds Elapsed: {this.state.secondsElapsed}</div>
        );
    }
});

React.render(<Deputados />, mountNode);
