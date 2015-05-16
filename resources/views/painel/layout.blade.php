<html>
    <head>
        <meta charset="UTF-8">

        <title>Laravel</title>

        <link href='assets/css/main.css' rel='stylesheet' type='text/css'>
    </head>

    <body>
        <div class="container">
            @yield('content')
        </div>

        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>

        {{--<script src="http://isotope.metafizzy.co/isotope.pkgd.js"></script>--}}
        {{--<script src="https://rawgit.com/metafizzy/isotope-masonry-horizontal/master/masonry-horizontal.js"></script>--}}

        <script src="http://packery.metafizzy.co/packery.pkgd.min.js"></script>

        <script src="https://facebook.github.io/react/js/react.js"></script>
        <script src="https://facebook.github.io/react/js/JSXTransformer.js"></script>

        {{--<script type="text/javascript">--}}
            {{--var masonryCongressmen = new Packery( '.columnize',--}}
            {{--{--}}
                    {{--itemSelector: '.item',--}}
                    {{--isHorizontal: true--}}
            {{--});--}}

            {{--var masonryData = new Packery( '.rowlize',--}}
            {{--{--}}
                {{--itemSelector: '.item',--}}
            {{--});--}}
        {{--</script>--}}

        <script type="text/jsx" src="assets/js/PackeryMixin.js"></script>
        <script type="text/jsx" src="assets/js/app.jsx"></script>

    </body>
</html>
