@extends('painel.layout')

@section('content')

    <div class="columnize" id="votes">

    </div>

    <br><br>

    {{--@foreach($congressmen as $congressman)--}}
        {{--<div class="wrapper item vote-{{ ['yes', 'no', 'absent'][rand(0,2)] }}">--}}
            {{--{{ $congressman->name }}--}}
        {{--</div>--}}
    {{--@endforeach--}}

    <div class="rowlize">
        <div class="wrapper item right">
            Sim
        </div>
        <div class="wrapper item vote-yes">
            {{ rand(0,70) }}
        </div>

        <div class="wrapper item right">
            Nao
        </div>

        <div class="wrapper item vote-no">
            {{ rand(0,70) }}
        </div>
    <div>

@stop

