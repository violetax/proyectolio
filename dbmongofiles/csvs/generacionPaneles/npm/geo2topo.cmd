@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\node_modules\topojson\node_modules\topojson-server\bin\geo2topo" %*
) ELSE (
  @SETLOCAL
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  "%~dp0\node_modules\topojson\node_modules\topojson-server\bin\geo2topo" %*
)