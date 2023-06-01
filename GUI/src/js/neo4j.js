
import {ref, reactive} from 'vue'
import neo4j from 'neo4j-driver'

export function neoInit(){
    const uri = "bolt://localhost:7687"
    const user = "neo4j"
    const password = "123"
    const driver = neo4j.driver(uri, neo4j.auth.basic(user, password))
    const session = driver.session()
    return session
}

export async function neoQuery(session, cypher){
    const output = await session.run(cypher)
    // console.log(output)
    const output_cleaned = output['records'].map(obj => obj["_fields"]);
    // console.log(output_cleaned)
    return output_cleaned 
}
