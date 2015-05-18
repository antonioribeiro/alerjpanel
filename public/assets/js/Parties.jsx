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
            if (party.yes > party.no && party.yes > party.absent && party.yes > party.restrained)
            {
                vote = 'yes';
            }
            else if (party.no > party.yes && party.no > party.absent && party.no > party.restrained)
            {
                vote = 'no';
            }
            else if (party.restrained > party.yes && party.restrained > party.no && party.restrained > party.absent)
            {
                vote = 'refrained';
            }
            else
            {
                vote = 'absent';
            }

            className = "row vote-"+vote+" text-center";

            return (
                <div className="col-lg-2">
                    <div className="party-box party">
                        <div className={className}>
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
