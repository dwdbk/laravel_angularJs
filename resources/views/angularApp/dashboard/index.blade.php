@extends('angularApp.layout')
@section('custom-css')
    <link  href="{{ asset('css/dashboard.css') }}" rel="stylesheet"/>
    <style type="text/css">
        .btn{
            height: 34px;
        }
        .col-md-8{
            margin-right: 0px;
            padding-right: 0px;
        }
        .pagination-container{
            text-align: center;
        }
        .input-group .form-control{
            z-index: 0;
        }
    </style>
@endsection
@section('custom-scripts')
    <script type="text/javascript">
        var recherche = "{!! $recherche !!}";
    </script>
@endsection
@section('content')
    <body ng-app="app" ng-controller="dashboardController">
        <div ng-include="'{{ url('angular_app/views/actions-dashboard.tpl.html') }}'"></div>
        <div ng-include="'{{ url('angular_app/views/actions-modals.tpl.html') }}'"></div>
    </body>
@endsection