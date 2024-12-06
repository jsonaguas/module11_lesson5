import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function CharacterDetails() {
    const { characterId } = useParams();
    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCharacterDetails = async () => {
            try {
                const response = await axios.get(`https://gateway.marvel.com/v1/public/characters/${characterId}?ts=1&apikey=0341cd0c30b09ddc69922058cf2819ef&hash=c2c4592f3b2eb488b52ea8b5e7d70c59`);
                console.log('Character Detail Response:', response.data.data);
                setCharacter(response.data.data.results[0]);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching character details:', error);
                setLoading(false);
            }
        };

        fetchCharacterDetails();
    }, [characterId]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!character) {
        return <p>No character found.</p>;
    }

    return (
        <div>
            <h1>{character.name}</h1>
            <p>{character.description || 'No description available.'}</p>
            <h3>Comics:</h3>
            <ul>
                {character.comics.items.map(comic => (
                    <li key={comic.resourceURI}>{comic.name}</li>
                ))}
            </ul>
        </div>
    );
}