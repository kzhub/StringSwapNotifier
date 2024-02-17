import { db } from "../../../firebase/admin";
import { NextApiRequest, NextApiResponse } from 'next';

function generateRandomId() {
  return db.collection('string').doc().id;
}

const writeToFirestore = async (randomId, insertData) => {
  try {
    await db.collection('strings').doc(randomId).set(insertData);
    // console.log('Document successfully written with ID:', randomId);
  } catch (error) {
    console.error('Error writing document:', error);
  }
};

const createNewData = async (req: NextApiRequest, res: NextApiResponse) => {
		const insertData = req.body
		const randomId = generateRandomId()

		await writeToFirestore(randomId, insertData)
    
  
};

export default createNewData;