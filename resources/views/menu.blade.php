<nav class="navbar navbar-default navbar-fixed-top">
    <div class="container-fluid">
        <div class="navbar-header logo">
            <a class="navbar-brand" href="{{ url('/') }}">
                <img alt="cerise" src="{{ asset('img/logo.png')}}">
            </a>
        </div>

        <ul class="nav navbar-nav navbar-right">
            
            <!-- COEUR -->
            @if (strpos(Request::url(), url('coeur')) === 0)
                <li><a href="{{ url('/') }}" {!! Request::url() == url('coeur') ? 'class="menu-selected-item"' : '' !!}>Accueil</a></li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                        BQE <span class="caret"></span>
                    </a>
                    <ul class="dropdown-menu" role="menu">
                        @if (Auth::user()->can(route('coeur.etablissements.index'), 'GET'))
                            <li><a href="{!! route('coeur.etablissements.index') !!}" {!! strpos(Request::url(), route('coeur.etablissements.index')) === 0 ? 'class="menu-selected-item"' : '' !!}>Établissements</a></li>
                        @endif
                    </ul>
                </li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                        URBA <span class="caret"></span>
                    </a>
                    <ul class="dropdown-menu" role="menu">
                        @if (Auth::user()->can(route('coeur.annuaire.index'), 'GET'))
                            <li><a href="{!! route('coeur.annuaire.index') !!}" {!! strpos(Request::url(), route('coeur.annuaire.index')) === 0 ? 'class="menu-selected-item"' : '' !!}>Annuaire</a></li>
                        @endif
                    </ul>
                </li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                        Administration <span class="caret"></span>
                    </a>
                    <ul class="dropdown-menu" role="menu">
                        @if (Auth::user()->can(route('coeur.admin.users.index'), 'GET'))
                            <li><a href="{!! route('coeur.admin.users.index') !!}" {!! strpos(Request::url(), url('coeur/admin')) === 0 ? 'class="menu-selected-item"' : '' !!}>Gestion des droits</a></li>
                        @endif
                        @if (Auth::user()->can(route('coeur.tables.index'), 'GET'))
                            <li><a href="{!! route('coeur.tables.index') !!}" {!! strpos(Request::url(), route('coeur.tables.index')) === 0 ? 'class="menu-selected-item"' : '' !!}>Visualiser les tables (SQL)</a></li>
                        @endif
                        @if (Auth::user()->can(route('coeur.journal.index'), 'GET'))
                            <li><a href="{!! route('coeur.journal.index') !!}" {!! strpos(Request::url(), route('coeur.journal.index')) === 0 ? 'class="menu-selected-item"' : '' !!}>Journal des visites</a></li>
                        @endif
                     </ul>
                </li>
            @endif


            <!-- CERISE -->
            @if (strpos(Request::url(), url('cerise')) === 0)
                <li><a href="{!! url('/cerise/dashboard') !!}" {!! Request::url()==url('/cerise/dashboard') ? 'class="menu-selected-item"' : '' !!}>Accueil</a></li>
                @foreach(config('coeur.types_etablissements') as $key => $typeEtablissement)
                    <li><a href="{!! url('/cerise/actions/'.$typeEtablissement['strtr']) !!}" {!! (isset($typeEtablissementId)) && ($key == $typeEtablissementId) ? 'class="menu-selected-item"' : '' !!}>{!! $typeEtablissement['pluriel'] !!}</a></li>
                @endforeach
            @endif


            <!-- OPAM -->
            @if (strpos(Request::url(), url('opam')) === 0)
                <li><a href="{!! url('/opam/dashboard') !!}" {!! strpos(Request::url(), route('opam.dashboard.index')) === 0 ? 'class="active"' : '' !!}>Accueil</a></li>
                <li><a href="{!! url('/opam/projets') !!}" {!! strpos(Request::url(), route('opam.projets.index')) === 0 ? 'class="active"' : '' !!}>Projets</a></li>
                <li><a href="#" {!! strpos(Request::url(), 'xxx' === 0) ? 'class="active"' : '' !!}>Documents</a></li>
                <li><a href="#" {!! strpos(Request::url(), 'xxx' === 0) ? 'class="active' : '' !!}>Glossaire</a></li>

            @endif


            <!-- TOUJOURS AFFICHE -->
            <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                    <img class="loginicn" src="{!! asset('img/profile_icn.png') !!}"/>
                    <span class="caret"></span>
                </a>
                <ul class="dropdown-menu" role="menu">
                    <li><a href="{!! url('/coeur/preferences/cerise') !!}">Préférences Cerise</a></li>
                </ul>
            </li>
            <li class="dropdown">
                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                    @if (strpos(Request::url(), url('coeur')) === 0)
                        EVASION
                    @elseif (strpos(Request::url(), url('cerise')) === 0)
                        CERISE
                    @elseif (strpos(Request::url(), url('opam')) === 0)
                        OPAM
                    @endif
                    <span class="caret"></span></a>
                <ul class="dropdown-menu" role="menu">
                    @if (Auth::user()->can(url('coeur'), 'GET') && strpos(Request::url(), url('coeur')) !== 0)
                        <li><a href="{{ url('coeur') }}">Evasion</a></li>
                    @endif
                    @if (Auth::user()->can(url('cerise'), 'GET') && strpos(Request::url(), url('cerise')) !== 0)
                        <li><a href="{{ url('cerise') }}">Cerise</a></li>
                    @endif
                    @if (Auth::user()->can(url('opam'), 'GET') && strpos(Request::url(), url('opam')) !== 0)
                        <li><a href="{{ url('opam') }}">Opam</a></li>
                    @endif
                    <li><a target="_blank" href="{!! config('coeur.mantis')['root'] !!}?project_id={!! config('coeur.mantis')[strpos(Request::url(), url('cerise')) === 0 ? 'cerise' : 'coeur'] !!}">Mantis</a></li>
                    @if (Auth::check())
                        <li><a href="{{ url('/auth/logout') }}">Déconnexion</a></li>
                    @endif
                </ul>
            </li>
        </ul>
    </div>
</nav>
