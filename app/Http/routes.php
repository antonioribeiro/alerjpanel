<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

use App\Entities\Congressman;

Route::get('/', function ()
{
    $congressmen = Congressman::orderBy('name')->get();

    return view('painel.home')->with('congressmen', $congressmen);
});
