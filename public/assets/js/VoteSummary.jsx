var VoteSummary = React.createClass(
{
    getInitialState: function()
    {
        return {votes: []};
    },

    componentDidMount: function()
    {
        EventSystem.listen('data.loaded', this._dataLoaded);
    },

    _dataLoaded: function(data)
    {
        this.setState({votes: data.votes});
    },

    _renderVote: function(caption, className, vote)
    {
        className = "vote-"+className+" text-center";

        return (
            <div className="padded-7 col-lg-3">
                <div className="box vote">
                    <div className="row">
                        <div className="box-label text-center">
                            { caption }
                        </div>
                    </div>
                    <div className="row">
                        <div className={ className }>
                            { vote }
                        </div>
                    </div>
                </div>
            </div>
        )
    },

    render: function()
    {
        var yes = 0;
        var no = 0;
        var absent = 0;
        var refrained = 0;

        this.state.votes.map(function (vote)
        {
            vote = __getVote(vote);

            yes += vote == 'yes' ? 1 : 0;
            no += vote == 'no' ? 1 : 0;
            refrained += vote == 'refrained' ? 1 : 0;
            absent += vote == 'absent' ? 1 : 0;
        }, this);

        return (
            <div>
                { this._renderVote('SIM', 'yes', yes) }
                { this._renderVote('NAO', 'no', no) }
                { this._renderVote('ABSTENCOES', 'refrained', refrained) }
                { this._renderVote('AUSENCIAS', 'absent', absent) }
            </div>
        );
    }
});

React.render(<VoteSummary />, document.getElementById('vote-summary'));
