@echo off
for /d %%D in ("C:\Users\DELL\AppData\Local\OpenAI\Codex\runtimes\cua_node\*") do set "PATH=%%~fD\bin;%PATH%"
echo Dang khoi dong may chu phat trien Fagon Website (Dev Server)...
corepack pnpm run dev --port 4321 --host
