# Local Development

This document explains how to install, run, inspect, stop, and troubleshoot `navidhasan.com` in a local development environment.

The repository is designed to work well in Linux and WSL.

## Requirements

Install:

- Git;
- Node.js;
- npm;
- a Linux shell or WSL for the included process helper.

The project does not currently require:

- Python;
- Docker;
- a database;
- Redis;
- a backend service;
- application environment variables.

## Repository location

The current local project path is:

```text
$HOME/experiment/websites/navidhasan-web

Commands in project documentation assume execution from this directory unless stated otherwise.

Avoid hardcoding a personal absolute path into source files or scripts.

Install dependencies

From the repository root:

npm ci

Use npm ci when package-lock.json is present and dependencies should match the locked versions exactly.

Use npm install only when intentionally changing dependencies or regenerating the lock file.

Standard development server

Run:

npm run dev

This starts the normal Next.js development server.

The default Next.js port is typically 3000 unless another port is specified or already occupied.

Stop the foreground server with:

Ctrl+C
Repository local helper

The repository includes:

scripts/navidhasan-web-local

This helper provides a managed local development process on port:

3001

It stores runtime state outside the repository.

Default state location:

${XDG_STATE_HOME:-$HOME/.local/state}/navidhasan-web-local

This includes:

run/frontend.pid
logs/frontend.log

The helper is designed to be invoked through command names:

run_navidhasan-web
status_navidhasan-web
stop_navidhasan-web

The script checks its own command name and runs the matching action.

Command setup

The three command names should point to:

scripts/navidhasan-web-local

A local installation may use symbolic links in a directory already included in PATH.

Example target directory:

$HOME/.local/bin

The exact setup may differ by machine.

Do not commit machine-specific symbolic links or personal shell configuration into the repository.

Start the managed server

Run:

run_navidhasan-web

The helper will:

locate the repository from its own script path;
verify that package.json exists;
create runtime-state directories;
check whether the managed process is already running;
remove a stale PID record when safe;
refuse to start when port 3001 is occupied;
run npm ci when node_modules is absent;
start Next.js in development mode;
bind to 0.0.0.0;
wait for an HTTP response;
record the process ID and process start time;
print the local URL and log path.

Expected browser URL:

http://localhost:3001

Internal readiness URL:

http://127.0.0.1:3001
Check server status

Run:

status_navidhasan-web

The command reports:

whether the managed application is running;
the managed PID;
the browser URL;
whether the PID record is stale or absent;
port 3001 status;
HTTP response status;
recent development log output.

Use this before starting another server when unsure whether one is already active.

Stop the managed server

Run:

stop_navidhasan-web

The helper:

reads the stored PID record;
verifies process identity using process start time;
verifies the expected process group;
refuses to stop an unexpected process;
sends a graceful termination signal;
waits for the process group to stop;
uses forced termination only after graceful shutdown fails;
removes the PID record.

This safety logic must not be weakened casually.

Process identity protection

A PID can be reused by the operating system.

For that reason, the helper stores:

the process ID;
the process start time.

Before treating a PID as managed, it compares the stored start time with the current process start time from /proc.

This reduces the risk of stopping an unrelated process after PID reuse.

Process-group protection

The development server is started in its own process group.

When stopping, the helper verifies that the stored process is the expected process-group leader.

It refuses to continue when this relationship is unexpected.

This protects unrelated processes from accidental termination.

Port protection

Before starting, the helper checks whether port 3001 is already listening.

When occupied, it:

prints available process information;
refuses to start;
does not terminate the existing process automatically.

Do not change this behavior to kill arbitrary port occupants.

Logs

Managed development logs are stored at:

${XDG_STATE_HOME:-$HOME/.local/state}/navidhasan-web-local/logs/frontend.log

The status command displays recent log lines.

To inspect the complete log manually:

cat "${XDG_STATE_HOME:-$HOME/.local/state}/navidhasan-web-local/logs/frontend.log"

To follow the log:

tail -f "${XDG_STATE_HOME:-$HOME/.local/state}/navidhasan-web-local/logs/frontend.log"

The log is outside the repository and should not appear in Git status.

PID record

The managed PID record is stored at:

${XDG_STATE_HOME:-$HOME/.local/state}/navidhasan-web-local/run/frontend.pid

It contains:

PID PROCESS_START_TIME

Do not edit it while the managed server is active.

A stale PID record may be removed automatically when the helper confirms that the recorded process is no longer valid.

Binding behavior

The helper starts Next.js with:

--hostname 0.0.0.0
--port 3001

Binding to 0.0.0.0 allows access from the local machine and, depending on firewall and network configuration, other devices on the same network.

The documented browser URL remains:

http://localhost:3001

Do not expose the development server to an untrusted network.

WSL access

When running inside WSL, Windows can usually open:

http://localhost:3001

If access fails:

confirm the helper reports the application as running;
confirm port 3001 is listening;
confirm the HTTP check succeeds;
inspect the log;
check Windows firewall or local networking;
confirm another application is not intercepting the port.
Standard versus managed workflow

Use the standard workflow when:

actively watching terminal output;
debugging startup behavior;
working in one temporary shell session.

Run:

npm run dev

Use the managed workflow when:

the server should continue after the shell command returns;
consistent port 3001 is useful;
logs should remain available;
safe start, status, and stop commands are preferred.

Run:

run_navidhasan-web

Do not run both workflows on the same port.

Development URL checks

Basic HTTP check:

curl -I http://127.0.0.1:3001

Status-only check:

curl \
  --silent \
  --output /dev/null \
  --write-out "%{http_code}\n" \
  http://127.0.0.1:3001

A successful development response normally returns an HTTP success code.

Development route review

Review these routes during local work:

http://localhost:3001/
http://localhost:3001/work
http://localhost:3001/services
http://localhost:3001/about
http://localhost:3001/contact
http://localhost:3001/journal
http://localhost:3001/portal

Check both desktop and mobile viewport sizes.

Common commands

Start standard development:

npm run dev

Start managed development:

run_navidhasan-web

Check managed status:

status_navidhasan-web

Stop managed development:

stop_navidhasan-web

Type-check:

npx tsc --noEmit

Lint:

npm run lint

Build:

npm run build

Check Git formatting:

git diff --check

Inspect changed files:

git status --short
Troubleshooting
Dependencies are missing

Symptom:

node_modules does not exist

For the standard workflow, run:

npm ci

The managed helper runs npm ci automatically when node_modules is absent.

Port 3001 is occupied

Check:

ss -ltnp | grep ':3001'

Do not kill the process until its identity and purpose are known.

Use another port for a temporary manual server when appropriate:

npm run dev -- --port 3002
Managed server is reported as stopped

Run:

status_navidhasan-web

Then inspect the recent log.

If no valid process exists, start it again:

run_navidhasan-web
Stale PID record

The helper normally removes stale PID records safely.

Do not manually delete the record while the managed process may still be active.

First run:

status_navidhasan-web

Then use the normal stop or start command.

Development server exits during startup

Inspect:

tail -n 100 \
  "${XDG_STATE_HOME:-$HOME/.local/state}/navidhasan-web-local/logs/frontend.log"

Common causes include:

dependency installation problems;
TypeScript compilation errors;
invalid Next.js configuration;
port conflicts;
malformed source files;
unsupported static-export behavior.
Browser cannot connect

Verify:

status_navidhasan-web

Then test:

curl -I http://127.0.0.1:3001

When curl succeeds but the browser fails, inspect:

the browser URL;
firewall configuration;
proxy settings;
WSL networking;
browser extensions.
Changes are not visible

Try:

save the edited file;
inspect the development log;
refresh the browser;
perform a hard refresh;
confirm the correct port;
confirm the correct repository is running;
restart the development server only when necessary.
Build works but development fails

Inspect the development log and compare:

npm run dev

with:

npm run build

Development and production builds may reveal different issues.

Development works but build fails

Static export may reject behavior that works during development.

Inspect for:

runtime-only APIs;
dynamic server behavior;
request-time headers;
request-time cookies;
unsupported route generation;
metadata routes without static behavior.
Environment variables

The current site does not require application environment variables.

No .env.example is currently needed.

Do not create environment files merely for convention.

Never commit:

credentials;
API keys;
tokens;
private keys;
production environment contents;
authorization headers.
Generated directories

Do not edit:

.next/
out/
node_modules/

These directories are generated or installed.

They are ignored by Git.

Source changes must be made in the tracked project files.

Safety rules

Do not:

use rm -rf against the repository;
kill arbitrary processes based only on port number;
remove PID records without checking status;
modify generated output as source;
hardcode local usernames into project files;
commit logs;
commit runtime-state files;
commit secrets;
run destructive Git cleanup without explicit approval.
Before ending a local session

Recommended steps:

save all source files;
check the development server;
review important routes;
stop the managed server when it is no longer needed;
inspect Git status;
avoid leaving unexplained temporary files.

Useful commands:

status_navidhasan-web
git status --short
Before committing

Run:

npx tsc --noEmit
npm run lint
git diff --check
npm run build

Also inspect:

git status --short
git diff --stat

Do not commit generated directories.

Related documentation
build-and-deployment.md
verification.md
../architecture/overview.md
../architecture/frontend.md
../project/status.md
../../README.md
../../AGENTS.md

Next file:

`docs/operations/build-and-deployment.md`
