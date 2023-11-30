'use client';
import useSWR from 'swr';
import axios from 'axios';
import { FilmTag } from '@/components/FilmTag';

const fetcher = (url: any) => axios.get(url).then((res) => res.data);

export default function CharacterDetailPage({ params }: { params: { id: string } }) {
	const { data, error, isLoading } = useSWR(`${process.env.NEXT_PUBLIC_SWAPI_BASE_URL}/people/${params.id}`, fetcher);

	if (data) {
		return (
			<div className=' container mx-auto px-6 mt-6'>
				<h1 className='text-2xl text-yellow-300 font-bold text-center mb-4'>{data.name}</h1>
				<div className='grid grid-cols-12 text-center'>
					<div className='col-span-4'>
						<p>Height: {data.height}cm</p>
					</div>
					<div className='col-span-4'>
						<p>Eye color: {data.eye_color}</p>
					</div>
					<div className='col-span-4'>
						<p>Birth year: {data.birth_year}</p>
					</div>
				</div>
				<div className='movies flex items-center flex-col py-6'>
					<p>Movie(s):</p>
					<div className='flex gap-4'>
						{data.films.map((film: string) => {
							return <FilmTag key={film} film={film} />;
						})}
					</div>
				</div>
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
