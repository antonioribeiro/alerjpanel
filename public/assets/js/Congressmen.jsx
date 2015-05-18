var ReactTransitionGroup = React.addons.CSSTransitionGroup;

var Congressmen = React.createClass(
{
    getInitialState: function()
    {
        return {congressmen: []};
    },

    componentDidMount: function()
    {
        EventSystem.listen('data.loaded', this._votesLoaded);
    },

    _votesLoaded: function(data)
    {
        this.setState({congressmen: data.votes});
    },

    render: function()
    {
        var congressmen = this.state.congressmen.map(function (congressman)
        {
            return (
                <Congressman congressman={congressman} key={congressman.id} />
            );
        }, this);

        return (
            <div>{congressmen}</div>
        );
    }
});

var Congressman = React.createClass(
{
    render: function()
    {
        vote = __getVote(this.props.congressman);

        className = "box congressman item col-md-3 vote-" + vote;

        return (
            <ReactTransitionGroup transitionName="example" transitionAppear={true}>
                <div className={className} key={this.props.congressman.id}>
                    { this.props.congressman.name }
                </div>
            </ReactTransitionGroup>
        );
    }
});

React.render(<Congressmen />, document.getElementById('votes'));

