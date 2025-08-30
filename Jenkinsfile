pipeline {
    agent any

    environment {
        DOCKER_COMPOSE_FILE = 'docker-compose.yml'
        // Extend PATH safely if needed; no Android paths overwriting
        PATH = "/usr/local/bin:/usr/bin:/bin"
    }

    stages {
        stage('Checkout') {
            steps {
                echo '🔄 Checking out code from GitHub...'
                git branch: 'master',
                    url: 'https://github.com/girisettyramakrishna/MERN_CI-CD4.git'
            }
        }

        stage('Build') {
            steps {
                echo '🏗 Building Docker containers...'
                sh """
                   export PATH=/usr/local/bin:/usr/bin:/bin
                   docker-compose -f ${DOCKER_COMPOSE_FILE} build
                """
            }
        }

        stage('Deploy') {
            steps {
                echo '🚀 Deploying Docker containers...'
                sh """
                   export PATH=/usr/local/bin:/usr/bin:/bin
                   docker-compose -f ${DOCKER_COMPOSE_FILE} down
                   docker-compose -f ${DOCKER_COMPOSE_FILE} up -d
                """
            }
        }
    }

    post {
        success {
            echo '✅ MERN app deployed successfully!'
        }
        failure {
            echo '❌ Deployment failed! Check the logs for errors.'
        }
    }
}
