import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../grid.css'; 

export default function BrowseCharacters() {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const response = await axios.get('https://gateway.marvel.com/v1/public/characters?ts=1&apikey=0341cd0c30b09ddc69922058cf2819ef&hash=c2c4592f3b2eb488b52ea8b5e7d70c59');
                setCharacters(response.data.data.results);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching characters:', error);
                setLoading(false);
            }
        };

        fetchCharacters();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <div className="character-grid">
                {characters.map(character => (
                    <div key={character.id} className="character-card">
                        <Link to={`/details/${character.id}`}>
                            <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name} />
                            <h3>{character.name}</h3>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}