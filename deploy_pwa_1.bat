@echo off
setlocal

REM ============================================================
REM  El Migrante Consciente - PWA Deploy
REM  Erwartet einen Quell-Ordner mit:
REM    - eine .html Datei (wird zu index.html)
REM    - sw.js (optional, ueberschreibt bestehende)
REM    - icon-192.png + icon-512.png (optional)
REM ============================================================

set REPO_DIR=C:\migrante
set /p TOKEN="Token: "
set REMOTE=https://%TOKEN%@github.com/Chammerich/elmigranteconciente.git
set SOURCE_DIR=%~1

echo.
echo ==========================================
echo  El Migrante Consciente - PWA Deploy
echo ==========================================
echo.

if "%SOURCE_DIR%"=="" (
    echo Quell-Ordner mit HTML + sw.js + icons eingeben:
    set /p SOURCE_DIR="Ordner: "
)

if not exist "%SOURCE_DIR%" (
    echo FEHLER: Ordner nicht gefunden: %SOURCE_DIR%
    pause
    exit /b 1
)

REM --- HTML-Datei finden ---
set HTML_FILE=
for %%f in ("%SOURCE_DIR%\*.html") do (
    if not defined HTML_FILE set HTML_FILE=%%f
)

if not defined HTML_FILE (
    echo FEHLER: Keine .html-Datei im Ordner gefunden.
    pause
    exit /b 1
)

echo HTML gefunden: %HTML_FILE%

set /p COMMIT_MSG="Version / Kommentar (z.B. v12.73): "
if "%COMMIT_MSG%"=="" set COMMIT_MSG=Update

echo.
echo Kopiere index.html ...
copy /Y "%HTML_FILE%" "%REPO_DIR%\index.html" >nul

REM --- PWA-Assets kopieren, wenn vorhanden ---
if exist "%SOURCE_DIR%\sw.js" (
    echo Kopiere sw.js ...
    copy /Y "%SOURCE_DIR%\sw.js" "%REPO_DIR%\sw.js" >nul
)

if exist "%SOURCE_DIR%\icon-192.png" (
    echo Kopiere icon-192.png ...
    copy /Y "%SOURCE_DIR%\icon-192.png" "%REPO_DIR%\icon-192.png" >nul
)

if exist "%SOURCE_DIR%\icon-512.png" (
    echo Kopiere icon-512.png ...
    copy /Y "%SOURCE_DIR%\icon-512.png" "%REPO_DIR%\icon-512.png" >nul
)

echo OK.
echo.

cd /d "%REPO_DIR%"

git remote set-url origin %REMOTE% >nul 2>&1

echo Committing alle Dateien (index.html, sw.js, icons) ...
git add -A
git commit -m "%COMMIT_MSG%"

echo Pushing ...
git push origin main

if errorlevel 1 (
    echo.
    echo FEHLER beim Push.
    pause
    exit /b 1
)

echo.
echo ==========================================
echo  LIVE in ~60 Sekunden:
echo  https://chammerich.github.io/elmigranteconciente/
echo  https://elmigranteconciente.com/
echo ==========================================
echo.
pause
