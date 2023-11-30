import { CharacterType } from '@/types';
import { FilmTag } from './FilmTag';

export const Character = (props: CharacterType) => {
	return (
		<div>
			<h1>{props.character.name}</h1>
			<div className='filmtags flex gap-4'>
				{props.character.films.map((film) => {
					return <FilmTag key={film} film={film} />;
				})}
			</div>
		</div>
	);
};
