'use client';
import { Character } from '@/components/Character';
import useSWR from 'swr';
import axios from 'axios';

const fetcher = (url: any) => axios.get(url).then((res) => res.data);

export default function Page() {
	const { data, error, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_SWAPI_BASE_URL}/people`, fetcher);

	if (data) {
		console.log(data);
	}

	if (data) {
		return (
			<main>
				{data &&
					data.results.map((item: any) => {
						console.log(typeof item);
						return <Character key={item.name} character={item} />;
					})}
			</main>
		);
	}

	if (error) {
		return <h1>Error fetching data. Please refresh the page.</h1>;
	}

	return <h1>Fetching data...</h1>;
}
