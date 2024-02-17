import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../firebase/admin';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	const { targetCellId } = req.query
	if (targetCellId) {

		const collectionRef = db.collection('strings');
		const documentRef = collectionRef.doc(targetCellId);
		console.log('Document successfully deleted!');
		documentRef
			.delete()
			.then(() => {
				console.log('Document successfully deleted!');
				return res.status(200).json({ message: 'Data deleted successfully' })
			})
			.catch((error) => {
				console.error('Error deleting document:', error);
			});

	} else {
		return res.status(500)
	}
}

export default handler;