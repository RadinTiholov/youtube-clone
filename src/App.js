import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import { Feed } from './components/Feed/Feed';
import { VideoDetail } from './components/VideoDetail/VideoDetail';
import { ChannelDetail } from './components/ChannelDetail/ChannelDetail';
import { useState } from 'react';

function App() {
    const [videos, setVideos] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState("New");
    const navigate = useNavigate();
    const filter = (e, search) => {
        e.preventDefault();
        setSelectedGenre(search);
        navigate('/');
    }
    return (
        <div>
            <Header filter={filter} />
            <Routes>
                <Route path='/' element={<Feed
                    videos={videos}
                    setVideos={setVideos}
                    selectedGenre={selectedGenre}
                    setSelectedGenre={setSelectedGenre} />}
                />
                <Route path='/video/:id' element={<VideoDetail />} />
                <Route path='/channel/:id' element={<ChannelDetail />} />
            </Routes>
        </div>
    );
}

export default App;
