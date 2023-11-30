'use client';
import useSWR from 'swr';
import axios from 'axios';
import { FilmTagProps } from '@/types';

const fetcher = (url: any) => axios.get(url).then((res) => res.data);

export const FilmTag = (props: FilmTagProps) => {
	const { data, error } = useSWR(props.film, fetcher);
	if (data) {
		//Get the movie ID from the swapi data by splitting the URL
		let swapiId = data.url.split('/').filter(Boolean);

		//Reverse the array so the movie ID is in position 0
		const id = swapiId.reverse()[0];

		return (
			<a href={`/films/${id}`}>
				<span className='bg-amber-600 rounded-full px-4'>{data.title}</span>
			</a>
		);
	}

	if (error) {
		return <p>Error fetching data. Please refresh the page.</p>;
	}

	return null;
};
