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
				<span className={`${id == 1 ? 'bg-orange-600' : id == 2 ? 'bg-amber-600' : id == 3 ? 'bg-yellow-600 text-black' : id == 4 ? 'bg-lime-600' : id == 5 ? 'bg-green-600' : id == 6 ? 'bg-emerald-600' : null}  rounded-full px-4`}>{data.title}</span>
			</a>
		);
	}

	if (error) {
		return <p>Error fetching data. Please refresh the page.</p>;
	}

	return null;
};
