'use client';
import useSWR from 'swr';
import axios from 'axios';

const fetcher = (url: any) => axios.get(url).then((res) => res.data);

export default function CharacterDetailPage({ params }: { params: { id: string } }) {
	const { data, error, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_SWAPI_BASE_URL}/people/${params.id}`, fetcher);

	if (data) {
		return (
			<div>
				<h1>{data.name}</h1>
			</div>
		);
	}

	if (isLoading) {
		return <h1>Fetching data...</h1>;
	}

	if (error) {
		return <h1>There was an error loading the data. Please refresh the page.</h1>;
	}
}
