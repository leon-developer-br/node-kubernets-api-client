const Client = require('kubernetes-client').Client
const client = new Client({ version: '1.13' })

const getNamespaces = async () => {
    const namespaces = await client.api.v1.namespaces.get()
    console.log(namespaces.body.items)
}

const getPods = async () => {    
    const { body } = await client.api.v1.pods.get()
    console.log(body.items)
}

const getNamespacePods = async (namespace) => {
    const { body } = await client.api.v1.namespaces(namespace).pods.get();
    console.log(body.items);
}

const getNamespaceDeployments = async (namespace) => {
    const { body } = await client.apis.apps.v1.namespaces(namespace).deployments.get();
    console.log(body.items);
}


//getNamespaces()
//getPods()
//getNamespacePods("default")
//getNamespaceDeployments("default")
