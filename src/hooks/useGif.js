import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

export const useGif = (tag) => {

    //urls
    const tagurl = `https://api.giphy.com/v1/gifs/random?api_key=HsGKzmclzOzfy8gt6xu4BY4EYCljOlBp&tag=${tag}&rating=g`;

    const randomurl = `https://api.giphy.com/v1/gifs/random?api_key=HsGKzmclzOzfy8gt6xu4BY4EYCljOlBp&tag=&rating=g`;

    //useState to store GIFs and tag value;
    const [gif, setGif] = useState('');
    const [loading, setLoading] = useState(false);

    //useEffect

    async function fetchData() {
        setLoading(true);
        const output = await axios.get(tag ? (tagurl) : (randomurl));
        const imageSource = output.data.data.images.downsized_large.url;
        setGif(imageSource);
        setLoading(false)
    }

    //using to get some data at the start of our app
    useEffect(() => {
        fetchData();
    }, [])


    return {gif, loading, fetchData};

}
