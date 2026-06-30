pipeline {
    agent any

    environment {
        IMAGE_REPO = 'oheneali22/my-content'
        TAG = "${BUILD_NUMBER}"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Oheneali22/my-content.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npx pnpm@10.4.1 install'
            }
        }

        stage('Type Check') {
            steps {
                sh 'npx pnpm@10.4.1 check'
            }
        }

        stage('Build App') {
            steps {
                sh 'npx pnpm@10.4.1 build'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_REPO:$TAG .'
                sh 'docker images | grep my-content'
            }
        }

        stage('Smoke Test Container') {
            steps {
                sh '''
                docker rm -f my-content-test || true
                docker run -d --name my-content-test -p 3001:3000 $IMAGE_REPO:$TAG
                sleep 5
                curl -f http://localhost:3001
                docker rm -f my-content-test
                '''
            }
        }

        stage('Push Docker Image') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-creds',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {
                    sh '''
                    echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
                    docker push $IMAGE_REPO:$TAG
                    '''
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh '''
                kubectl apply -f k8s/namespace.yaml
                kubectl apply -f k8s/deployment.yaml

                kubectl set image deployment/my-content \
                  my-content=$IMAGE_REPO:$TAG \
                  -n prod

                kubectl rollout status deployment/my-content -n prod
                '''
            }
        }
    }
}