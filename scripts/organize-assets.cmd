@echo off
setlocal enabledelayedexpansion

cd /d "%~dp0\..\src\assets"

if not exist icons mkdir icons
if not exist images mkdir images
if not exist music mkdir music

for %%f in (*.png) do (
  if not exist "icons\%%~nxf" move /Y "%%f" "icons\%%~nxf" >nul
)

for %%f in (*.jpg) do (
  if not exist "images\%%~nxf" move /Y "%%f" "images\%%~nxf" >nul
)

for %%f in (*.jpeg) do (
  if not exist "images\%%~nxf" move /Y "%%f" "images\%%~nxf" >nul
)

for %%f in (*.mp3) do (
  if not exist "music\%%~nxf" move /Y "%%f" "music\%%~nxf" >nul
)

echo Asset folders organized.
