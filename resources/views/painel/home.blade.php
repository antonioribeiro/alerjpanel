@extends('painel.layout')

@section('content')

    <div class="content">
        <div class="columnize" id="votes">

        </div>

        <br><br>

        {{--@foreach($congressmen as $congressman)--}}
            {{--<div class="wrapper item vote-{{ ['yes', 'no', 'absent'][rand(0,2)] }}">--}}
                {{--{{ $congressman->name }}--}}
            {{--</div>--}}
        {{--@endforeach--}}

        <div class="rowlize row">
            <div class="result col-md-2 right">
                Sim
            </div>
            <div class="result col-md-2 vote-yes">
                {{ rand(0,70) }}
            </div>

            <div class="result col-md-2 right">
                Nao
            </div>

            <div class="result col-md-2 vote-no">
                {{ rand(0,70) }}
            </div>
        <div>
    </div>

@stop

