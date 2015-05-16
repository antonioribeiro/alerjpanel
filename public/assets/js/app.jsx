var Congressmen = React.createClass(
{
    getInitialState: function()
    {
        return {congressmen: []};
    },

    componentDidMount: function()
    {
        this._loadFromServer();
    },

    _loadFromServer: function()
    {
        jQuery.ajax(
        {
            url: 'http://api.alerj.com/api/v1.0/bills/1/votes',

            dataType: 'json',

            success: function(data)
            {
                this.setState({congressmen: data});
            }.bind(this),

            error: function(xhr, status, err)
            {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });

        window.setTimeout(this._loadFromServer, 500);
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
            <div className="row">{congressmen}</div>
        );
    }
});

var Congressman = React.createClass(
{
    render: function()
    {
        if (this.props.congressman.vote == true)
        {
            vote = 'yes';
        }
        else if (this.props.congressman.vote == false)
        {
            vote = 'no';
        }
        else
        {
            vote = 'absent';
        }

        return (
            <div>
                <div className={"wrapper item col-md-3 vote-" + vote}>
                    { this.props.congressman.name }
                </div>
            </div>
        );
    }
});

React.render(<Congressmen />, document.getElementById('votes'));
