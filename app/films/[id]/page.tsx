'use client';
import { notFound } from 'next/navigation';
import useSWR from 'swr';
import axios from 'axios';
import { FilmTag } from '@/components/FilmTag';

const fetcher = (url: any) => axios.get(url).then((res) => res.data);

export default function CharacterDetailPage({ params }: { params: { id: string } }) {
	const { data, error, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_SWAPI_BASE_URL}/films/${params.id}`, fetcher);

	if (data) {
		return (
			<div>
				<h1>{data.title}</h1>
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
