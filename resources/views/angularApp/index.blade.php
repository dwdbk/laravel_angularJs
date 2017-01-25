<!DOCTYPE html>
<!--[if lt IE 7]>
<html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>
<html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>
<html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!-->
<html lang="fr" ng-app="app" class="no-js">
<!--<![endif]-->
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>AngularJs - App</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width">


    <link rel="stylesheet" href="{{ asset('angularjs_app/assets/css/bootstrap.css') }}">
    <link rel="stylesheet" href="{{ asset('angularjs_app/assets/css/main.css') }}">
    <link rel="stylesheet" href="{{ asset('angularjs_app/assets/fonts/font-awesome/css/font-awesome.css') }}">

    <script src="{{ asset('bower_components/jquery/dist/jquery.js') }}"></script>
{{--    <script src="{{ asset('bower_components/angular-datatables/dist/angular-datatables.js') }}"></script>--}}
{{--    <script src="{{ asset('bower_components/angular-datatables/dist/angular-datatables.directive.js') }}"></script>--}}


    <!-- Here we load AngularJS and the AngularJS resource component -->
    <script src="{{ asset('bower_components/angular/angular.js') }}"></script>
    <script src="{{ asset('bower_components/angular-animate/angular-animate.min.js') }}" data-semver="1.4.5"></script>
    <script src="{{ asset('bower_components/angular-route/angular-route.js') }}"></script>
    <script src="{{ asset('bower_components/angular-cookies/angular-cookies.js') }}"></script>
    <script src="{{ asset('bower_components/angular-sanitize/angular-sanitize.js') }}"></script>
    <script src="{{ asset('bower_components/angular-resource/angular-resource.js') }}"></script>
    <script src="{{ asset('bower_components/angular-aria/angular-aria.js') }}"></script>
    <script src="{{ asset('bower_components/angular-animate/angular-animate.js') }}"></script>
    <script src="{{ asset('bower_components/angular-material/angular-material.js') }}"></script>
    <script src="{{ asset('bower_components/angular-messages/angular-messages.js') }}"></script>
    <script src="{{ asset('bower_components/angular-local-storage/dist/angular-local-storage.js') }}"></script>

    <script src="{{ asset('bower_components/underscore/underscore.js') }}"></script>
    <script src="{{ asset('bower_components/angular-ui-router/release/angular-ui-router.js') }}"></script>
    <script src="{{ asset('bower_components/angular-translate/angular-translate.js') }}"></script>

    <script src="{{ asset('bower_components/moment/moment.js') }}"></script>
<!--<script src="{{ asset('bower_components/moment/locale/fr.js') }}"></script>-->
<!--<script src="{{ asset('bower_components/moment/src/lib/units/timezone.js') }}"></script>-->
    <script src="{{ asset('bower_components/angular-moment/angular-moment.js') }}"></script>
    <script src="{{ asset('bower_components/moment-timezone/builds/moment-timezone-with-data.js') }}"></script>
    <script src="{{ asset('bower_components/angular-underscore-module/angular-underscore-module.js') }}"></script>
    <!--Chosen-->
    <script src="{{ asset('bower_components/chosen/chosen.jquery.js') }}"></script>
    <script src="{{ asset('bower_components/angular-chosen-localytics/dist/angular-chosen.min.js') }}"></script>


    <script src="{{ asset('angularjs_app/app/app.js') }}"></script>
    <script src="{{ asset('angularjs_app/app/login/login.js') }}"></script>
    <script src="{{ asset('angularjs_app/app/home/home.js') }}"></script>
    <script src="{{ asset('angularjs_app/app/administration/administration.js') }}"></script>
    <script src="{{ asset('angularjs_app/app/suivi_achats/achats/achats.js') }}"></script>
    <script src="{{ asset('angularjs_app/app/suivi_achats/achats_be/achats_be.js') }}"></script>
    <script src="{{ asset('angularjs_app/app/suivi_achats/caisse_be/caisse_be.js') }}"></script>
    <script src="{{ asset('angularjs_app/app/suivi_achats/caisse_ops/caisse_ops.js') }}"></script>
    <script src="{{ asset('angularjs_app/app/suivi_achats/reglement/reglement.js') }}"></script>
    <script src="{{ asset('angularjs_app/app/parametrage/fournisseurs/fournisseurs.js') }}"></script>
    <script src="{{ asset('angularjs_app/app/parametrage/ordonnateurs/ordonnateurs.js') }}"></script>
    <script src="{{ asset('angularjs_app/app/parametrage/utilisateurs/utilisateurs.js') }}"></script>
    <script src="{{ asset('angularjs_app/app/parametrage/acheteurs/acheteurs.js') }}"></script>
    <script src="{{ asset('angularjs_app/app/parametrage/mode_paiement/mode_paiement.js') }}"></script>
    <script src="{{ asset('angularjs_app/app/parametrage/parametrages/parametrages.js') }}"></script>
    <script src="{{ asset('angularjs_app/app/parametrage/impayes/impayes.js') }}"></script>
    <script src="{{ asset('angularjs_app/app/administration/administration.js') }}"></script>
    <script src="{{ asset('angularjs_app/app/administration/profils/profils.js') }}"></script>
    <script src="{{ asset('angularjs_app/app/administration/habilitations/habilitations.js') }}"></script>
    <script src="{{ asset('angularjs_app/app/administration/traces/traces.js') }}"></script>


    <!-- Test -->
    <script src="{{ asset('angularjs_app/app/test.js') }}"></script>

    <!-- Services -->
    <script src="{{ asset('angularjs_app/js/bootstrap.js') }}"></script>
    <!--  assets -->
    <script src="{{ asset('angularjs_app/assets/services/bootstrap.js') }}"></script>
    <!--  applicatifs -->
    <script src="{{ asset('angularjs_app/app/services/user_service.js') }}"></script>
    <script src="{{ asset('angularjs_app/app/services/acheteur_service.js') }}"></script>

</head>

<body ng-controller="bodyController">
<div class="main-container">
    <aside>
        <div ng-include="'{{ url('angularjs_app/app/menu/menu.html') }}'"></div>
    </aside>
    <section class="container" ng-view>
    </section>
</div>
</body>
</html>
