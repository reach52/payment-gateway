pipeline{
    agent any

    tools {nodejs "Node-14.15.3"}

    stages{
        stage("build"){
            steps{
                echo 'building application'
                sh 'yarn install'
            }
        }
        stage("test"){
            steps{
                echo 'testing application'
                sh 'yarn test'
            }
        }
        stage("deploy"){
            steps{
                echo 'building application'
            }
        }
    }
}