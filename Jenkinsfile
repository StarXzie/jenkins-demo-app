pipeline {
    agent any

    triggers {
        // Check the repo for new commits every minute
        pollSCM('* * * * *')
    }

    stages {
        stage('Build') {
            steps {
                echo 'Installing dependencies and building the Docker image...'
                bat 'npm install'
                bat 'docker build -t jenkins-demo-app:latest .'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                bat 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying the app in a Docker container...'
                bat 'docker rm -f jenkins-demo-app || exit /b 0'
                bat 'docker run -d --name jenkins-demo-app -p 3000:3000 jenkins-demo-app:latest'
            }
        }
    }

    post {
        success {
            echo 'Pipeline finished successfully. App is on http://localhost:3000'
        }
        failure {
            echo 'Pipeline failed. Check the stage logs.'
        }
    }
}