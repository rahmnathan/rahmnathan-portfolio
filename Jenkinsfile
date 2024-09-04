pipeline {
    agent {
        kubernetes {
            yaml """
kind: Pod
metadata:
  name: jenkins-agent
spec:
  containers:
  - name: jnlp
    image: rahmnathan/inbound-agent
    imagePullPolicy: Always
    tty: true
    volumeMounts:
      - name: docker
        mountPath: /var/run/docker.sock
    securityContext:
      runAsGroup: 998 # docker group on K8s node
      runAsUser: 1000 # jenkins user in container
  volumes:
    - name: docker
      hostPath:
        path: '/var/run/docker.sock'
"""
        }
    }

    tools {
        maven 'Maven'
        jdk 'Java 21'
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/rahmnathan/rahmnathan-portfolio.git'
            }
        }
        stage('Set Version') {
            steps {
                script {
                    PROJECT_VERSION = sh(
                            script: "'${mvnHome}/bin/mvn' help:evaluate -Dexpression=project.version -q -DforceStdout",
                            returnStdout: true
                    ).trim()
                    env.NEW_VERSION = "${PROJECT_VERSION}.${BUILD_NUMBER}"
                    sh "mvn -DnewVersion='${NEW_VERSION}' versions:set"
                }
            }
        }
        stage('Tag') {
            steps {
                sh 'git config --global user.email "rahm.nathan@gmail.com"'
                sh 'git config --global user.name "rahmnathan"'
                sshagent(credentials: ['Github-Git']) {
                    sh 'mkdir -p /home/jenkins/.ssh'
                    sh 'ssh-keyscan  github.com >> ~/.ssh/known_hosts'
                    sh "mvn -Dtag=${NEW_VERSION} scm:tag"
                }
            }
        }
        stage('Package') {
            steps {
                sh "mvn clean install -DskipTests"
            }
        }
        stage('Test') {
            steps {
                sh "mvn test"
            }
        }
        stage('Docker Build') {
            steps {
                sh "mvn dockerfile:build"
            }
        }
        stage('Docker Push') {
            environment {
                DOCKERHUB = credentials('Dockerhub')
            }
            steps {
                sh "mvn dockerfile:push -Ddockerfile.username=$DOCKERHUB_USR -Ddockerfile.password='$DOCKERHUB_PSW'"
            }
        }
        stage('Deploy to Kubernetes') {
            environment {
                KUBE_CONFIG = credentials('Kubeconfig')
            }
            steps {
                sh "helm upgrade --install -n portfolio rahmnathan-portfolio ./target/classes/rahmnathan-portfolio/ --kubeconfig $KUBE_CONFIG"
                sh "kubectl -n portfolio rollout status deployment rahmnathan-portfolio --timeout=10m --kubeconfig $KUBE_CONFIG"
            }
        }
    }
}