pipeline {
    agent any

    environment {
        DOCKER_COMPOSE_FILE = 'docker-compose.yml'
        PROJECT_NAME = 'mern-job-portal'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'master',
                    url: 'https://github.com/girisettyramakrishna/MERN_CI-CD3.git'
            }
        }

        stage('Build') {
            steps {
                sh "docker-compose -f ${DOCKER_COMPOSE_FILE} build"
            }
        }

        stage('Deploy') {
            steps {
                sh "docker-compose -f ${DOCKER_COMPOSE_FILE} down"
                sh "docker-compose -f ${DOCKER_COMPOSE_FILE} up -d"
            }
        }
    }
}
