@echo off
chcp 65001 >nul
set "PATH=C:\Users\Lenovo\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin;C:\Users\Lenovo\.cache\codex-runtimes\codex-primary-runtime\dependencies\bin\fallback;%PATH%"
cd /d "%~dp0"
echo 正在启动开发服务器（热更新），浏览器请访问 http://localhost:5173
call pnpm run dev
pause
