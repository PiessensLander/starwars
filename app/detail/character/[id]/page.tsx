'use client';
import { notFound } from 'next/navigation';
import useSWR from 'swr';
import axios from 'axios';
import { FilmTag } from '@/components/FilmTag';

const fetcher = (url: any) => axios.get(url).then((res) => res.data);

export default function CharacterDetailPage({ params }: { params: { id: string } }) {
	const { data, error, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_SWAPI_BASE_URL}/people/${params.id}`, fetcher);

	if (data) {
		console.log(data);
		return (
			<div>
				<h1>{data.name}</h1>
				<div className='filmtags flex gap-4'>
					{data.films.map((film: string) => {
						return <FilmTag key={film} film={film} />;
					})}
				</div>
				<p>Height: {data.height}cm</p>
				<p>Birthyear: {data.birth_year}</p>
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
