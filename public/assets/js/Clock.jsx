var Clock = React.createClass(
{
    getInitialState: function ()
    {
        return { date: this._getTime() }
    },

    componentDidMount: function()
    {
        setInterval(function ()
        {
            this.setState({ date: this._getTime() });
        }.bind(this), 1 * 1000);
    },

    _getTime: function()
    {
        var today = new Date();

        var h=today.getHours();
        var m=today.getMinutes();
        var s=today.getSeconds();
        m = this._checkTime(m);
        s = this._checkTime(s);

        return h+":"+m+":"+s;
    },

    _checkTime: function(i)
    {
        if (i<10) {i = "0" + i};  // add zero in front of numbers < 10

        return i;
    },

    render: function ()
    {
        return (
            <div>
                { this.state.date }
            </div>
        );
    }
});

React.render(<Clock />, document.getElementById('clock'));
