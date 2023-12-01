import { CharacterType } from '@/types';
import { FilmTag } from './FilmTag';

export const Character = ({ character }: CharacterType) => {
	//Get the character ID from the swapi data by splitting the URL
	let swapiId = character.url.split('/').filter(Boolean);

	//Reverse the array so the character ID is in position 0
	const id = swapiId.reverse()[0];
	return (
		<a href={`/characters/${id}`} className='col-span-full lg:col-span-4 bg-neutral-800 rounded-md p-4 hover:bg-neutral-900 duration-300'>
			<h2 className='mb-2'>{character.name}</h2>
			<div className='filmtags flex gap-4 flex-wrap'>
				{character.films.map((film: string) => {
					return <FilmTag key={film} film={film} />;
				})}
			</div>
		</a>
	);
};
