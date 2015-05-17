var LoadVotesFromServer = function()
{
    jQuery.ajax(
        {
            url: 'http://api.alerj.com/api/v1.0/bills/1/votes',

            dataType: 'json',

            success: function(data)
            {
                EventSystem.fire('data.loaded', { data });
            }.bind(this),

            error: function(xhr, status, err)
            {
                console.error(url, status, err.toString());
            }.bind(this)
        });

    window.setTimeout(LoadVotesFromServer, 500);
};

LoadVotesFromServer();
