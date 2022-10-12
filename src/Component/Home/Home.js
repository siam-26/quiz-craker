import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './Home.css';
import ShowTopics from './ShowTopics/ShowTopics';

const Home = () => {
    const topics = useLoaderData();

    return (
        <div>

            <div className='img'>

                <h1>Get KnowLedgeBit and test your knowledge</h1>
            </div>

            <div className='topic-container'>
                {
                    topics.data.map(topic => <ShowTopics
                        key={topic.id}
                        topic={topic}
                    >

                    </ShowTopics>)
                }
            </div>
        </div>
    );
};

export default Home;