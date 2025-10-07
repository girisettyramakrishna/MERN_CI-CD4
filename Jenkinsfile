pipeline {
    agent any

    environment {
        DOCKER_COMPOSE_FILE = 'docker-compose.yml'
        K8S_MANIFEST = 'k8s-deployment.yml'
        K8S_NAMESPACE = 'default'
        PATH = "/usr/local/bin:/usr/bin:/bin"
        DOCKERHUB_USERNAME = 'girisettyramakrishna8' // Change as needed
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
                    // Check if Kubernetes is available
                    def k8sAvailable = sh(
                        script: 'command -v kubectl && kubectl cluster-info >/dev/null 2>&1 && echo "true" || echo "false"',
                        returnStdout: true
                    ).trim()

                    if (k8sAvailable == 'true') {
                        echo '📡 Kubernetes detected! Deploying to K8s cluster...'

                        // Tag Docker images and push to Docker Hub
                        sh """
                           docker-compose -f ${DOCKER_COMPOSE_FILE} images | awk 'NR>1 {print \$1":"\$2}' | \
                           xargs -I {} docker tag {} ${DOCKERHUB_USERNAME}/{} && docker push ${DOCKERHUB_USERNAME}/{}
                        """

                        // Create namespace if not exists and apply manifests
                        sh """
                           kubectl get namespace ${K8S_NAMESPACE} >/dev/null 2>&1 || kubectl create namespace ${K8S_NAMESPACE}
                           kubectl apply -f ${K8S_MANIFEST} -n ${K8S_NAMESPACE}
                           kubectl rollout status deployment/mern-frontend -n ${K8S_NAMESPACE}
                           kubectl rollout status deployment/mern-backend -n ${K8S_NAMESPACE}
                        """
                    } else {
                        echo '🐳 Kubernetes not detected. Deploying via Docker Compose...'
                        sh """
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
