import * as fs from 'fs';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        console.log(req.body);
        try {
            let data = await fs.promises.readdir('contactdata');
            console.log(data);
            await fs.promises.writeFile(`contactdata/${data.length + 1}.json`, JSON.stringify(req.body));
            res.status(200).json({ message: "Data saved successfully" });
        } catch (error) {
            console.error('Error saving data:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        res.status(200).json(["allBlogs"]);
    }
}
