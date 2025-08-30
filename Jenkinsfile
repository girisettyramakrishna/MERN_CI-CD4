pipeline {
    agent any

    environment {
        DOCKER_COMPOSE_FILE = 'docker-compose.yml'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'master',
                    url: 'https://github.com/girisettyramakrishna/MERN_CI-CD4.git'
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
