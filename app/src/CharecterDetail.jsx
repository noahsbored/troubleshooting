import { useEffect } from 'react';

function CharacterDetail({ characterId }) {
  useEffect(() => {
    const getit = async () => {
      const timestamp = new Date().getTime().toString(); 
      const publicKey = "6844622a9f70a43d99efc5f70803549f"; 
      const hash = '721125f6ef6c9d342e99a4a30f9f4ba4'; 

      try {
        const response = await fetch(`https://gateway.marvel.com/v1/public/characters/${characterId}?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`);
        const data = await response.json();

        if (data.data && data.data.results && data.data.results.length > 0) {
          console.log(data.data.results[0]); 
        }
      } catch (error) {
        console.error('Error fetching character details:', error);
      }
    };

    getit();
  }, [characterId]);

  return null; 
}

export default CharacterDetail;
