import axios from 'axios';
import { db } from '../../../firebase/admin';
import { NextApiRequest, NextApiResponse } from 'next';

const readAllDocuments = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Firestoreからデータ取得
    const collectionRef = db.collection('strings');
    const querySnapshot = await collectionRef.get();

    const firestoreData = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    res.status(200).json({
      firestoreData: firestoreData,
    });
  } catch (error) {
    console.error('エラーが発生しました:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default readAllDocuments;
