@extends('painel.layout')

@section('content')

    <div class="container-fluid">
        <div class="padded-15">
            <div class="row">
                <div id="votes"></div>
            </div>

            <div class="row">
                <div class="col-lg-6">
                    <div class="col-lg-10">
                        <div class="row">
                            <div id="vote-summary"></div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="padded-7">
                        <div class="box vote">
                            <div class="row">
                                <div class="box-label text-center">
                                    PARTIDOS
                                </div>
                            </div>
                            <div class="row">
                                <div id="parties"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

@stop
