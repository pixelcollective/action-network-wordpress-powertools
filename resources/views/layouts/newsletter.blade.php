<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
@include('actionnetwork::blocks.partials.head')

<body style="background-color:#101820;">
  <div style="background-color:#101820;">
      @yield('content')
  </div>
</body>

</html>

@php(wp_die())