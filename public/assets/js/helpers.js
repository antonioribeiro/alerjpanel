var __getVote = function(congressman)
{
    if (congressman.present == false)
    {
        vote = 'absent';
    }
    else if (congressman.vote == null)
    {
        vote = 'refrained';
    }
    else if (congressman.vote == true)
    {
        vote = 'yes';
    }
    else if (congressman.vote == false)
    {
        vote = 'no';
    }

    return vote;
};
