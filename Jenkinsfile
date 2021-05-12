pipeline{
    agent any
    stages{
        stage("run frontend"){
            steps{
                echo 'executing dependencies'
                nodejs('Node-14.15.3'){
                    sh 'yarn install'
                    sh 'yarn test'
                }
            }
        }
        stage("run backend"){
            steps{
                echo 'executing gradle'
                withGradle(){
                    sh './gradlew -v'
                }
            }
        }
    }
}