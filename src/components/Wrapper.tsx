import { useEffect, useState } from "react"

import { Col, Container, Row } from '../assets/styles'
import Autocomplete from "./Autocomplete"

import { Country } from "../modules/types"

import "../assets/styles.css"

const AutocompleteWrapper = () => {
	const [data, setData] = useState<Country[]>([])

	const fetchData = async () => {
		const res = await fetch(`https://restcountries.com/v3.1/lang/eng`);
		const data = await res.json();
		return setData(data);
	}
	  
	console.log(fetchData());
	  
	useEffect(() => {
		fetchData()
	}, [])

	return (
		<Container>
			<Row>
				<Col className='autocompleteContainer'>
					<Autocomplete data={data} />
				</Col>
			</Row>
		</Container>
	)
}

export default AutocompleteWrapper