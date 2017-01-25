<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>AngularJs - App</title>

    <script type="text/javascript">
        var config = {!! json_encode(array_merge(config('cerise'), config('coeur'))) !!} ;
        var webSocketPort = "{!! $pullPort !!}";
        var webSocketHost = window.location.hostname;
        var user = {!! Auth::user()->id !!};
    </script>

    @yield('custom-scripts')
    <!-- Scripts -->
    <script src="{{ asset('js/lib/jquery-1.11.3.min.js') }}"></script>
    <script src="{{ asset('js/lib/jquery-ui.min.js') }}"></script>
    <script src="{{ asset('js/lib/bootstrap.min.js') }}"></script>
    <script src="{{ asset('js/lib/jquery-ui-month-picker.js') }}"></script>
    <script src="{{ asset('/js/main.js') }}"></script>

    <link href="{{ asset('css/lib/jquery-ui.structure.min.css') }}" rel="stylesheet"/>
    <link href="{{ asset('css/lib/jquery-ui.datepicker.css') }}" rel="stylesheet"/>
    <link href="{{ asset('css/lib/jquery-ui.monthpicker.css') }}" rel="stylesheet"/>
    <!--link href="{{ asset('css/lib/jquery-ui.theme.min.css') }}" rel="stylesheet"/-->
    <link href="{{ asset('angular_app/bower_components/chosen/chosen.css') }}" rel="stylesheet">
    <link href="{{ asset('angular_app/bower_components/angular-chosen-localytics/chosen-spinner.css') }}" rel="stylesheet">

    <script src="{{ asset('angular_app/bower_components/angular/angular.js') }}"></script>
    <script src="{{ asset('angular_app/bower_components/angular-route/angular-route.min.js') }}"></script>
    <script src="{{ asset('angular_app/bower_components/angular-resource/angular-resource.js') }}"></script>
    <script src="{{ asset('angular_app/bower_components/angular-cookies/angular-cookies.js') }}"></script>
    <script src="{{ asset('angular_app/bower_components/angular-sanitize/angular-sanitize.js') }}"></script>
    <script src="{{ asset('angular_app/bower_components/ngstorage/ngStorage.min.js') }}"></script>
    <script src="{{ asset('angular_app/bower_components/angular-filter/dist/angular-filter.js') }}"></script>
    <script src="{{ asset('angular_app/bower_components/moment/moment.js') }}"></script>
    <script src="{{ asset('angular_app/bower_components/moment/locale/fr.js') }}"></script>
    <script src="{{ asset('angular_app/bower_components/moment-range/dist/moment-range.min.js') }}"></script>
    <script src="{{ asset('angular_app/bower_components/angular-moment/angular-moment.min.js') }}"></script>
    <script src="{{ asset('angular_app/bower_components/underscore/underscore.js') }}"></script>
    <!--bootstrap-->
    <link href="{{ asset('angular_app/bower_components/angular-bootstrap/ui-bootstrap-csp.css') }}" rel="stylesheet"/>
    <link href="{{ asset('css/bootstrap.css') }}" rel="stylesheet"/>

    <script src="{{ asset('angular_app/bower_components/angular-bootstrap/ui-bootstrap.min.js') }}"></script>
    <script src="{{ asset('angular_app/bower_components/angular-bootstrap/ui-bootstrap-tpls.js') }}"></script>

    <!--Chosen-->
    <script src="{{ asset('angular_app/bower_components/chosen/chosen.jquery.js') }}"></script>
    <script src="{{ asset('angular_app/bower_components/angular-chosen-localytics/dist/angular-chosen.min.js') }}"></script>

    <!--ui-mask-->
    <script src="{{asset('angular_app/bower_components/jquery.maskedinput/dist/jquery.maskedinput.js')}}"></script>
    <script src="{{asset('angular_app/bower_components/angular-ui-mask/dist/mask.js')}}"></script>

    <!-- AutobahnJS -->
    <script src="{{ asset('angular_app/services/autobahn.min.js') }}"></script>

    <!-- AngularWAMP -->
    <script src="{{ asset('angular_app/services/autobahn-service.js') }}"></script>

    <script src="{{ asset('angular_app/env-config.js') }}"></script>
    <script src="{{ asset('angular_app/app-config.js') }}"></script>
    <script src="{{ asset('angular_app/app.js') }}"></script>
    <script src="{{ asset('angular_app/filters/filtre.js') }}"></script>
    <script src="{{ asset('angular_app/controllers/dashboardController.js') }}"></script>
    <script src="{{ asset('angular_app/controllers/actionController.js') }}"></script>
    <script src="{{ asset('angular_app/services/rest-services.js') }}"></script>
    <script src="{{ asset('angular_app/services/notification.js') }}"></script>
    <script src="{{ asset('angular_app/services/underscore-service.js') }}"></script>
    <script src="{{ asset('angular_app/directives/datePickerDirective.js') }}"></script>
    <script src="{{ asset('angular_app/directives/forwardDirective.js') }}"></script>
    <script src="{{ asset('angular_app/directives/monthPickerDirective.js') }}"></script>
    <script src="{{ asset('angular_app/directives/paginationDirective.js') }}"></script>
    <script src="{{ asset('angular_app/directives/hoverDirective.js') }}"></script>
    <script src="{{ asset('angular_app/directives/fixedHeaderDirective.js') }}"></script>
    <script src="{{ asset('angular_app/directives/fileModelDirective.js') }}"></script>
    <script src="{{ asset('angular_app/directives/convertToNumber.js') }}"></script>
    <script src="{{ asset('angular_app/directives/relationTypeDirective.js') }}"></script>

    <link href="{{ asset('angular_app/bower_components/ng-wig/dist/css/ng-wig.css') }}" rel="stylesheet"/>
    <script src="{{ asset('angular_app/bower_components/ng-wig/dist/ng-wig.min.js') }}"></script>


    <link href="{{ asset('css/nav.css') }}" rel="stylesheet"/>
    <link href="{{ asset('css/table.css') }}" rel="stylesheet"/>
    <link href="{{ asset('css/form.css') }}" rel="stylesheet"/>
    <link href="{{ asset('css/modals.css') }}" rel="stylesheet"/>
    <link href="{{ asset('css/marqueur.css') }}" rel="stylesheet"/>
    <link href="{{ asset('css/fonts.css') }}" rel="stylesheet"/>
    <link href="{{ asset('css/app.css') }}" rel="stylesheet"/>
    <link href="{{ asset('css/cerise.css') }}" rel="stylesheet"/>
    <link href="{{ asset('css/actions-calendrier.css') }}" rel="stylesheet"/>
    <link href="{{ asset('css/popin.css') }}" rel="stylesheet"/>
    @yield('custom-css')
</head>

@if (Auth::user())
    @include('menu')
@endif

@yield('content')


</html>