@extends('painel.layout')

@section('content')

    <div class="container-fluid">
        <div class="row">
            <div id="votes"></div>
        </div>

        <div class="row">
            <div class="col-lg-6">
                <div class="col-lg-10 col-md-offset-1">
                    <div class="row">
                        <div class="padded-7 col-lg-3">
                            <div class="box vote">
                                <div class="row">
                                    <div class="box-label text-center">
                                        SIM
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="vote-yes text-center">
                                        {{ rand(0,70) }}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="padded-7 col-lg-3">
                            <div class="box vote">
                                <div class="row">
                                    <div class="box-label text-center">
                                        NAO
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="vote-no text-center">
                                        {{ rand(0,70) }}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="padded-7 col-lg-3">
                            <div class="box vote">
                                <div class="row">
                                    <div class="box-label text-center">
                                        ABSTENCOES
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="vote-refrained text-center">
                                        {{ rand(0,70) }}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="padded-7 col-lg-3">
                            <div class="box vote">
                                <div class="row">
                                    <div class="box-label text-center">
                                        AUSENCIAS
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="vote-absent text-center">
                                        {{ rand(0,70) }}
                                    </div>
                                </div>
                            </div>
                        </div>
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

@stop
