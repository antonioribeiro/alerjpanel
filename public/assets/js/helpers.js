var __getVote = function(congressman)
{
    if (congressman.present == false && congressman.vote == null)
    {
        vote = 'absent';
    }
    else if (congressman.present == true && congressman.vote == null)
    {
        vote = 'present';
    }
    else
    {
        vote = congressman.vote;
    }

    return vote;
};
