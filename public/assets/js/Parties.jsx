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
            if (party.yes > party.no && party.yes > party.absent && party.yes > party.refrained && party.yes > party.notvoted)
            {
                vote = 'yes';
            }
            else if (party.no > party.yes && party.no > party.absent && party.no > party.refrained && party.no > party.notvoted)
            {
                vote = 'no';
            }
            else if (party.refrained > party.yes && party.refrained > party.no && party.refrained > party.absent && party.refrained > party.notvoted)
            {
                vote = 'refrained';
            }
            else if (party.notvoted > party.yes && party.notvoted > party.no && party.notvoted > party.refrained && party.notvoted > party.absent)
            {
                vote = 'present';
            }
            else
            {
                vote = 'absent';
            }

            className = "row vote-"+vote+" text-center";
            name = party.name == 'Solidariedade' ? 'SDD' : party.name;

            return (
                <div className="col-lg-2">
                    <div className="party-box party">
                        <div className={ className }>
                            { name }
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
