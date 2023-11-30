'use client';
import useSWR from 'swr';
import axios from 'axios';
import { FilmTagProps } from '@/types';

const fetcher = (url: any) => axios.get(url).then((res) => res.data);

export const FilmTag = (props: FilmTagProps) => {
	const { data, error } = useSWR(props.film, fetcher);
	if (data) {
		return <span className='bg-amber-600 rounded-full px-4'>{data.title}</span>;
	}

	if (error) {
		return <p>Error fetching data. Please refresh the page.</p>;
	}

	return null;
};
