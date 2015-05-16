var packeryOptions =
{
    isHorizontal: true,
    itemSelector: '.item',
};

var PackeryMixin = PackeryMixin();

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

    mixins: [PackeryMixin('packeryContainer', packeryOptions)],

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
            <div ref="packeryContainer">{congressmen}</div>
        );
    }
});

var Congressman = React.createClass(
{
    render: function()
    {
        return (
            <div>
                <div className="wrapper item vote-yes">
                    { this.props.congressman.name }
                </div>
            </div>
        );
    }
});

React.render(<Congressmen />, document.getElementById('votes'));
