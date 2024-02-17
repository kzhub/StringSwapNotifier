import axios from "axios";
import { useState } from "react";
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
	Input,
	FormControl,
	FormLabel
} from '@chakra-ui/react'
import { AlertDialog } from "@/components/atoms/AlertDialog";

const CreateModal = ({ isOpen, onClose }) => {
	const createData = async (data) => {
		await axios.post('/api/create', data)
	}

	const [formValues, setFormValues] = useState({
		usedString: '',
		registrationDate: '',
		replacementDate: '',
	});

	const [alertOpen, setAlertOpen] = useState(false)

	const handleClickCreate = () => {
		if (formValues.usedString === '' || formValues.registrationDate === '' || formValues.replacementDate === '') {
			setAlertOpen(true)
			console.log('すべての項目を入力してください');
			return; 
		} else {

			// const today = new Date()		
			// const testObj={
			// 	'string-name':'dadario 09-46',
			// 	'start-date':today,
			// 	'change-date':today
			// }
			// createData(testObj)
			onClose()
		}

	}
	const handleInputChange = (event, fieldName) => {
		setFormValues((prevValues) => ({
			...prevValues,
			[fieldName]: event.target.value,
		}));
	};

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>新規予定を作成</ModalHeader>
				<ModalCloseButton />

				<ModalBody style={{ margin: '0 20px' }}>
					<FormControl style={{ marginBottom: '20px' }}>
						<FormLabel>使用弦</FormLabel>
						<Input
							placeholder="Elixer 09-46"
							size="md"
							onChange={(event) => handleInputChange(event, 'usedString')}
						/>
					</FormControl>

					<FormControl style={{ marginBottom: '20px' }}>
						<FormLabel>登録日</FormLabel>
						<Input
							placeholder="Select Date and Time"
							size="md"
							type="date"
							onChange={(event) => handleInputChange(event, 'registrationDate')}
						/>
					</FormControl>

					<FormControl>
						<FormLabel>張り替え予定日</FormLabel>
						<Input
							placeholder="Select Date and Time"
							size="md"
							type="date"
							onChange={(event) => handleInputChange(event, 'replacementDate')}
						/>
					</FormControl>

					{alertOpen && <AlertDialog alertOpen={alertOpen} viewText='すべての項目を入力してください' />}

				</ModalBody>

				<ModalFooter>
					<Button variant='ghost' colorScheme='blue' mr={3} onClick={onClose}>
						キャンセル
					</Button>
					<Button colorScheme='blue' onClick={handleClickCreate}>保存</Button>

				</ModalFooter>

			</ModalContent>
		</Modal>
	);
}

export default CreateModal