\# jenkins-demo-app: CI/CD with Jenkins + Docker



DevOps Internship, Task 2: Create a Simple Jenkins Pipeline for CI/CD.



\## What it does

A Jenkins pipeline (declarative `Jenkinsfile`) that runs automatically on every commit:

1\. \*\*Build\*\*: `npm install`, then builds a Docker image

2\. \*\*Test\*\*: `npm test`

3\. \*\*Deploy\*\*: runs the app in a Docker container on port 3000



\## Tech

Jenkins (LTS 2.580.2), Docker Desktop, Node.js (Express), Git/GitHub



\## Files

\- `Jenkinsfile`: the pipeline definition

\- `app.js`, `server.js`: the web app

\- `test/app.test.js`: test

\- `Dockerfile`: image recipe



\## How I set it up

1\. Installed Java 21 (Temurin) and Jenkins on Windows (runs at http://localhost:8080)

2\. Installed the suggested plugins, including Pipeline and Git

3\. Created a Pipeline job: "Pipeline script from SCM" pointing at this repo, branch `main`

4\. Enabled \*\*Poll SCM\*\* (`\* \* \* \* \*`) so Jenkins checks the repo every minute and builds on new commits. A webhook can't reach a Jenkins running on localhost, so polling is used instead.

5\. Installed Docker Desktop so the Build and Deploy stages can run Docker commands



\## Testing the trigger

I changed the message in `app.js`, committed and pushed. Jenkins started build #3 by itself ("Started by an SCM change"), all stages passed, and http://localhost:3000 showed the new message.



\## Screenshots

See the `screenshots/` folder: dashboard, build trigger, console output, running app.

