@echo off
chcp 65001 >nul
cd /d "%~dp0"

echo 正在启动《源氏物语人物图鉴》本地服务器...
set "NODE_EXE=C:\Users\Lenovo\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
start "" /b "%NODE_EXE%" "%~dp0serve.mjs"
timeout /t 2 /nobreak >nul
start "" "http://localhost:4173"
echo 已打开浏览器。若未自动打开，请手动访问 http://localhost:4173
echo 关闭网站时，请直接关闭本窗口。
pause
