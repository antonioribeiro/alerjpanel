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
        var present = 0;
        var notvoted = 0;

        this.state.votes.map(function (vote)
        {
            vote = __getVote(vote);

            yes += vote == 'yes' ? 1 : 0;
            no += vote == 'no' ? 1 : 0;
            refrained += vote == 'refrained' ? 1 : 0;
            absent += vote == 'absent' ? 1 : 0;
            present += vote !== 'absent' ? 1 : 0;
            notvoted += vote == 'present' ? 1 : 0;
        }, this);

        return (
            <div>
                { this._renderVote('SIM', 'yes', yes) }
                { this._renderVote('NÃO', 'no', no) }
                { this._renderVote('ABSTENÇÕES', 'refrained', refrained) }
                { this._renderVote('TOTAL', 'total', yes+no+refrained) }
                { this._renderVote('NÃO VOTARAM', 'present', notvoted) }
                { this._renderVote('PRESENTES', 'present', present) }
                { this._renderVote('AUSENTES', 'absent', absent) }
                { this._renderVote('TOTAL', 'total', present + absent) }
            </div>
        );
    }
});

React.render(<VoteSummary />, document.getElementById('vote-summary'));
