@extends('painel.layout')

@section('content')

    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-10 bill">
                <div class="padded-7">
                    <div class="box">
                        <div class="row">
                            <div class="box-label padded-20">
                                VETO TOTAL APOSTO AO PROJETO DE LEI Nº 2043-A/2013, DE AUTORIA DO DEPUTADO SAMUEL MALAFAIA, QUE TORNA OBRIGATÓRIA A DIVULGAÇÃO DO SERVIÇO VIVA VOZ 132 DO GOVERNO FEDERAL, QUE ORIENTA E INFORMA SOBRE A PREVENÇÃO E O USO DE DROGAS.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-2">
                <div class="padded-7">
                    <div class="box clock">
                        <div class="row">
                            <div class="box-label text-right padded-20">
                                <div id="clock"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="padded-15">
            <div class="row">
                <div id="votes"></div>
            </div>

            <div class="row">&nbsp;</div>
            <div class="row">&nbsp;</div>
            <div class="row">&nbsp;</div>

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
