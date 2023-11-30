'use client';
import useSWR from 'swr';
import axios from 'axios';

const fetcher = (url: any) => axios.get(url).then((res) => res.data);

export default function FilmDetailPage({ params }: { params: { id: string } }) {
	const { data, error, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_SWAPI_BASE_URL}/films/${params.id}`, fetcher);

	if (data) {
		return (
			<div className='container mx-auto px-6'>
				<h1 className='text-2xl text-yellow-300 font-bold text-center mb-4'>{data.title}</h1>
				<p>{data.opening_crawl}</p>
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
