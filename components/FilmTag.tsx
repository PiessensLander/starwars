'use client';
import useSWR from 'swr';
import axios from 'axios';
import { FilmTagProps } from '@/types';

const fetcher = (url: any) => axios.get(url).then((res) => res.data);

export const FilmTag = (props: FilmTagProps) => {
	const { data, error, isLoading } = useSWR(props.film, fetcher);
	console.log(props.film);

	if (data) {
		console.log(data);
	}
	return <span className='bg-amber-600 rounded-full px-4'>{data.title}</span>;
};
