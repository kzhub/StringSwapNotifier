import { EditIcon } from "@chakra-ui/icons";
import { useState } from "react";
import {
	Tr,
	Td,
} from '@chakra-ui/react'

export const TableListChild = ({
	id,
	title,
	startDate,
	changeDate,
	handleClickDelete
}) => {
	const handleClick = () => {
		handleClickDelete(id)
	}

	const [viewObject, setViewObject] = useState(null)

	return (
		<Tr>
			<Td>{title}</Td>
			<Td>{startDate}</Td>
			<Td >{changeDate}</Td>
			<Td>
				<EditIcon onClick={handleClick} />
			</Td>
		</Tr>
	);
}