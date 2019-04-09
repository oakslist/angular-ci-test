#!groovy
env.NODEJS_HOME = "${tool 'Node 6.x'}"
// on windows
env.PATH="${env.NODEJS_HOME};${env.PATH}"
sh 'npm --version'

try {
    node('build') {

        currentBuild.result = 'SUCCESS'

        try {
            stage('Build') {
                // here is nodejs
            }
        }
        catch (buildError) {
            currentBuild.result = 'FAILURE'
            throw buildError
        }
    }

} catch (buildError) {
    throw buildError
}