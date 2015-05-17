var Parties = React.createClass(
{
    getInitialState: function()
    {
        return {parties: []};
    },

    componentDidMount: function()
    {
        EventSystem.listen('data.loaded', this._dataLoaded);
    },

    _dataLoaded: function(data)
    {
        this.setState({parties: data.parties});
    },

    render: function()
    {
        var parties = this.state.parties.map(function (party)
        {
            return (
                <div className="col-lg-2">
                    <div className="party-box party">
                        <div className="row vote-yes text-center">
                            {party.name}
                        </div>
                    </div>
                </div>
            );
        }, this);

        return (
            <div>{parties}</div>
        );
    }
});

React.render(<Parties />, document.getElementById('parties'));
