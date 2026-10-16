@echo off
for /d %%D in ("C:\Users\DELL\AppData\Local\OpenAI\Codex\runtimes\cua_node\*") do set "PATH=%%~fD\bin;%PATH%"
echo Dang khoi dong may chu xem thu Fagon Website (Production Preview)...
corepack pnpm run preview --port 4321 --host
