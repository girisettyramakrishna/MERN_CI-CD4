pipeline {
    agent any

    environment {
        DOCKER_COMPOSE_FILE = 'docker-compose.yml'
        PATH = "/usr/local/bin:/usr/bin:/bin"
        K8S_NAMESPACE = 'default'
        K8S_MANIFEST = 'k8s-deployment.yml'
        DOCKERHUB_USERNAME = 'your-dockerhub-username'
    }

    stages {
        stage('Checkout') {
            steps {
                echo '🔄 Checking out code from GitHub...'
                git branch: 'master',
                    url: 'https://github.com/girisettyramakrishna/MERN_CI-CD4.git'
            }
        }

        stage('Build Docker') {
            steps {
                echo '🏗 Building Docker containers...'
                sh """
                   export PATH=${PATH}
                   docker-compose -f ${DOCKER_COMPOSE_FILE} build
                """
            }
        }

        stage('Deploy') {
            steps {
                echo '🚀 Determining deployment method...'
                script {
                    def k8sAvailable = sh(
                        script: 'command -v kubectl && kubectl cluster-info >/dev/null 2>&1 && echo "true" || echo "false"',
                        returnStdout: true
                    ).trim()

                    if (k8sAvailable == 'true') {
                        echo '📡 Kubernetes detected! Deploying to K8s cluster...'

                        // Create namespace if it does not exist
                        sh """
                           export PATH=${PATH}
                           kubectl get namespace ${K8S_NAMESPACE} >/dev/null 2>&1 || kubectl create namespace ${K8S_NAMESPACE}
                           docker-compose -f ${DOCKER_COMPOSE_FILE} images | awk 'NR>1 {print \$1":"\$2}' | xargs -I {} docker tag {} ${DOCKERHUB_USERNAME}/{} && docker push ${DOCKERHUB_USERNAME}/{}
                           kubectl apply -f ${K8S_MANIFEST} -n ${K8S_NAMESPACE}
                           kubectl rollout status deployment/mern-frontend -n ${K8S_NAMESPACE}
                           kubectl rollout status deployment/mern-backend -n ${K8S_NAMESPACE}
                        """
                    } else {
                        echo '🐳 Kubernetes not detected. Deploying via Docker Compose...'
                        sh """
                           export PATH=${PATH}
                           docker-compose -f ${DOCKER_COMPOSE_FILE} down
                           docker-compose -f ${DOCKER_COMPOSE_FILE} up -d
                        """
                    }
                }
            }
        }
    }

    post {
        success {
            echo '✅ MERN app deployed successfully!'
        }
        failure {
            echo '❌ Deployment failed! Check logs for errors.'
        }
    }
}
