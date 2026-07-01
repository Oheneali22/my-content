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
                sh 'npx pnpm@10.4.1 install --frozen-lockfile'
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
                sh 'docker build -f Dockerfile -t $IMAGE_REPO:$TAG -t $IMAGE_REPO:latest .'
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
                    docker push $IMAGE_REPO:latest
                    '''
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh '''
                kubectl apply -f k8s/ -n prod
                kubectl set image deployment/my-content my-content=$IMAGE_REPO:latest -n prod
                kubectl rollout status deployment/my-content -n prod --timeout=180s
                kubectl get pods -n prod -l app=my-content
                '''
            }
        }
    }
}