pipeline{
    agent any
    stages{
        stage("run backend"){
            steps{
                echo 'executing dependencies '
                nodejs("Node-14.15.3"){
                    sh 'yarn install'
                }
            }
        }
    }
}