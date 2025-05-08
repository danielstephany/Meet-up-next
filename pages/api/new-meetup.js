import { MongoClient } from "mongodb";

export default async function handler(req, res){
    if(req.method === "POST"){
        // const {title, image, address, description} = req.body;
        console.log(typeof req.body)

        const client = await MongoClient.connect(process.env.DB_URL)
        const db = client.db();

        const meetupsCollection = db.collection('meetups')
        const result = await meetupsCollection.insertOne(JSON.parse(req.body))

        console.log(result);
        client.close();

        res.status(200).json({message: "meetup inserted"});
    }
}